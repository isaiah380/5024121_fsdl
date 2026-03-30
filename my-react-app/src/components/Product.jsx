import React from 'react';
import { motion } from 'framer-motion';

function Product({ name, price, image, onAddToCart }) {
  return (
    <motion.div
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        padding: '20px',
        margin: '10px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        textAlign: 'center',
        maxWidth: '300px',
        overflow: 'hidden'
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {image && (
        <motion.img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '15px'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <motion.h3
        style={{
          color: '#333',
          marginBottom: '10px',
          fontSize: '1.4em'
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h3>
      <motion.p
        style={{
          color: '#FF6B6B',
          fontSize: '1.2em',
          fontWeight: 'bold',
          marginBottom: '15px'
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ${price}
      </motion.p>
      <motion.button
        onClick={() => onAddToCart(name)}
        style={{
          background: 'linear-gradient(45deg, #FF6B6B, #FFA500)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        whileHover={{
          background: 'linear-gradient(45deg, #FFA500, #FF6B6B)',
          scale: 1.05
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        🛒 Add to Cart
      </motion.button>
    </motion.div>
  );
}

export default Product;