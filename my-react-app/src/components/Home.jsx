import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      style={{
        textAlign: 'center',
        padding: '50px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        animate={floatingAnimation}
        style={{ marginBottom: '30px' }}
      >
        <motion.h1
          style={{
            fontSize: '3.5em',
            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
          variants={itemVariants}
        >
          🎨 Welcome to React Demo
        </motion.h1>
      </motion.div>

      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          marginBottom: '30px'
        }}
        variants={itemVariants}
      >
        <motion.h2
          style={{
            color: '#FFD700',
            fontSize: '2em',
            marginBottom: '20px'
          }}
          variants={itemVariants}
        >
          🚀 Explore React Concepts
        </motion.h2>
        <motion.p
          style={{
            color: 'white',
            fontSize: '1.2em',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}
          variants={itemVariants}
        >
          Discover the power of React through interactive components, smooth animations,
          and modern web development techniques.
        </motion.p>
      </motion.div>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '40px'
        }}
        variants={containerVariants}
      >
        {[
          {
            title: "Components & Props",
            description: "Learn about reusable components and data flow",
            icon: "🧩",
            color: "#FF6B6B"
          },
          {
            title: "State & Hooks",
            description: "Master state management with React hooks",
            icon: "🎣",
            color: "#4ECDC4"
          },
          {
            title: "Animations",
            description: "Create smooth, engaging user experiences",
            icon: "✨",
            color: "#45B7D1"
          },
          {
            title: "Forms & Events",
            description: "Handle user interactions and form validation",
            icon: "📝",
            color: "#FFA500"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '15px',
              padding: '25px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: `2px solid ${feature.color}20`
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
                fontSize: '3em',
                marginBottom: '15px'
              }}
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {feature.icon}
            </motion.div>
            <motion.h3
              style={{
                color: feature.color,
                marginBottom: '10px',
                fontSize: '1.3em'
              }}
              variants={itemVariants}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              style={{
                color: '#666',
                lineHeight: '1.5'
              }}
              variants={itemVariants}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{
          marginTop: '50px',
          padding: '20px',
          background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        variants={itemVariants}
      >
        <motion.p
          style={{
            color: 'white',
            fontSize: '1.1em',
            fontStyle: 'italic'
          }}
          variants={itemVariants}
        >
          🎯 Use the navigation above to explore different React concepts and see them in action!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Home;