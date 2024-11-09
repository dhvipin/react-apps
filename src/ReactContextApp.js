
import React, { createContext, useContext, useState } from 'react';
import './App.css'

// Create a context with a default value (initially, user is not authenticated)
const AuthContext = createContext({ isAuthenticated: false, login: () => {} });

// A component that will provide the context value
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Simulate a login process, for simplicity just toggle the authentication state
    setAuthenticated(true);
  };

  const logout = () => {
    // Simulate a logout process
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// A component that uses the context to display content based on authentication state
const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div className='App'>
      <h2 className='App-header'>Home</h2>
      {auth.isAuthenticated ? (
        <p>Welcome! You are authenticated.</p>
      ) : (
        <p>Please log in to access this content.</p>
      )}
      <button onClick={auth.login}>Log In</button>
      {auth.isAuthenticated && <button onClick={auth.logout}>Log Out</button>}
    </div>
  );
};

// A component that uses the context to display a user profile if authenticated
const UserProfile = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>User Profile</h2>
      {auth.isAuthenticated ? (
        <p>This is your user profile page.</p>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

// App component that wraps the components with the AuthProvider
const ReactContextApp = () => {
  return (
    <AuthProvider>
    <Home />
    <UserProfile />
  </AuthProvider>
  )
}

export default ReactContextApp