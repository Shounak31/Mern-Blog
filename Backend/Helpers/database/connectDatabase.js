require('dotenv').config();
const mongoose = require("mongoose")

const connectDatabase =async  () => {

   // await mongoose.connect('mongodb+srv://deshmukhshounak07:nCYIaEjUpFiOYbjd@cluster0.wkgkwt2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ,{useNewUrlParser : true})

   await mongoose.connect('mongodb://localhost:27017/mern-blog' ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
