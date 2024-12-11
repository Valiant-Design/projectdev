import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();


  return (
    <div className="flex items-center justify-center gap-60 p-10 bg-gray-100">
        <div className='md:mx-10'>
            <div className='flex flex-col text-center items-center sm:grid grid-cols-[1fr_1fr] gap-14 justify-between my-10 mt-10 text-sm'>
                {/* Left Section */}
                <div className=''>
                <img onClick={() => {scrollTo(0, 0); navigate('/')}} className='w-40 cursor-pointer' src={assets.logo} alt="Company Logo" />
                    
                </div>
                {/* cENTERSection */}
                <div className=''>
                <ul className='hidden md:flex items-start gap-10 pr-50 pl-60 font-medium'>
                <NavLink to='/'>
                    <li onClick={() => scrollTo(0, 0)} className='py-1 hover:text-[#17a2b8] transition'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-[#17a2b8] w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/allwork'>
                    <li onClick={() => scrollTo(0, 0)} className='py-1 hover:text-[#17a2b8] transition'>ALL WORK</li>
                    <hr className='border-none outline-none h-0.5 bg-[#17a2b8] w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/about'>
                    <li onClick={() => scrollTo(0, 0)} className='py-1 hover:text-[#17a2b8] transition'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-[#17a2b8] w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/contact'>
                    <li onClick={() => scrollTo(0, 0)} className='py-1 hover:text-[#17a2b8] transition'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-[#17a2b8] w-3/5 m-auto hidden'/>
                </NavLink> 
            </ul>
                </div>
            </div>
            {/* Bottom Section */}
            <div className=''>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 | ValiantDesign</p>
            </div>
        </div>
    </div>
  )
}

export default Footer