/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    },
    exit: { opacity: 0, x: isLogin ? 50 : -50, transition: { duration: 0.3 } }
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}>
        <motion.div
          style={styles.shape1}
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={styles.shape2}
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        style={styles.card}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.div style={styles.header} variants={itemVariants}>
          <h1 style={styles.title}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p style={styles.subtitle}>
            {isLogin ? 'Sign in to your account' : 'Join us today'}
          </p>
        </motion.div>

        <motion.div style={styles.toggleContainer} variants={itemVariants}>
          <motion.button
            style={{
              ...styles.toggleButton,
              ...(isLogin ? styles.toggleButtonActive : {})
            }}
            onClick={() => setIsLogin(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            style={{
              ...styles.toggleButton,
              ...(!isLogin ? styles.toggleButtonActive : {})
            }}
            onClick={() => setIsLogin(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? 'login' : 'signup'}
            style={styles.form}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={handleSubmit}
          >
            {!isLogin && (
              <motion.div style={styles.inputGroup} variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </motion.div>
            )}

            <motion.div style={styles.inputGroup} variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </motion.div>

            <motion.div style={styles.inputGroup} variants={itemVariants}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </motion.div>

            {!isLogin && (
              <motion.div style={styles.inputGroup} variants={itemVariants}>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </motion.div>
            )}

            {isLogin && (
              <motion.div style={styles.forgotPassword} variants={itemVariants}>
                <a href="#" style={styles.link}>Forgot Password?</a>
              </motion.div>
            )}

            <motion.button
              type="submit"
              style={styles.submitButton}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </motion.button>

            <motion.div style={styles.divider} variants={itemVariants}>
              <span className="dividerText" style={styles.dividerText}>or</span>
            </motion.div>

            <motion.div style={styles.socialButtons} variants={itemVariants}>
              <motion.button
                type="button"
                style={styles.socialButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </motion.button>
            </motion.div>
          </motion.form>
        </AnimatePresence>

        <motion.div style={styles.footer} variants={itemVariants}>
          <p style={styles.footerText}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button style={styles.switchButton} onClick={toggleMode}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const styles = {
  // ... [unchanged styles from your previous code]
  // paste your styles object here (already working)
};

// ✅ Inject Global CSS
const globalStyles = `
  input:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
  }
  button:hover {
    border-color: #667eea !important;
    background: #f8f9ff !important;
  }
  .dividerText::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e1e5e9;
    z-index: 0;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

export default LoginSignupPage;
