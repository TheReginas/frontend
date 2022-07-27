import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <h1>SignupPage</h1>
      <Link to='Login'>Login</Link>
      <Link to='Log'>Log</Link>
      <Link to='Progress'>Progress</Link>
   </div>
  )
}

export default Signup 
