import React, { MutableRefObject, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { navbars } from './item';
import { useClickOutside } from 'hooks';

interface NavBarSubItem {
  innerText: string;
  route?: string;
}

export interface NavBarItem extends NavBarSubItem {
  subLinks?: NavBarSubItem[];
  leftIcon: [IconPrefix, IconName];
}

type Props = {
  openNavbar: boolean;
  onToggleNavbar: () => void;
};

const Navbar = ({ openNavbar, onToggleNavbar }: Props) => {
  const history = useLocation();
  const refInside = useRef<HTMLElement>(null);
  console.log('lo', history);

  const [fixed, setFixed] = useState(true);
  const [expand, setExpand] = useState('');

  useClickOutside(refInside, () => {
    if (openNavbar) {
      onToggleNavbar();
    }
  });

  const parentLinkActive = useMemo(() => {
    return (
      navbars.find((link) => {
        return (
          link.subLinks &&
          link.subLinks.find((subLink) => subLink.route === history.pathname)
        );
      })?.innerText ?? ''
    );
  }, [history, navbars]);

  console.log('a', parentLinkActive);

  const handleCircleClick = () => {
    // if (fixed) {
    //   setExpand('');
    // }
    setFixed(!fixed);
  };

  const renderLink = (link: Partial<NavBarItem>) => (
    <ListGroup.Item key={link.innerText} className='custom-theme'>
      <NavLink to={link.route ?? '/'}>
        {link.leftIcon && (
          <span className='list-item__icon'>
            <FontAwesomeIcon icon={link.leftIcon} />
          </span>
        )}
        <span className='list-item__text'>{link.innerText}</span>
      </NavLink>
    </ListGroup.Item>
  );

  return (
    <>
      <nav
        ref={refInside}
        className={`${openNavbar ? 'open' : ''} ${
          fixed ? 'expand' : 'hide'
        } custom-theme`}
      >
        <div className='nav-brand'>
          <Link to='/' className='logo-min'>
            E
          </Link>
          <Link to='/' className='logo-full'>
            E-SELL
          </Link>

          <FontAwesomeIcon
            icon={['fas', 'times']}
            className='btn-expand-navbar'
            onClick={onToggleNavbar}
          />
          <FontAwesomeIcon
            icon={['far', fixed ? 'dot-circle' : 'circle']}
            className='btn-expand-navbar'
            onClick={handleCircleClick}
          />
        </div>
        <ListGroup className='custom-scroll'>
          {navbars.map((link) => (
            <React.Fragment key={link.innerText}>
              {!!link.subLinks ? (
                <>
                  <ListGroup.Item className='custom-theme'>
                    <span
                      className={`link-expand ${
                        link.innerText === expand ? 'expand' : ''
                      } ${
                        link.innerText === parentLinkActive
                          ? 'sublink-active'
                          : ''
                      }`}
                      onClick={() =>
                        setExpand(
                          link.innerText === expand ? '' : link.innerText
                        )
                      }
                    >
                      <span className='list-item__icon'>
                        <FontAwesomeIcon icon={link.leftIcon} />
                      </span>
                      <span className='list-item__text'>{link.innerText}</span>
                      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                    </span>
                  </ListGroup.Item>
                  <ListGroup
                    className={`${
                      expand === link.innerText
                        ? `h-${link.subLinks.length}-item`
                        : ''
                    } `}
                  >
                    {link.subLinks.map((subLink) => renderLink(subLink))}
                  </ListGroup>
                </>
              ) : (
                <>{renderLink(link)}</>
              )}
            </React.Fragment>
          ))}
        </ListGroup>
      </nav>
      <div className={`layer ${openNavbar ? 'show' : ''}`}></div>
    </>
  );
};

export default Navbar;
