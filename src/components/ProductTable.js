import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;

    // Data - array of products
    const products = this.props.products;

    products.forEach((product) => {
      if (product.category !== lastCategory) {
        lastCategory = product.category;

        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }

      rows.push(<ProductRow product={product} key={product.name} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
