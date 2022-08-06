import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login';
import Logs from '../Logs/Logs';
import SignUp from '../SignUp/SignUp.jsx';
import LogAdd from '../Logs/LogAdd';
import Main from '../MainView/Main';




function App () {
 const [logs, setLogs]= useState ([])

  useEffect(()=>{
    fetch('http://localhost:6001/logs')
    .then((res)=> res.json())
    .then(log => setLogs(log))
   
  }, []);
  
  
const addToLog = (log)=> {
  setLogs([...logs, log])
}


  
  


  
  return (  
    <>
    
    <main>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path= '/login' element= { <Login /> } />
      <Route path= '/logs' element={ <Logs addLog={addToLog} logs={logs}/> } />
      <Route path='/logs/:id' element={<Logs  setLogs={setLogs}/>}/>
      <Route path='/signup' element={ <SignUp />}/>
      <Route path='/newlog' element={<LogAdd  />} />
    </Routes>
 
    </main>


   

    </>
  );
  }


export default App;
