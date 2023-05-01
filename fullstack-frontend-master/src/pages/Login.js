import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import './pages/app.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

//   if (loggedIn) {
//     return <Redirect to="/" />;
//   }

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="card shadow-lg" style={{ width: "400px" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
