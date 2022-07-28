import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import Modal from 'react-modal'
import userService from '../../utils/userService'

class Login extends Component {

    state={
        email: '',
        pw:''
    }
    handleChange = (e) => {
    
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleSubmit = async (e) => {
       
        e.preventDefault();
      try {

        await userService.login(this.state);
        this.props.handleLogin()
        this.props.history.push('/')
      } catch (err) {
       
        //Modal goes here
    }
}

render() {
    return (
    <>

    <h1>Welcome to Work Well</h1>
    <h2>Productivly Teaming</h2>



        <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" type='submit'>Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
</>
    
    );
  }
}



export default Login