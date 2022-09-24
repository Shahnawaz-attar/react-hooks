import React from 'react'
import { useContext } from 'react'
import AuthContext from "./AuthContext";

const Admin = (data) => {
    const auth = useContext(AuthContext)
    console.log(auth)
  return (
    <div>
      <h1>Are you admin {auth.status ? "Yes" : "No"}</h1>
        <button onClick={auth.login}>Login</button>
      
    </div>
  
  )
}

export default Admin