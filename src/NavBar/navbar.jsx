import React, { useState } from 'react'
import Button from '../pages/Authentication/Student/components/Button'

export const Navbar = () => {
  let Links =[
    {name:"HOME",link:'/'},
    {name:"SERVICE",link:'/'},
    {name:"ABOUT",link:'/'},
    {name:"BLOG'S",link:'/'},
    {name:"CONTACT",link:'/'},
  ];
  let [open,setOpen]=useState(false);

  return (
  <div className='shadow-md w-full fixed top-0 left-0 sticky top-0 z-50'>
  <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2x1 cursor-pointer flex items-center'> 
        <span>
        <img src=".\assets\logo.png" className='max-w-full h-auto' width={180} alt="Teacho" />
        </span>
        <div onClick={()=> setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open?'close':'menu'}></ion-icon>
        </div>
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open?'top20':'top-[-490px]'} `}>
      {
        Links.map((link)=>(
          <li  key={link.name} className='md:ml-8 text-l md:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-gray duration-500'>{link.name}</a>
          </li>
        ))
      }
      <li className='md:ml-8 md:my-0 my-5'><Button text='Login/SignUp' link='auth'/></li>
      <li className='md:ml-2 md:my-0 my-7'><Button text='Join as Teacher' link='teacherauth'/></li>
    </ul>
  </div>
  </div>
  )
}
