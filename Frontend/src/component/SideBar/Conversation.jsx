import React from 'react'

const Conversation = () => {
  return (
    <>   
    <div className='flex gap-2 items-center
    hover:bg-blue-500 rounded p-2 py-1 cursor-pointer'>
    <div className='avatar online'>
        <div className='w-12 rounded-full'>
        <img src="https://www.w3schools.com/w3images/avatar1.png" alt="DP Icon"/>
        </div>
    </div>

<div className='flex flex-col flex-1'>
    <div className='flex gap-3 justify-between'>
        <p className='font-bold text-slate-700'>User</p>
    </div>
</div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation