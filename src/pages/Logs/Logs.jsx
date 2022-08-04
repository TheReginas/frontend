import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import LogAdd from './LogAdd';



const Logs = ({addTask}) => {
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
      setInterval(() => setCompleted(Math.floor(Math.random()* 100) +1 ), 2000)

    }, []);

  return (
    <>
   
    <ProgressBar completed = {completed}/>
    <h1>Team Logs</h1>
    <LogAdd addTask= {addTask}/>
   
    
    </>
    
  )
}

export default Logs