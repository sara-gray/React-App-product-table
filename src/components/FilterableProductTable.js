import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    const products = this.props.products;

    return (
      <div className='table'>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
