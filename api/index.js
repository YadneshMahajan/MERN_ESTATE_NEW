import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
dotenv.config();
const app=express();
app.use(express.json());
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
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message= err.message || 'Internal Sever Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})