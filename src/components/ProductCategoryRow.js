import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    // Catagory from product data
    const category = this.props.category;

    return (
      <tr style={{ color: 'teal', fontWeight: 'bold' }}>
        <th colSpan='2'>{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
