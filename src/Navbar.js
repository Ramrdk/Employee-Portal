// Navbar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './App.css';


export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('Logout successful!');
    navigate('/'); // Redirect to the Logout component
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <img
            className="company-logo"
            src="https://insights.staffbase.com/hs-fs/hubfs/Logo_Staffbase_4096-1.png?t=1496831524512&width=4096&name=Logo_Staffbase_4096-1.png"
            alt="company logo"
          />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-outline-light" exact to="/adduser">
          Add User
        </NavLink>
        <button className="btn btn-danger" onClick={handleLogout}  >
          Logout
        </button>
      </div>
    </nav>
  );
}