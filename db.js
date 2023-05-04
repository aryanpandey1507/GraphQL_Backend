const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.DATABASE_URL);
//     console.log(`Mongo connected at ${conn.connection.host}`.cyan.underline.bold);
    console.log("DB connected")
};

module.exports = connectDB;
