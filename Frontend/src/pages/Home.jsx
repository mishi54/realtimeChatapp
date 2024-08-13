import React from 'react'
import SideBar from '../component/SideBar/SideBar'
import MessageContainer from '../component/messages/MessageContainer'

const Home=()=> {
  return (
    <div className='flex sm:h-[450px] md:h-[550px]
    rounded-lg overflow-hidden bg-gray-200
    '>
    <SideBar/>
    <MessageContainer/>
    </div>
  )
}

export default Home