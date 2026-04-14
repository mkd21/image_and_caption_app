
// data base connection logics goes here 


const mongoose = require("mongoose");


async function connectDB()
{
    try
    {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected successfully");
    }
    catch(err)
    {
        console.log("some error occured",err.message);
    }
}

module.exports = connectDB;

