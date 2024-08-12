 import User from "../models/UserModel.js"
 import bycrypt from "bcrypt"
 import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/errorHandler.js"
 export const signup= async(req,res,next)=>
 {
   const {
    username,
    email,
    password,
    confirmPassword,
    gender
   }=req.body
let validUser
validUser=await User.findOne({email})

if(validUser)
{
    // return res.status(400).json(
    //     {
    //         status:false,
    //         message:"User already exist duplicate email found"
    //     }
    //)
    return next(errorHandler(400,"User already exist duplicate email found"))
}
if(password!==confirmPassword)
{
    // return res.status(400).json(
    //     {
    //         error:"Password doesnot matched"
    //     }
    // )
    return next(errorHandler(400,"Password doesnot matched"))

}
const hashedPassword=bycrypt.hashSync(password,10)
const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}` 
const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

const newUser= new User({
    username,
    email,
    password:hashedPassword,
    gender,
    profilePic:gender==="male" ? boyProfilePic : girlProfilePic,    

})
try{
const token=jwt.sign(
    {id: newUser._id},
process.env.JWT_SECRET)
await newUser.save()
res.cookie("accesstoken",token,{httpOnly:true}).status(201).json({
    _id:newUser._id,
    username:newUser.username,
    email:newUser.email,
    profilePic:newUser.profilePic,
})

} catch(error){
   next(error)
}

}
 export const login= async (req,res,next)=>
    {
        try{
        const {email,password} = req.body
const validUser=await User.findOne({email})
if(!validUser)
{
    return next(errorHandler(404,"User not Found"))
}
const validPassword=bycrypt.compareSync(password,validUser.password)
if(!validPassword)
{
    return next(errorHandler(401,"Wrong credentials"))
}
const token=jwt.sign(
    {id: validUser._id},
process.env.JWT_SECRET)
res.cookie("accesstoken",token,{httpOnly:true}).status(201).json({
    _id:validUser._id,
    username:validUser.username,
    email:validUser.email,
    profilePic:validUser.profilePic,
})
        }catch(error)
        {
            next(error)

        }
       
    }
export const logout=(req,res,next)=>
        {
            try{
                res.clearCookie("accesstoken")
                res.status(200).json(
                    {
                        message:"User has been logout successfully!",
                    }
                )

            }catch(error){
              next(error)
            }
           
        }