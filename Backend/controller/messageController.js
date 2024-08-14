import Conversation from "../models/ConversationModel.js"
import Message from "../models/MessageModel.js"
import {getReceiverSocketId, io} from "../socket/socket.js"
export  const sendMessage= async(req, res ,next)=>
{
   try{
    const {messages}=req.body
    const{id:receiverId}=req.params
    const senderId=req.user.id
    let conversation= await Conversation.findOne({
     participants:{$all:[senderId,receiverId]},
    })
    if(!conversation)
    {
        conversation=await Conversation.create({
            participants:[senderId,receiverId],
        })
    }
const newMessage= new Message({
    senderId,
    receiverId,
    messages

})
if(newMessage)
{
    conversation.messages.push(newMessage._id)
}
await Promise.all([conversation.save(),newMessage.save()])
// socket.io functionality
const receiverSocketId = getReceiverSocketId(receiverId)

if (receiverSocketId) {
  io.to(receiverSocketId).emit("newMessage", newMessage)
}
res.status(201).json(newMessage)
   }catch(error)
   {
    next(error)
   }
}
export const getMessage=async(req , res, next)=>
{
 try{
  const {id:userToMsg}=req.params
  const senderId=req.user.id
  const conversation = await Conversation.findOne({
    participants:{$all:[senderId,userToMsg]},
  }).populate("messages")
  if(!conversation)
  {
    return res.status(200).json([])
  }
 const messages=conversation.messages
 res.status(200).json(messages)
 }
 catch(error)
 {
    next(error)
 }
}