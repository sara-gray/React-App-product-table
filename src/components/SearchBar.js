import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <form style={{ padding: '1rem' }}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search products'
          value={filterText}
          style={{ width: '100%', height: '50px' }}
        />
        <input
          type='checkbox'
          id='inStock'
          name='inStock'
          checked={inStockOnly}
        />
        <label htmlFor='inStock'>Only show products in stock</label>
      </form>
    );
  }
}

export default SearchBar;
