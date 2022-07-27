import React from 'react'
import {Link} from 'react-router-dom'

const ProgressPage = () => {
  return (
    <div>
      <h1>ProgressPage</h1>
      <Link to='Sign up'>Signup</Link>
      <Link to='Log'>Log</Link>
      <Link to='Progress'>Progress</Link>

    </div>
  )
}

export default ProgressPage