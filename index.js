const express = require('express');
const dotenv = require('dotenv').config();
const app = express()
const port = process.env.PORT || 8001;

app.get('/', (req, res)=>{
    res.json('Welcome to my application');
});


app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});