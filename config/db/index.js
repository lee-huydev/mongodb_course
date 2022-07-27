require('dotenv').config()
const mongoose = require('mongoose')
// DB_MONGODB_URL = mongodb+srv://lee-huydev:AlSlcfgctRrn3YwG@cluster0.hjwro.mongodb.net/mongodb_course_dev?retryWrites=true&w=majority
const connect = async () => {
    try {
       await mongoose.connect(process.env.DB_MONGODB_URL);
       console.log('Connect successfully')
    } catch (error) {
         console.log('Connect failure!' + error)
    }
 };

 module.exports = { connect }