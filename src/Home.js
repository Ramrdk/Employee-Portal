// Home.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar component


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const res = await axios.get('https://6223a3133af069a0f9a70bdc.mockapi.io/users');
    setUsers(res.data);
  }

  const deleteUser = async (index) => {
    await axios.delete('https://6223a3133af069a0f9a70bdc.mockapi.io/users/' + index);
    loadUsers();
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      
      <div className="container py-4">
        <table className="table border shadow">
          <thead className="table-primary">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <NavLink
                    id="Action"
                    className="btn btn-primary"
                    exact
                    to={`/user/${user.id}`}
                  >
                    View
                  </NavLink>
                  <NavLink
                    id="Action"
                    className="btn btn-outline-primary"
                    exact
                    to={`/edituser/${user.id}`  }
                  >
                    Edit
                  </NavLink>
                  <button
                    id="Action"
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}