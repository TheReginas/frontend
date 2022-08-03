import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import userService from '../../utils/userService'

const SignupForm = (props) => {
  const [formData, setFormData] = useState({

    username:'',
    email:'',
    password:'',
    passwordConfirm:''

})

let  handleChange = (event) =>{
  props.updateMessage('');
  setFormData({[event.target.name]: event.target.value})
}

let handleSubmit = async (event) => {
  event.preventDefault();
  try{
    await userService.signup(formData)
    props.handleSignuporLogin();
    props.push('/logs')
  }catch (err){
    props.updateMesage(err.message)

  }

  let onSubmit = (event) => {
    event.preventDefault
  }
  

  return (
    <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" vaule={username} name="name" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email"  vale={email}name="email" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={password}name="password" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" vaule={passwordConfirm} name="passwordConf" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
  
  )
}
}
export default SignupForm;
