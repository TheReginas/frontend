import React, { useEffect, useState } from 'react'
import ProgressBar2 from '../../components/ProgressBar/ProgressBar2';



const Logs = () => {
    const [value, updateValue] = React.useState(0);

    React.useEffect(()=>{
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
    <div className='container'>
        <button className='btn'> Add New Entry</button>
    <div>
     
    <form>
        <label>Title</label>
        <input type='text' name='title' placeholder='title'/>
        <label>Work Notes</label>
        <input type='text' name='description' placeholder='Work Notes'/>
        <button>Save</button>
    </form>
    </div>
    </div>
    </>
    
  )
}

export default Logs