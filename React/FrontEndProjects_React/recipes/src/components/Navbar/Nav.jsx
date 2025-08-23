import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import { MdFoodBank } from "react-icons/md";


const Nav = () => {
  return (
      <div className='flex justify-around align-center  m-5 '>
          <Link to='/'>
            <div className='flex rounded-sm bg-red-200 shadow-2xl hover:bg-pink-900 hover:text-white  p-1'>
            <MdFoodBank className='w-6 h-full mr-2' />
            <h1 className=' font-bold italic'>Aasif Bhai Recipes</h1>
            </div>
             </Link>
          <Input/>
          <div className='flex gap-4'>
          <button>Log in</button>
          <button>Sign up</button>
          </div>
        
        </div>
  )
}

export default Nav
