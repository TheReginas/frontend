import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({setUser}) => {
  const navigate= useNavigate()
  const [formData, setFormData] = useState()
  const handleChange = (e)=> {
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = (e) => {
    axios.post('http://localhost:3000/login', formData)
    .then(res => {
      if (res.status === 200){
        setUser(res.data)
        navigate('/')
      }
    })
  }

  return (
    <div>
      
      
        <form onSubmit= {handleSubmit}> 

            <label htmlFor='name'>Username</label>
            <input type='text' name='name' id='name' onChange={handleChange}></input>
            <label htmlFor='name'>Password</label>
            <input type='password' name='password' id='password' onChange={handleChange}></input>
            <input type='submit' value='Login'></input>
         

          </form>
    </div>
   
    
  )
}


export default Login