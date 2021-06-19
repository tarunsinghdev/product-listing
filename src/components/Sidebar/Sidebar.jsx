import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

const Sidebar = ({
  sortPrice,
  setSortPrice,
  category,
  setCategory,
  brand,
  setBrand,
  size,
  setSize,
}) => {
  const onClearFilters = () => {
    setSortPrice('All');
    setCategory('All');
    setBrand('All');
    setSize('All');
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Filter</h3>
        </Col>
        <Col>
          <Button onClick={onClearFilters}>Clear Filters</Button>
        </Col>
      </Row>
      <Row>
        <Col>Sort by :</Col>
        <Col>
          <Form.Control
            as="select"
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
          >
            <option value="Low to High">Low to High</option>
            <option value="Hight to Low">High to Low</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>Category :</Col>
        <Col>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>Brand :</Col>
        <Col>
          <Form.Control
            as="select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Flying Machine">Flying Machine</option>
            <option value="Van Heusen">Van Heusen</option>
            <option value="WildCraft">WildCraft</option>
            <option value="London Hills">London Hills</option>
            <option value="Jaffrey">Jaffrey</option>
            <option value="Sara">Sara</option>
            <option value="Addidas">Addidas</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>Size :</Col>
        <Col>
          <Form.Control
            as="select"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="All">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Form.Control>
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
