import React,{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faQuestion,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import Button from '../../Authentication/Student/components/Button'
import Avatar from "../components/Avatar"

function NavSearchMenu(props) {
  let [open,setOpen]=useState(false);
  return (
    <div className="flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50">
      <div className="h-20 w-full flex items-center justify-between sm:h-auto">
        <a className="no-underline block h-8" href="/">
        <img src=".\assets\logo.png" className='max-w-full h-auto' width={130} alt="Teacho" />
        </a>
        <div>
        <div onClick={()=> setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open?'close':'menu'}></ion-icon>
        </div>
          {props.user?<Avatar
            image={props.details.profilePhoto}
            className="cursor-pointer my-2 ml-6"
            status="online"
            statusBottom
          />:<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open?'top20':'top-[-590px]'} `}>
          <li className='md:ml-8 md:my-0 my-5 pt-4 pr-12'><Button text='Login/SignUp' link='auth'/></li>
          <li className='md:ml-2 md:my-0 my-7 pt-4 pr-12'><Button text='Join as Teacher' link='teacherauth'/></li>
        </ul>}
        </div>
        
      </div>
      
    </div>
  )
}

export default NavSearchMenu