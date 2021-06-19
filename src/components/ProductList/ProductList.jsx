import React from 'react';
import { Row, Container } from 'react-bootstrap';
import products from '../../data/products.json';

import Product from '../Product/Product';

const ProductList = ({ sortPrice, category, brand, size }) => {
  // const prods = products.map((p) => JSON.parse(JSON.stringify(p)));

  const prods = products;
  console.log(prods);

  let items = [...prods];

  items.sort((a, b) =>
    sortPrice === 'Low to High'
      ? a.price > b.price
        ? 1
        : -1
      : a.price < b.price
      ? 1
      : -1
  );
  let filterByCategory = [...items];
  if (category !== 'All') {
    filterByCategory = items.filter((x) => x.category === category);
    // console.log('After filter', filterByCategory);
  }

  let filterByBrand = [...filterByCategory];
  if (brand !== 'All') {
    filterByBrand = filterByCategory.filter((x) => x.brand === brand);
    // console.log('After filter by brand', filterByBrand);
  }

  let filterBySize = [...filterByBrand];
  if (size !== 'All') {
    filterBySize = filterByBrand.filter((x) =>
      x.size.includes(size) ? x : ''
    );
    console.log(filterBySize);
  }

  items = [...filterBySize];
  return (
    <div>
      <Container>
        <Row>
          <Product p={items} />
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
