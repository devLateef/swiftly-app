const mongoose = require("mongoose");
const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        if(mongoose.connection.readyState === 1){
            console.log("Database Connected Successfully");
        }else{
            console.log("Unable to establish connection to the database");
        }
    } catch (error) {
        console.log("Error connecting to the database: ", error.message);
    };
};

module.exports = dbConnect;