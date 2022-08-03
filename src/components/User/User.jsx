import React, { useState } from 'react'
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/SignUp/SignUp'


function User() {
 
    const [SignUp,setSignUp] = useState ('');
    const [Login, setLogin] = useState ('');

  
    return (
    <div>
    <h1>SignUp</h1>
    <label>Username</label>
    <input type='text' />
    <label>Password</label>
    <input type='text' />
    <label>Confirm Password</label>
    <input type='text' />
    <label>Email Address</label>
    <input type='text' />
    <button>SignUp</button>
    
    <h1>Login</h1>
    <label>Email</label>
    <input type='text' />
    <label>Password</label>
    <input type='text' />
    <button>Login</button>
    </div>
  ); 
}

export default User