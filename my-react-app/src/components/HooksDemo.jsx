import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function HooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const countRef = useRef(0);

  // useEffect for side effects
  useEffect(() => {
    console.log('Component mounted or count changed:', count);
    document.title = `Count: ${count}`;

    // Cleanup function
    return () => {
      console.log('Cleanup for count:', count);
    };
  }, [count]);

  // useEffect that runs only once on mount
  useEffect(() => {
    console.log('Component mounted');
    inputRef.current.focus(); // Focus input on mount using ref

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  const increment = () => {
    setCount(count + 1);
    countRef.current += 1; // Direct mutation with ref
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <motion.div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '2.5em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        🎣 Hooks & Refs Demo
      </motion.h1>

      <motion.section
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          style={{
            color: '#FF6B6B',
            borderBottom: '3px solid #FF6B6B',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          useState Hook
        </motion.h2>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={increment}
            style={{
              background: 'linear-gradient(45deg, #4CAF50, #45B7D1)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1.2em',
              fontWeight: 'bold'
            }}
            whileHover={{
              scale: 1.1,
              background: 'linear-gradient(45deg, #45B7D1, #4CAF50)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            ➕ Increment
          </motion.button>
          <motion.p
            style={{
              fontSize: '2em',
              fontWeight: 'bold',
              color: '#333',
              minWidth: '100px',
              textAlign: 'center'
            }}
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {count}
          </motion.p>
          <motion.p
            style={{
              fontSize: '1.1em',
              color: '#666',
              fontStyle: 'italic'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Ref count: {countRef.current}
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          style={{
            color: '#4ECDC4',
            borderBottom: '3px solid #4ECDC4',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          useRef Hook
        </motion.h2>
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.input
            ref={inputRef}
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Type your name"
            style={{
              padding: '15px 20px',
              border: '2px solid #ddd',
              borderRadius: '25px',
              fontSize: '1.1em',
              width: '300px',
              maxWidth: '90%',
              background: 'rgba(255, 255, 255, 0.9)',
              transition: 'all 0.3s ease'
            }}
            whileFocus={{
              scale: 1.05,
              borderColor: '#4ECDC4',
              boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)'
            }}
          />
          <motion.button
            onClick={focusInput}
            style={{
              background: 'linear-gradient(45deg, #FFA500, #FFD700)',
              color: 'white',
              border: 'none',
              padding: '12px 25px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1em',
              fontWeight: 'bold'
            }}
            whileHover={{
              scale: 1.05,
              background: 'linear-gradient(45deg, #FFD700, #FFA500)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            🎯 Focus Input
          </motion.button>
          <motion.p
            style={{
              fontSize: '1.2em',
              color: '#333',
              fontWeight: 'bold'
            }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={name}
          >
            Hello, {name || 'stranger'}! 👋
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.h2
          style={{
            color: '#45B7D1',
            borderBottom: '3px solid #45B7D1',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          useEffect Hook
        </motion.h2>
        <motion.div
          style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.p
            style={{
              color: '#333',
              fontSize: '1.1em',
              lineHeight: '1.6',
              marginBottom: '15px'
            }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Check the browser console and document title for useEffect demonstrations.
          </motion.p>
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              style={{
                background: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '0.9em'
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0
              }}
            >
              Component Mounted
            </motion.div>
            <motion.div
              style={{
                background: '#FF6B6B',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '0.9em'
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              Title Updated
            </motion.div>
            <motion.div
              style={{
                background: '#45B7D1',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '0.9em'
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            >
              Input Focused
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default HooksDemo;