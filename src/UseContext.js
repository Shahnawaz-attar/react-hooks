import React, { createContext, useContext } from 'react'
import User from  './usecontext/User'
import Profile from  './usecontext/Profile'
import Admin from  './usecontext/Admin'
import AuthContext  from './usecontext/AuthContext';


const UseContext = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const contextData = useContext(AuthContext)

  const login = () => {
    setAuthenticated(true);
  };

  
    
  return (
    <div>
      <AuthContext.Provider value={{status: authenticated, login: login ,contextData}}>
        <User />
        <Profile />
        <Admin />
      </AuthContext.Provider>
    
    </div>
  )
  
  
}

export default UseContext