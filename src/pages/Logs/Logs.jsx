import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar';



const Logs = () => {
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
      setInterval(() => setCompleted(Math.floor(Math.random()* 100) +1 ), 2000)

    }, []);

  return (
    <>
   
    <ProgressBar completed={completed}/>
    <h1>Team Logs</h1>
    
 
     
    <form>
        <label>Title</label>
        <input type='text' name='title' placeholder='title'/>
        <label>Work Notes</label>
        <input type='text' name='description' placeholder='Work Notes'/>
        <label>Team Member</label>
        <input type='text' name='name' placeholder='team member'/>
        <button>Save</button>
    </form>
    
    
    </>
    
  )
}

export default Logs