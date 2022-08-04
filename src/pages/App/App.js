import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login';
import Logs from '../Logs/Logs';
import SignUp from '../SignUp/SignUp';
import Progress from '../Progress/Progress';
import NavBar from '../../components/Navbar';


function App() {
  return (  
    <>
    <header>
     <NavBar/>
      <h1>Work Well</h1>
    </header>

    <main>
    <Routes>
      <Route path= '/login' element= { <Login /> } />
      <Route path= '/logs' element={ <Logs /> } />
      <Route path='/signup' element={ <SignUp/>}/>
      <Route path='/progress' element={ <Progress />}/>
    </Routes>
 
    </main>


   

    </>
  );
}

export default App;
