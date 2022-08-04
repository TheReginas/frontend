import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Logs from './Logs'

const LogAdd = ({addTask}) => {
    const navigate = useNavigate()

    const initialState = {
        task: '',
        workNotes: '',
        teamMember: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post(`http://localhost:6001/logs`, formData )
        .then(res =>  {

            setFormData(initialState)
            addTask(res.data)
            navigate('/logs', { replace: true }) 
            console.log(res)
        })

    }

  return (
<> 
    <div>Add Task</div>
 

    <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Task </label>
    <input id='task' name='task' type='text'  onChange={handleChange} />
    <label htmlFor='name'>Work Notes </label>
    <input id='workNotes' name='description' type='text'  onChange={handleChange} />
    <label htmlFor='name'>Team Member</label>
    <input id='teamMember' name='member' type='text'  onChange={handleChange}/>
    <input type='submit' value='Add' />
    
</form>
    <h2> Completed task</h2>
    
</>
  )
}

export default LogAdd