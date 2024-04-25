import mongoose from 'mongoose';

const db_link = process.env.MONGO_DB_URL;

mongoose.connect(db_link).then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log("Connectiong to database error: ", err)
})