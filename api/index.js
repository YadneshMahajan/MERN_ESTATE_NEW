import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'

dotenv.config();
const app=express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MONGO DB !!")
}).catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

// app.get('/',(req,res)=>{
//     res.send("hello World");
// })
app.use("/api/user",userRouter);