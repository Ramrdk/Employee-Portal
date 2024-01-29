import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import AddUser from './AddUser';
import EditUser from './EditUser';
import User from './User';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import Logout from './Logout';

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Load user data from local storage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsersData(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    // Save user data to local storage whenever it changes
    localStorage.setItem('users', JSON.stringify(usersData));
  }, [usersData]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/edituser/:index" element={<EditUser />} />
          <Route path="/user/:id" element={<User />} />
          <Route
            path="/login"
            element={<Login usersData={usersData} />}
          />
          <Route
            path="/signup"
            element={<Signup setUsersData={setUsersData} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;