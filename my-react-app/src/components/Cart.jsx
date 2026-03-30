import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };

  return (
    <motion.div
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        maxWidth: '500px',
        margin: '0 auto'
      }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.h2
        style={{
          color: '#333',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '1.8em'
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🛒 Shopping Cart
      </motion.h2>

      <AnimatePresence>
        {cartItems.length === 0 ? (
          <motion.p
            style={{
              textAlign: 'center',
              color: '#666',
              fontStyle: 'italic',
              padding: '40px 20px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Your cart is empty. Add some items! 🛍️
          </motion.p>
        ) : (
          <motion.ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.li
                  key={`${item}-${index}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '15px',
                    margin: '10px 0',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  layout
                >
                  <motion.span
                    style={{
                      fontSize: '1.1em',
                      fontWeight: 'bold',
                      color: '#333'
                    }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item}
                  </motion.span>
                  <motion.button
                    onClick={() => removeFromCart(index)}
                    style={{
                      background: 'linear-gradient(45deg, #FF6B6B, #DC143C)',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '0.9em',
                      fontWeight: 'bold'
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: 'linear-gradient(45deg, #DC143C, #FF6B6B)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ❌ Remove
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div
        style={{
          marginTop: '20px',
          padding: '15px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '10px',
          color: 'white',
          textAlign: 'center',
          fontSize: '1.2em',
          fontWeight: 'bold'
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Total items: {cartItems.length}
      </motion.div>
    </motion.div>
  );
}

export default Cart;