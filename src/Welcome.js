import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Welcome.css'; // Link to the custom CSS file
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-container"> {/* Apply the container class */}
      <h2 className="welcome-title">Welcome to Employee Portal ! Choose an option:</h2> {/* Apply the title class */}
      <div className="welcome-buttons"> {/* Apply the buttons class */}
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;