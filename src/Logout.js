import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    // Perform any additional logout logic if needed

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setLoggedOut(true);

      // Redirect to the welcome or login page after a brief delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1000);
  };

  return (
    <div>
      {!loggedOut ? (
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div>
          <p>You have been logged out. Redirecting to the welcome page...</p>
          {/* Optionally provide a link to the welcome page */}
          {/* <Link to="/">Go to Welcome Page</Link> */}
        </div>
      )}
    </div>
  );
};

export default Logout;