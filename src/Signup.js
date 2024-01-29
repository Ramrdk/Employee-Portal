import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = ({ setUsersData }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    // Simulate signup logic
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match. Please re-enter.");
      return;
    }

    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    setUsersData((prevUsers) => [...prevUsers, newUser]);
    alert('Signup successful!');
    navigate('/login'); // Navigate to the login page after successful signup
  };

  return (
    <div className="signup-container"> {/* Apply the container class */}
      <h2 className="signup-title">Signup</h2> {/* Apply the title class */}
      <form className="signup-form"> {/* Apply the form class */}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="signup-input" 
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="signup-input" 
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="signup-input" 
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password       "
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="signup-input" 
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup} className="signup-button"> {/* Apply the button class */}
          Signup
        </button>
      </form>
      <p className="signup-link"> {/* Apply the link class */}
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;