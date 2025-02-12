const mongoose = require('mongoose');

exports.dbConnect =()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("DataBase Connected Successfully")})
    .catch((err)=>{
        console.log("Error while connecting database",err);
        process.exit(1);
    })

}