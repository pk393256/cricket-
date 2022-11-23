const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const DB_URI = process.env.DB_URI
async function connectDatabase(DB_URI){
    try {
        await mongoose.connect(DB_URI);
        console.log('database connected')
    } catch (error) {
        console.log('error while connecting database')
    }
}
