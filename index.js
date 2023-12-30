const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const userRoutes = require('./routes/userroutes');

const port = process.env.PORT || 8001;

app.use(userRoutes);

// app.get('/', (req, res)=>{
//     res.json('Welcome to my application');
// });


app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});