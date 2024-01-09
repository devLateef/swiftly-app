const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const userRoutes = require('./routes/userroutes');
const db = require('./config/db');

const port = process.env.PORT || 8001;
db();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', userRoutes);

// app.get('/', (req, res)=>{
//     res.json('Welcome to my application');
// });


app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});