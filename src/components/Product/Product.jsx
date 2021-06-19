import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ p }) =>
  p.map((pr) => (
    <Card className="m-2" key={pr.id} style={{ width: '18rem' }}>
      <Card.Img style={{ height: '15rem' }} variant="top" src={pr.imageUrl} />
      <Card.Body>
        <Card.Title>{pr.title}</Card.Title>
        <Card.Text>
          {pr.price} {pr.size}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

export default Product;
