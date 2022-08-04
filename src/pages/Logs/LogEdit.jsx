import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LogEdit = ({ setTask }) => {
    let { id } = useParams()
    let navigate = useNavigate()
    
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
        axios.put(`http://localhost:6001/logs/${id}`, formData )
        .then(res =>  {

            setFormData(initialState)
            setTask(res.data)
            navigate('/', { replace: true })
        })

    }

    useEffect(()=> {
        axios.get(`http://localhost:6001/logs/${id}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

  return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Task </label>
            <input id='name' name='task' type='text' value={formData.taskName} onChange={handleChange} />
            <label htmlFor='name'>Work Notes </label>
            <input id='description' name='description' type='text' value={formData.workNotes} onChange={handleChange} />
            <label htmlFor='name'>Team Member</label>
            <input id='memeber' name='member' type='text' value={formData.teamMember} onChange={handleChange}/>
            <input type='submit' value='Edit Item' />
        </form>
  )
}
export default LogEdit