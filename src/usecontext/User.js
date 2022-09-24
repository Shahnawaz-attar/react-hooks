import React, { useContext } from 'react'
import AuthContext from "./AuthContext";

const User = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
      <h1>
        Are you logged in {auth.status ? "Yes" : "No"}
        <button onClick={auth.login}>Login</button>
      </h1>
    </div>
  )
}

export default User