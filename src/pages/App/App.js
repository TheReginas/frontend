import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login';
import Logs from '../Logs/Logs';
import SignUp from '../SignUp/SignUp.jsx';
import Navbar from '../../components/Navbar/Navbar'


function App () {
 const [logs, setLogs]= useState ([])

  useEffect(()=>{
    fetch('/api')
    .then((res)=> res.json())
    .then(logs => setLogs(logs))
   
  }, []);
  


  return (  
    <>
    <header>
     <Navbar/>
      <h1>Work Well</h1>
    </header>

    <main>
    <Routes>
      <Route path= '/login' element= { <Login /> } />
      <Route path= '/logs' element={ <Logs /> } />
      <Route path='/signup' element={ <SignUp />}/>
    </Routes>
 
    </main>


   

    </>
  );
  }


export default App;
