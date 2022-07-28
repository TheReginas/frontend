import React from 'react';
import { Link, useNavigate} from 'react-router-dom';


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

export default NavBar;