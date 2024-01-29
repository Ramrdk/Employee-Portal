import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = ({ usersData }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Simulate login logic
    const user = usersData.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      alert('Login successful!');
      navigate('/Home'); // Navigate to the home page after successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container"> {/* Apply the container class */}
      <h2 className="login-title">Login</h2> {/* Apply the title class */}
      <form className="login-form"> {/* Apply the form class */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="login-input" 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="login-input" 
          />
        </div>
        <button type="button" onClick={handleLogin} className="login-button"> {/* Apply the button class */}
          Login
        </button>
      </form>
      <p className="login-link"> {/* Apply the link class */}
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;