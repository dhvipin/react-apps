import React from 'react'
import './LoginApp.css'
import { useState } from 'react';
const LoginPage=()=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
   
    // For simplicity, we'll just check if both fields are non-empty
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}
const LoginApp = () => {
  return (
    
       <div className="LApp">
      <header className="LApp-header">
        <LoginPage />
      </header>
    </div>
    
  )
}

export default LoginApp
