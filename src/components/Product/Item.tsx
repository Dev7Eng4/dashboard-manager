import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { ProductResponse } from 'api/types/Product';

type Props = {
  item: ProductResponse;
};

const Item = ({ item }: Props) => {
  return (
    <Card>
      <Card.Img variant='top' src={item.icon} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button>Remove</Button>
      </Card.Footer>
    </Card>
  );
};

export default Item;
