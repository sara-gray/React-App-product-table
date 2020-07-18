import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    filterText: 'ball',
    inStockOnly: true,
  };

  render() {
    const products = this.props.products;
    const { filterText, inStockOnly } = this.state;

    const handleFilterTextChange = (filterText) => {
      this.setState({ filterText });
    };

    const handleInStockChange = (inStockOnly) => {
      this.setState({ inStockOnly });
    };

    return (
      <div className='table'>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockChange={handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
