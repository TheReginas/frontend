import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  let nav = props.user ?
  <div>
    <Link to='/progress' className='NavBar-link'>Progress</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
  </div>
  :
  <div>
    <Link to='/login' className='NavBar-link'>LOG IN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </div>;


const NavBar = ({user, setUser}) => {
  const navigate = useNavigate();
  
  return (
    <div className='NavBar'>
      <ul>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/logs'> Logs </Link></li>
            <li> <Link to='/progress'> Progress </Link></li>
            <li> <Link to='/signup'> SignUp </Link></li>
           { user ? <li>Welcome {user.name}</li> : <li> <Link to='/login'> Login </Link></li>}
           { user ? <button onClick={()=>  { 
                setUser(null)
                navigate('/login')
            }}>Log Out</button> : null}
        </ul>
      
    </div>
  );
};
}
export default Navbar;