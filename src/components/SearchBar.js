import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      filterText,
      inStockOnly,
      onFilterTextChange,
      onInStockChange,
    } = this.props;

    const filterTextHandler = (e) => {
      onFilterTextChange(e.target.value);
    };

    const inStockHandler = (e) => {
      onInStockChange(e.target.checked);
    };

    return (
      <form style={{ padding: '1rem' }}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search products'
          onChange={filterTextHandler}
          value={filterText}
          style={{ width: '100%', height: '50px' }}
        />
        <input
          type='checkbox'
          id='inStock'
          name='inStock'
          checked={inStockOnly}
          onChange={inStockHandler}
        />
        <label htmlFor='inStock'>Only show products in stock</label>
      </form>
    );
  }
}

export default SearchBar;
