
import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import '../Logs/Logs.css';
import LogAdd from './LogAdd';



const Logs = ({addLog, logs, setLog, setDelete}) => {
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
      setInterval(() => setCompleted(Math.floor(Math.random()* 100) +1 ), 2000)
    
   
  return (
    <>
   
<ProgressBar completed={completed}/>
    <h1>Team Logs</h1>
    
    <LogAdd addLog= {addLog}  logs={logs} setLog= {setLog} setDelete={setDelete}  />

    <div>
      
    </div>
   

    </>
    
  )
  }


export default Logs