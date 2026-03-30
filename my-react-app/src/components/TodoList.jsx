import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build components', completed: true },
    { id: 3, text: 'Master hooks', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(...todos.map(todo => todo.id)) + 1;
      setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      style={{
        maxWidth: '600px',
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
          marginBottom: '30px',
          fontSize: '2.5em',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        📝 Todo List - Keys Demo
      </motion.h1>

      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p
          style={{
            color: '#333',
            marginBottom: '20px',
            fontSize: '1.1em',
            textAlign: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          This demonstrates the importance of unique keys in React lists.
        </motion.p>

        <motion.div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            style={{
              flex: 1,
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '25px',
              fontSize: '1em',
              background: 'rgba(255, 255, 255, 0.9)',
              minWidth: '200px'
            }}
            whileFocus={{
              scale: 1.02,
              borderColor: '#4ECDC4',
              boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)'
            }}
          />
          <motion.button
            onClick={addTodo}
            style={{
              background: 'linear-gradient(45deg, #4CAF50, #45B7D1)',
              color: 'white',
              border: 'none',
              padding: '15px 25px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1em',
              fontWeight: 'bold'
            }}
            whileHover={{
              scale: 1.05,
              background: 'linear-gradient(45deg, #45B7D1, #4CAF50)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            ➕ Add Todo
          </motion.button>
        </motion.div>

        <AnimatePresence>
          <motion.ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {todos.map((todo) => (
                <motion.li
                  key={todo.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '15px 20px',
                    margin: '10px 0',
                    background: todo.completed
                      ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)'
                      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    borderRadius: '15px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: `2px solid ${todo.completed ? '#4CAF50' : '#ddd'}`
                  }}
                  variants={itemVariants}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  layout
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      flex: 1
                    }}
                  >
                    <motion.input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer'
                      }}
                      whileTap={{ scale: 0.8 }}
                    />
                    <motion.span
                      style={{
                        fontSize: '1.1em',
                        fontWeight: 'bold',
                        color: '#333',
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        opacity: todo.completed ? 0.7 : 1
                      }}
                      animate={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        opacity: todo.completed ? 0.7 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {todo.text}
                    </motion.span>
                  </motion.div>
                  <motion.button
                    onClick={() => deleteTodo(todo.id)}
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
                    🗑️ Delete
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </AnimatePresence>
      </motion.div>

      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '25px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.h3
          style={{
            color: '#FF6B6B',
            marginBottom: '15px',
            textAlign: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          🔑 Keys are crucial for:
        </motion.h3>
        <motion.ul
          style={{
            color: '#333',
            lineHeight: '1.8',
            paddingLeft: '20px'
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            'Efficient re-rendering',
            'Correct component lifecycle',
            'Proper state management in lists',
            'Animation performance',
            'DOM manipulation accuracy'
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <motion.span
                style={{
                  color: '#4CAF50',
                  fontSize: '1.2em'
                }}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                ✅
              </motion.span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default TodoList;