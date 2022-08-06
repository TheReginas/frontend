import React, { useState} from 'react'
import axios from 'axios'



const LogAdd = ({addLog, logs}) => {
   //setLog, setDelete
    

    const logFormData = {
        task: '',
        workNotes: '',
        teamMember: '',
    }


    const [formData, setFormData] = useState(logFormData)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:6001/logs', formData )
        .then(res =>  {
            console.log(res.data)
            setFormData(logFormData)
            addLog(res.data)
            console.log(res)
        })
        
    }


    
    
    

  return (

     <>
      
      <form onSubmit={handleSubmit}>
    <div>Add Task</div>

    <label htmlFor='name'>Task </label>
    <input id='task' name='task' type='text'  onChange={handleChange}  />
    <label htmlFor='name'>Work Notes </label>
    <input id='workNotes' name='description' type='text'  onChange={handleChange} />
    <label htmlFor='name'>Team Member</label>
    <input id='teamMember' name='member' type='text'  onChange={handleChange}/>
    <input type='submit' value='Add' />
    </form>

<div>

<h1>Task Log</h1>


<div className="table">
      <table>
        <tbody>

      <tr>
          <th>Task</th>
          <th>Work Notes</th>
          <th>Team Member</th>
          <th>Operation</th>
        </tr>
        {logs?.map((formData, key) => {
            return (
                <tr key={key}>
            <td>{formData.task}</td>
            <td>{formData.workNotes}</td>
            <td>{formData.teamMember}</td>
            
            <td> < input type='submit' value='Edit Log' />
            &nbsp;
            <button> Delete</button></td>
            </tr>
            //<button onClick={ setDelete}> Delete</button>
          )
        })}

        </tbody>
      </table>

{/* <LogEdit setLog= {setLog} setDelete={setDelete}/> */}

</div>
</div>

</> 

  )
}

export default LogAdd;