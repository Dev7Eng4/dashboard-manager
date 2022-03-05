import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { navbars } from './item';

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
  const [fixed, setFixed] = useState(true);
  const [expand, setExpand] = useState('');

  const renderLink = (link: Partial<NavBarItem>) => (
    <ListGroup.Item key={link.innerText}>
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
    <nav
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
          onClick={() => setFixed(!fixed)}
        />
      </div>
      <ListGroup className='custom-scroll'>
        {navbars.map((link) => (
          <React.Fragment key={link.innerText}>
            {!!link.subLinks ? (
              <>
                <ListGroup.Item>
                  <span
                    className={`link-expand ${
                      link.innerText === expand ? 'expand' : ''
                    }`}
                    onClick={() =>
                      setExpand(link.innerText === expand ? '' : link.innerText)
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
  );
};

export default Navbar;
