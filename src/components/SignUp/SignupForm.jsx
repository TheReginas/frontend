import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SignupForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  

  
  const handleUsername = (e) => {
    setUsername(e.target.value)
    setSubmitted(false)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false)
  }
  
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
    setSubmitted(false)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false)
  }

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://localhost:6001/login')
      if(username === '' || email === '' || password === ''){
        setError(true);
        
      }else{
        setSubmitted(true);
        setError(false);
        navigate('/logs')
      }
    }
  

// success message
const successMessage = () => {
  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  }}>
  <h1> {username} successfully registered!!</h1>
  </div>
  );
  };
  
  // error message if error is true
  const errorMessage = () => {
  return (
  <div
  className="error"
  style={{
  display: error ? '' : 'none',
  }}>
  <h1>Please enter all the fields</h1>
  </div>
  );
  };
  

  return (
    <>
    <div className="errorHandles">
      {successMessage()}
      {errorMessage()}
    </div>


    <div>
        <header className="header-footer">Plesse Sign Up To Work Well</header>
          <form>
          <label className="label">Username</label>
            <input onChange={handleUsername} className="input"
            value={username} type="text" />

          <label className="label">Email</label>
            <input onChange={handleEmail} className="input"
            value={email} type="email" />

            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
            value={password} type="password" />

          <label className="label">Confirm Password</label>
            <input onChange={handlePasswordConfirm} className="input"
            value={passwordConfirm} type="password" />

            <button onClick={handleSubmit} className="btn" type="submit">
            Submit
            </button>
          
              <Link to='/'>Cancel</Link>
           
         
        </form>
      </div>
    </>
  )
}

export default SignupForm;
