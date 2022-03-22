import Filter from 'components/Filter';
import React from 'react';
import { Container } from 'react-bootstrap';

const optionsFilter = [{ value: '', label: 'All' }];
const Product = () => {
  return (
    <Container fluid>
      <Filter
        searchValue='a'
        btnLabel='Add Product'
        optionsFilter={optionsFilter}
        onSearchChange={() => {}}
        onFilterChange={() => {}}
        onAddClick={() => {}}
      />

      <h1>Product</h1>
    </Container>
  );
};

export default Product;
