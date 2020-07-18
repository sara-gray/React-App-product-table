import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form style={{ padding: '1rem' }}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search products'
          style={{ width: '100%', height: '50px' }}
        />
        <input type='checkbox' id='inStock' name='inStock' />
        <label htmlFor='inStock'>Only show products in stock</label>
      </form>
    );
  }
}

export default SearchBar;
