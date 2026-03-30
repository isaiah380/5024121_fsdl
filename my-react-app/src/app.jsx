import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';
import ContactForm from './components/ContactForm.jsx';
import Counter from './components/Counter.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import HooksDemo from './components/HooksDemo.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const products = [
    { name: "Shirt", price: 25, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop" },
    { name: "Jeans", price: 50, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop" },
    { name: "Shoes", price: 75, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop" }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <motion.nav
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '15px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 100
          }}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            {[
              { to: "/", text: "Home" },
              { to: "/components", text: "Components" },
              { to: "/hooks", text: "Hooks & Refs" },
              { to: "/keys", text: "Keys Demo" },
              { to: "/about", text: "About" }
            ].map((item, index) => (
              <motion.div key={item.to} variants={navItemVariants}>
                <Link
                  to={item.to}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>

        <motion.div
          style={{ padding: '20px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 style={{
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '30px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  🎨 React Components Demo
                </h1>

                <section style={{ marginBottom: '40px' }}>
                  <motion.h2
                    style={{
                      color: '#FFD700',
                      borderBottom: '3px solid #FFD700',
                      paddingBottom: '10px',
                      marginBottom: '20px'
                    }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    1. Components and Props
                  </motion.h2>
                  <motion.p
                    style={{ color: 'white', marginBottom: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Below are Product components receiving props (name, price) and an event handler.
                  </motion.p>
                  <motion.div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '20px',
                      justifyContent: 'center'
                    }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {products.map((product, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <Product
                          name={product.name}
                          price={product.price}
                          image={product.image}
                          onAddToCart={handleAddToCart}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <motion.h2
                    style={{
                      color: '#FF6B6B',
                      borderBottom: '3px solid #FF6B6B',
                      paddingBottom: '10px',
                      marginBottom: '20px'
                    }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    2. State and Events
                  </motion.h2>
                  <motion.p
                    style={{ color: 'white', marginBottom: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    The Counter component demonstrates state management and event handling.
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                  >
                    <Counter />
                  </motion.div>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <motion.h2
                    style={{
                      color: '#4ECDC4',
                      borderBottom: '3px solid #4ECDC4',
                      paddingBottom: '10px',
                      marginBottom: '20px'
                    }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    3. Shopping Cart (State Management)
                  </motion.h2>
                  <motion.p
                    style={{ color: 'white', marginBottom: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    The Cart component manages its own state for cart items.
                  </motion.p>
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.6, type: "spring" }}
                  >
                    <Cart />
                  </motion.div>
                </section>

                <section>
                  <motion.h2
                    style={{
                      color: '#45B7D1',
                      borderBottom: '3px solid #45B7D1',
                      paddingBottom: '10px',
                      marginBottom: '20px'
                    }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    4. Forms and Controlled Components
                  </motion.h2>
                  <motion.p
                    style={{ color: 'white', marginBottom: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    The Contact Form demonstrates controlled inputs and form submission.
                  </motion.p>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.2 }}
                  >
                    <ContactForm />
                  </motion.div>
                </section>
              </motion.div>
            } />
            <Route path="/hooks" element={<HooksDemo />} />
            <Route path="/keys" element={<TodoList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;