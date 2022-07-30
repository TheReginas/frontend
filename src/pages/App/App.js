import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login';
import Logs from '../Logs/Logs';
import SignUp from '../SignUp/SignUp.jsx';
import Navbar from '../../components/Navbar/Navbar'
import LogAdd from '../Logs/LogAdd';
import LogEdit from '../Logs/LogEdit';


function App () {
 const [logs, setLogs]= useState ([])

  useEffect(()=>{
    fetch('http://localhost:6001')
    .then((res)=> res.json())
    .then(logs => setLogs(logs))
   
  }, []);
  
const addToTask = (log)=> {
  setLogs([...logs, log])
}




  
  return (  
    <>
    <header>
     <NavBar/>
      <h1>Work Well</h1>
    </header>

    <main>
    <Routes>
      <Route path= '/login' element= { <Login /> } />
      <Route path= '/logs' element={ <Logs addTask={addToTask}/> } />
      <Route path='/signup' element={ <SignUp />}/>
      <Route path='/newlog' element={<LogAdd  />} />
      <Route path='/log/edit/:id/' element={<LogEdit/>}/>
    </Routes>
 
    </main>


   

    </>
  );
  }


export default App;
