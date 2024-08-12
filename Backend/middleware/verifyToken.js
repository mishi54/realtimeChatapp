import { errorHandler } from "../utils/errorHandler.js"
import jwt from "jsonwebtoken"
export const isAuthenticate= async(req,res,next)=>
{
    try{

        const token=req.cookies.accesstoken
        if(!token)
        {
            return next(errorHandler(401,"Unauthorized"))
        }
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>
        {
            if(err)
            {
                return next(errorHandler(403,"Forbidden"))
            }
            req.user=user
            next()
        })
    }catch(error)
    {
        next(error)
    }

}