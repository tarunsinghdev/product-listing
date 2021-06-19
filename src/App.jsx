import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductList from './components/ProductList/ProductList';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [sortPrice, setSortPrice] = useState('Low to High');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [size, setSize] = useState('All');

  return (
    <Row>
      <Col md={3}>
        <Sidebar
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          size={size}
          setSize={setSize}
        />
      </Col>
      <Col md={9}>
        <ProductList
          sortPrice={sortPrice}
          category={category}
          brand={brand}
          size={size}
        />
      </Col>
    </Row>
  );
};

export default App;
