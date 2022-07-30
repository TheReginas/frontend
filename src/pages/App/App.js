import './App.css';
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login';
import Logs from '../Logs/Logs';
import SignUp from '../SignUp/SignUp.jsx';
import Progress from '../Progress/Progress';
import NavBar from '../../components/Navbar';

class App extends Component {

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin =()=>{
    this.setState({user: userService.getUser()});
  }



  render () {
  return (  
    <>
    <header>
     <NavBar/>
      <h1>Work Well</h1>
    </header>

    <main>
    <Routes>
      <Route path= '/login' element= { <Login handleSignup={this.handleLogin}/> } />
      <Route path= '/logs' element={ <Logs /> } />
      <Route path='/signup' element={ <SignUp handleLogin={this.handleSignup}/>}/>
      <Route path='/progress' element={ <Progress />}/>
    </Routes>
 
    </main>


   

    </>
  );
  }
}

export default App;
