import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <motion.div
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        maxWidth: '400px',
        margin: '0 auto'
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.h2
        style={{
          color: '#333',
          marginBottom: '20px',
          fontSize: '2em'
        }}
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {count}
      </motion.h2>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <motion.button
          onClick={decrement}
          style={{
            background: 'linear-gradient(45deg, #FF6B6B, #DC143C)',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '1.2em',
            fontWeight: 'bold',
            minWidth: '60px'
          }}
          whileHover={{
            scale: 1.1,
            background: 'linear-gradient(45deg, #DC143C, #FF6B6B)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          ➖
        </motion.button>

        <motion.button
          onClick={reset}
          style={{
            background: 'linear-gradient(45deg, #FFA500, #FFD700)',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '1.2em',
            fontWeight: 'bold',
            minWidth: '60px'
          }}
          whileHover={{
            scale: 1.1,
            background: 'linear-gradient(45deg, #FFD700, #FFA500)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          🔄
        </motion.button>

        <motion.button
          onClick={increment}
          style={{
            background: 'linear-gradient(45deg, #4CAF50, #45B7D1)',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '1.2em',
            fontWeight: 'bold',
            minWidth: '60px'
          }}
          whileHover={{
            scale: 1.1,
            background: 'linear-gradient(45deg, #45B7D1, #4CAF50)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          ➕
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Counter;