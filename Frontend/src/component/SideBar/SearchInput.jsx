import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    const conversation = conversations.find((conversation) =>
      conversation?.username?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('No user found with this username');
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input
        type='text'
        value={search}
        onChange={handleChange}
        placeholder='Search'
        className='input input-bordered rounded-full'
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;
