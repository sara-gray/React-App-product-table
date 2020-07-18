import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    // Display a product. Each prouct has a name, price and stocked staus
    const product = this.props.product;
    // Colour an unstocked item red
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
