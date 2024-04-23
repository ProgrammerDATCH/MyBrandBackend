import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/mybrand").then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log("Connectiong to database error: ", err)
})