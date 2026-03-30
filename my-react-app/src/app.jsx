import React from 'react';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';
import ContactForm from './components/ContactForm.jsx';
import Counter from './components/Counter.jsx';

function App() {
  const products = [
    { name: "Shirt", price: 25 },
    { name: "Jeans", price: 50 },
    { name: "Shoes", price: 75 }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Components Demo</h1>

      <section>
        <h2>1. Components and Props</h2>
        <p>Below are Product components receiving props (name, price) and an event handler.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>2. State and Events</h2>
        <p>The Counter component demonstrates state management and event handling.</p>
        <Counter />
      </section>

      <section>
        <h2>3. Shopping Cart (State Management)</h2>
        <p>The Cart component manages its own state for cart items.</p>
        <Cart />
      </section>

      <section>
        <h2>4. Forms and Controlled Components</h2>
        <p>The Contact Form demonstrates controlled inputs and form submission.</p>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;