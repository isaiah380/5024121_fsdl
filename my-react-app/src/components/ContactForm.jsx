import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: '#4ECDC4',
      boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)',
      transition: { duration: 0.2 }
    },
    blur: {
      scale: 1,
      borderColor: '#ddd',
      boxShadow: 'none'
    }
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
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        style={{
          color: '#333',
          marginBottom: '25px',
          textAlign: 'center',
          fontSize: '1.8em'
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        📝 Contact Form
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          style={{ marginBottom: '20px' }}
          variants={inputVariants}
          initial="blur"
          whileFocus="focus"
        >
          <motion.label
            htmlFor="name"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '1.1em'
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            👤 Name:
          </motion.label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '1em',
              background: 'rgba(255, 255, 255, 0.9)',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            whileFocus={{
              scale: 1.02,
              borderColor: '#4ECDC4',
              boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)'
            }}
          />
        </motion.div>

        <motion.div
          style={{ marginBottom: '20px' }}
          variants={inputVariants}
          initial="blur"
          whileFocus="focus"
        >
          <motion.label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '1.1em'
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            📧 Email:
          </motion.label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '1em',
              background: 'rgba(255, 255, 255, 0.9)',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            whileFocus={{
              scale: 1.02,
              borderColor: '#4ECDC4',
              boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)'
            }}
          />
        </motion.div>

        <motion.div
          style={{ marginBottom: '25px' }}
          variants={inputVariants}
          initial="blur"
          whileFocus="focus"
        >
          <motion.label
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '1.1em'
            }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            💬 Message:
          </motion.label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '1em',
              background: 'rgba(255, 255, 255, 0.9)',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
            whileFocus={{
              scale: 1.02,
              borderColor: '#4ECDC4',
              boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)'
            }}
          />
        </motion.div>

        <motion.button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            background: isSubmitted
              ? 'linear-gradient(45deg, #4CAF50, #45B7D1)'
              : 'linear-gradient(45deg, #FF6B6B, #FFA500)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1.2em',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {isSubmitted ? '✅ Submitted!' : '🚀 Submit'}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;