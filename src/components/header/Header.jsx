import React from 'react'
import Logo from '../../assets/Logo.png';
import { MdSearch } from "react-icons/md";
import { Link,NavLink } from 'react-router-dom';
import Courses from '../course_details/Courses'
import Tutions from '../tutions/Tutions'
import Home from '../home/Home'
import './Header.css'

const Header = () => {
  return (
    <header className='sticky z-10 shadow-md h-[75px]'>
        <nav className='flex justify-between items-center mx-auto max-w-screen-xl pt-1'>
            <img className='h-16' src={Logo} alt='Sunshine Tutors Logo' title='Sunshine Tutors' />
            <div className='flex items-center justify-start'>
                <input style={{border:'1px solid #d2d2d2'}} className='outline-none rounded-l-full py-1 px-4 h-10 w-52 ml-2 ' type='text' placeholder='Search for a course'  />
                <button  style={{border:'1px solid #d2d2d2'}} className='cursor-pointer rounded-r-full h-10 w-14 p-1 bg-slate-200'><MdSearch className='ml-2' size={24}/></button>
            </div>
            <div className='flex justify-around items-center'>
                <NavLink className={({isActive}) => `nav-links ${isActive ? "text-[#4373e3]" : "text-[#e88a10]"}` } to='/'>Home</NavLink>
                <NavLink className={({isActive}) => `nav-links ml-4 ${isActive ? "text-[#4373e3]" : "text-[#e88a10]" }` } to='/courses'>Courses</NavLink>
                <NavLink className={({isActive}) => `nav-links ml-4 ${isActive ? "text-[#4373e3]" : "text-[#e88a10]" }` } to='/tutions'>Tutions</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header