//import express from 'express';
const express = require('express');
const app = express();
const PORT = 3001;
const morgan = require('morgan');


app.get('/', function(req, res) {
    res.send("Connected to Express")
    console.log("Connected to Express")
})

const cors = require('cors')
//require('dotenv').config();
require('./db/connection')

//middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express)
//import express, { json, urlencoded } from ‘express’;

//Google Calendar
app.use('/API', require('./routes/apiRoutes'))

// SS-branch
app.use("/users/", require("./routes/userRoutes"))
app.use("/progress/", require("./routes/progressRoutes"))


//app.use('/user', userRoutes)


app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})