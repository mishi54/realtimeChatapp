import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app= express()
app.get('/',(req,res,next)=>
{
    res.send("hy")
})
const PORT=process.env.PORT
app.listen(PORT,()=>
{
    console.log("Server is listening your connection is now setup" + PORT)
})