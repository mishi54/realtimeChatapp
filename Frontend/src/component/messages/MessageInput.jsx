import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input 
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
          disabled={loading}
        >
          {loading ? (
            <span className='loading loading-spinner'></span>  
          ) : (
            <BsSend size={20} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
