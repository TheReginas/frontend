import React, { useEffect, useState } from 'react'
import ProgressBar2 from '../../components/ProgressBar/ProgressBar2';



const Logs = () => {
    const [value, updateValue] = useState(0);

   useEffect(()=>{
        const interval = setInterval(()=>{
            updateValue(oldValue=>{
                const newValue = oldValue +10;
                if (newValue === 100){
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 1000);
    }, []
);
   
  return (
    <>
   
    <ProgressBar2 value={value}/>
    <h1>Team Logs</h1>
    
    <LogAdd addLog= {addLog}  logs={logs} setLog= {setLog} setDelete={setDelete}  />

    <div>
      
    </div>
   

    </>
    
  )
  }


export default Logs