import React from 'react';
import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input 
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          placeholder="Enter your text..."
        />
        <button 
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
        >
          <BsSend size={20}/>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
