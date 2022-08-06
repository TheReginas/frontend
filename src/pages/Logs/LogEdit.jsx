import { Navigate, useParams } from "react-router-dom"
import React, {useState, useEffect}from 'react'
import axios from "axios"


const LogEdit = ({setLogs, setDelete, logs}) => {
   
    

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
    let { id } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:6001/logs/${id}`, formData )
        .then(res =>  {
            
            setFormData(logFormData)
            setLogs(res.data)
            Navigate('/logs',{replace:true})
            
        })
        
    }
    
            useEffect(()=>{
                axios.get(`http://localhost:6001/logs/${id}`)
                .then(res =>{
                    setFormData(res.data)
                    
                })
            }, [])
    
        const removeLog = ( logs ) => {
           
            axios.delete(`http://localhost:6001/logs/${id}`)
            .then(()=>{
                
                setDelete(logs.filter((item)=> id !== item.id))
            })
        }  

  return (

     <>
      
      <form onSubmit={handleSubmit}>
    <div>Add Task</div>

    <label htmlFor='name'>Task </label>
    <input id='task' name='task' type='text' value={formData?.task} onChange={handleChange}  />
    <label htmlFor='name'>Work Notes </label>
    <input id='workNotes' name='description' type='text' value={formData?.workNotes} onChange={handleChange} />
    <label htmlFor='name'>Team Member</label>
    <input id='teamMember' name='member' type='text' value={formData?.teamMember} onChange={handleChange}/>
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
            <button onClick={() => removeLog(id)}> Delete</button></td>
            </tr>
          )
        })}

        </tbody>
      </table>



</div>
</div>

</> 
  )
    }

export default LogEdit