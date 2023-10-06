const mongoose = require("mongoose")

const connectDatabase =async  () => {

    await mongoose.connect("mongodb://localhost:27017/mydb" ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
