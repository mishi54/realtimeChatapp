import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authroutes.js"
import { errorHandler } from "./utils/errorHandler.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userroutes.js"
dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=>
{
     console.log("Mongo CONNECTED")
})
.catch((err)=>
{
    console.log(err)

})

const app= express()
app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res,next)=>
{
    res.send("hy")
})

//Authentication route defined
app.use("/api/auth/",authRoutes)
//Message route defined
app.use("/api/messages/",messageRoutes)
//User route Sidebar
app.use("/api/users/",userRoutes)
//Error Handler defined from utils folder
app.use((err,req,res,next)=>
{
 const statusCode=err.statusCode||500
 const message=err.message || "Internal Server Error"

 return res.status(statusCode).json({
   success:false,
   statusCode,
   message, 
 })

})











const PORT=process.env.PORT
app.listen(PORT,()=>
{
    console.log("Server is listening your connection is now setup" + PORT)
})