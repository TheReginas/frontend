import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (

    <div>
        <h1>SignUpPage</h1>
        <form>
        <input type = "text"
        name ="signup" placeholder='username'></input>
        <input type = "text"
        name ="signup" placeholder='password'></input>

        <input type = "text"
        name ="signup" placeholder='confirm password'></input>

        <input type = "text"
        name ="login" placeholder='email address'></input>

        <button type='submit'>Sign Up</button>

        </form>
       
        <Link to='/login'>Login</Link>

    </div>
  )
}

export default SignUp