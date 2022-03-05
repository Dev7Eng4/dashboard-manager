import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Card.scss';

type Props = {
  totalNumber: string;
  txtSub: string;
  icon: string[];
};

const CardDetail = ({ totalNumber, txtSub, icon }: Props) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{totalNumber}</Card.Title>
            <Card.Subtitle>{txtSub}</Card.Subtitle>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <FontAwesomeIcon icon={icon as IconProp} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardDetail;
