import React from 'react'
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
     <h1>LoginPage</h1>
     <Link to='Sign up'>Signup</Link>
     <Link to='Log'>Log</Link>
     <Link to='Progress'>Progress</Link>
     </div>
  )
}

export default LoginPage