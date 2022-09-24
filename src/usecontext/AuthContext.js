import React from 'react';

const AuthContext  = React.createContext({
  authenticated: false,
  login: () => {},
  name : "shahnawaz"
});

export default AuthContext;