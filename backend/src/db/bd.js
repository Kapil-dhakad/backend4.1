const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> [
        console.log("connecte to DB")
    ]).catch((err)=> {
        console.log(err);
        
    })
}

module.exports = connectDB