const mongoose = require("mongoose")

exports.connectDatabase = ()=>{
    mongoose
        .connect(process.env.MONGO_URI)
        .then((con)=>console.log(`DataBase Connected ${con.Connection.name}`))
        .then((err)=> console.log(err));
};