import React from 'react'
import {Link} from 'react-router-dom'

const LogPage = () => {
  return (
    <div>
      <h1>LogPage</h1>
     <Link to='Sign up'>Signup</Link>
     <Link to='Login'>Login</Link>
     <Link to='Progress'>Progress</Link>
    </div>
  )
}

export default LogPage