import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null, 
  login: (data) => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);  // State for userId


  useEffect(() => {
    // Check the authentication status only on the client-side
    console.log("sss ",localStorage.getItem('userSignInData'));
    const userSignInData = JSON.parse(localStorage.getItem('userSignInData'));
    if (userSignInData) {
      setIsLoggedIn(true);
      setUserId(userSignInData._id);  // Set userId from stored data
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }
  }, []);

  const login = (userSignInData) => {
    localStorage.setItem('userSignInData', JSON.stringify(userSignInData)); // Save token to localStorage
    setIsLoggedIn(true); // Update the logged-in state
    setUserId(userSignInData._id);  // Update userId state

  };

  const logout = () => {
    localStorage.removeItem('userSignInData');
    setIsLoggedIn(false);
    setUserId(null);  // Clear userId on logout

  };
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
