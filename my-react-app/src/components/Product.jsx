import React from 'react';

function Product({ name, price, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => onAddToCart(name)}>Add to Cart</button>
    </div>
  );
}

export default Product;