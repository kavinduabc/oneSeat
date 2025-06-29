
import React from 'react'
import Logo from '../SubComponents/Logo'
import { FaCartPlus, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between items-center  px-5 py-4.5 font-serif'>
    <div className=''>
        <Logo />
    </div>

    <div className='flex flex-col items-center'>
      <div className='flex gap-4 text-[20px]'>
        <h3>Home</h3>
        <h3>Categories</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>

    <div className='flex gap-4 text-[20px]'>
      <div>
        <FaUser />
      </div>
      <div>
        <FaCartPlus/>
      </div>
    </div>
    </div>
  )
}

export default Header