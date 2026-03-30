import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const concepts = [
    { name: "Components and Props", icon: "🧩", color: "#FF6B6B", description: "Reusable UI building blocks with data flow" },
    { name: "State Management", icon: "🎯", color: "#4ECDC4", description: "Managing component data and lifecycle" },
    { name: "Event Handling", icon: "👆", color: "#45B7D1", description: "User interactions and responses" },
    { name: "Forms", icon: "📝", color: "#FFA500", description: "Controlled inputs and validation" },
    { name: "Routing", icon: "🛣️", color: "#9C88FF", description: "Navigation between different views" },
    { name: "Refs", icon: "🎣", color: "#FDCB6E", description: "Direct DOM access and manipulation" },
    { name: "Keys", icon: "🔑", color: "#6C5CE7", description: "Unique identifiers for list items" },
    { name: "Hooks", icon: "🪝", color: "#A29BFE", description: "Stateful logic in functional components" },
    { name: "Animations", icon: "✨", color: "#FD79A8", description: "Smooth transitions and interactions" },
    { name: "Styling", icon: "🎨", color: "#00B894", description: "Beautiful and responsive design" }
  ];

  return (
    <motion.div
      style={{
        maxWidth: '1000px',
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
          fontSize: '3em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        📚 About This React Demo
      </motion.h1>

      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '25px',
          padding: '40px',
          marginBottom: '40px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          textAlign: 'center'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p
          style={{
            fontSize: '1.3em',
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          This application showcases modern React development techniques with beautiful animations,
          colorful design, and interactive components.
        </motion.p>
        <motion.p
          style={{
            fontSize: '1.1em',
            color: '#666',
            fontStyle: 'italic'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Built with React 19, React Router, and Framer Motion
        </motion.p>
      </motion.div>

      <motion.h2
        style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.2em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        🚀 React Concepts Covered
      </motion.h2>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.name}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${concept.color}30`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '60px',
                height: '60px',
                background: `${concept.color}20`,
                borderRadius: '50%',
                zIndex: 0
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />

            <motion.div
              style={{
                fontSize: '3em',
                marginBottom: '15px',
                position: 'relative',
                zIndex: 1
              }}
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              {concept.icon}
            </motion.div>

            <motion.h3
              style={{
                color: concept.color,
                marginBottom: '10px',
                fontSize: '1.3em',
                position: 'relative',
                zIndex: 1
              }}
              variants={itemVariants}
            >
              {concept.name}
            </motion.h3>

            <motion.p
              style={{
                color: '#666',
                lineHeight: '1.5',
                position: 'relative',
                zIndex: 1
              }}
              variants={itemVariants}
            >
              {concept.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.h3
          style={{
            color: '#FFD700',
            marginBottom: '20px',
            fontSize: '1.8em'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          🎯 Ready to Explore?
        </motion.h3>
        <motion.p
          style={{
            color: 'white',
            fontSize: '1.1em',
            marginBottom: '20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Use the navigation menu above to explore each concept in detail.
          Each page demonstrates different React features with interactive examples.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <motion.span
            style={{
              display: 'inline-block',
              fontSize: '2em',
              animation: 'bounce 2s infinite'
            }}
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            👆
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;