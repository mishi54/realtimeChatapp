import React from 'react'
import { useState } from 'react';
import GenderCheckbox from '../component/GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignUp from '../hooks/useSignup';

const SignUp=()=> {
  const [formData, setFormData]= useState(
    {
      username:"",
      email:"",
      password:"",
      confirmPassword:"",
      gender:"",

    }
  )
  const {loading, signup} = useSignUp()
  const handleCheckboxChange=(gender)=>{
    setFormData({...formData, gender})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData)
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96
    mx-auto">
      <div className='w-full p-6 rounded-xl shadow-md
      bg-gray-200'>
        <h1 className='text-3xl font-semibold text-center text-slate-700 '>SignUp to

        <span className='text-blue-700'> Chat Application</span>
        </h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input
          type='text'
          placeholder='Enter Name'
          className='w-full input input-bordered h-10'
          value={formData.username}
          onChange={(e)=>
            setFormData({
              ...formData,username:e.target.value
            })
          }/>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Email</span>
          </label>
          <input
          type='email'
          placeholder='e.g:mishi121006@gmail.com'
          className='w-full input input-bordered h-10'
          value={formData.email}
          onChange={(e)=>
            setFormData({
              ...formData,email:e.target.value
            })
          }/>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input
          type='password'
          placeholder='Enter your Password'
          className='w-full input input-bordered h-10'
          value={formData.password}
          onChange={(e)=>
            setFormData({
              ...formData,password:e.target.value
            })
          }/>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input
          type='password'
          placeholder='Enter your Confirm Password'
          className='w-full input input-bordered h-10'
          value={formData.confirmPassword}
          onChange={(e)=>
            setFormData({
              ...formData,confirmPassword:e.target.value
            })
          }/>
        </div>
        <GenderCheckbox
        onCheckboxChange={handleCheckboxChange}
        selectedGender={formData.gender}/>
        <Link to={"/login"}
        className="text-sm text-blue-600 hover:underline hover:text-green-600
        mt-2 inline-block"
        >{"Already"} have an account ? login now</Link>
        <div>
          <button className='btn btn-block btn-sm mt-2 bg-blue-700
          font-bold text-white' disabled={loading}>
            {loading ? (
          <span className='loading loading-spinner'></span>  
          ):(
              "Sign Up"
            )}
            </button>
        </div>
      </form>
      
      
      
      
      </div>
    </div>
  )
}

export default SignUp