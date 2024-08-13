import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src="https://www.w3schools.com/w3images/avatar1.png" alt="DP Icon"/>
            </div>
        </div>
   
    <div className='chat-bubble text-white bg-blue-500'>
        Hy
    </div>
    <div className='chat-footer opacity-50 text-xs flex gap-1
    items-center text-slate-950'>
    10:41
    </div>
    </div>
  )
}

export default Message

