import './App.css'
import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useState } from 'react'
import axios from 'axios'

function API() {

const responseGoogle = response => {
    console.log(response)
    const {code} = response
    //code from Google token

    axios
        .post('http://www.localhost:3000/apiRoutes', {code})
        .then(response => {
            console.log(response.data)
    })
    .catch(err => console.log(err))
}

//const responseError 

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(summary, description, location, startDateTime, endDateTime)
    axios.post('apiRoutes/createEvent', {
        summary,
        description,
        startDateTime,
        endDateTime
    })
    .then(response => {
        console.log(response.data)
    })
    .catch(err => console.log(err))
}

const[summary, setSummary] = useState('')
const[description, setDestription] = useState('')
//const[location, setLocation] = useState('')
const[startDateTime, setStartDateTime] = useState('')
const[endDateTime, setEndStartDateTime] = useState('')  
//use form hooks here?


  return (
      <div>

        <div className='wwApp'>
        <h1>Google Cal API</h1>
        </div>

        <div>
            <GoogleLogin clientId='15518858462-1ftie3oh1cch121j8dgk44a8dm65r1o3.apps.googleusercontent.com'
            buttonText='Sign In + Authorize Google Calendar'
            onSuccess={responseGoogle}
            onFailure={responseError}
            scope='openId email https:www.googleapis.com/auth/calendar'></GoogleLogin>
        </div>
        <div>
            <form onSubmit={handleSubmit} >
                <label>Summary</label> 
                <br />
                <input type='text' id='summary'
                value={summary}
                onChange={e => setSummary(e.target.value)} />
                <br />

                <label>Description</label> 
                <br />
                <input type='text' id='summary'
                value={description}
                onChange={e => setSummary(e.target.value)} />
                <br />

                <label>Start Date:Time</label> 
                <br />
                <input type='datetime-local' id='summary'
                value={startDateTime}
                onChange={e => setStartDateTime(e.target.value)} />
                <br />

                <label>End Date:Time</label> 
                <br />
                <input type='datetime-local' id='summary'
                value={endDateTime}
                onChange={e => setEndStartDateTime(e.target.value)} />
                <br />
                <button type='submit'> Create Event </button>
            </form>
        </div>
      </div>
      )
}

export default API