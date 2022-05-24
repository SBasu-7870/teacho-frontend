import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import NavSearchMenu from "./elements/NavSearchMenu"
import SideFilters from "./elements/SideFilters"
import Alert from "./components/Alert"
import SimpleCard from "./components/SimpleCard"
import jwt from "jwt-decode"
import Service from "../../services/HttpService"
import { Link } from "react-router-dom"
import Button from "../Authentication/Student/components/Button"

function StudentSearch(props) {

const services = new Service();
  const [students, setstudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const teacher = props.user?jwt(props.user):null; 
  const userId = teacher?.id;
  let authenticated = teacher ?true:false;

  useEffect(() => {
    services
      .get('auth/students')
      .then(res => setstudents(res.data))
      .then(setLoading(false))
  }, []);

  const requestTeacher= React.useCallback((_id) => {
    setLoading(true);
  services
    .put('auth/'+teacher.id+'/connect',{id:_id})
    .then(res => {
      console.log(res.data)
      setLoading(false);
    }).catch(err =>{
      setLoading(false);
      console.log(err.response.data.message);
    });
  }); 
  const createConvo= React.useCallback((senderId,receiverId) => {
    setLoading(true);
  services
    .post('api/conversations/',{senderId:senderId, receiverId:receiverId})
    .then(res => {
      console.log(res.data)
      setLoading(false);

    }).catch(err =>{
      setLoading(false);
      console.log(err.response.data.message);
    });
  }); 
  const Allstudents = students.map(r => {
    const { name, profilePic, topics,connection } = r
    return (
     <div className="m-6">
       <Link to = {authenticated?'/product' :''} state={{user:r}}>

     <SimpleCard
          key={name}
          user={authenticated}
          image={profilePic ?? "http://res.cloudinary.com/dvtri3zbx/image/upload/v1651326160/fnlmnz0zp4stkrqqectc.png"}
          className="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm"
        
          html={
            <div className="text-sm">
              <h3 className="font-bold text-base">{name}</h3>
              {/* <div className="flex items-center text-indigo-400">
                <FontAwesomeIcon icon={faStar} className="mr-2" /> 4.7
              </div> */}
              <p className="mt-1">
                {topics}
              </p>
            </div>
          }
        />
         </Link>
         {connection.includes(userId)?         
      <Button text="Chat" type='danger'onClick={()=>{createConvo(userId,r.id)}} link='/chat' size='lg'  />:
      authenticated?<Button text="Request" size='lg' onClick={() => requestTeacher(r.id)}/>:null
      }
      </div>
    )
  })

  return (
    <div>
      <NavSearchMenu user={authenticated} details={teacher} />
      <div className="w-full flex flex-col lg:flex-row lg:px-6">
        <SideFilters />
        <div className="flex-1 lg:pl-12 py-6 px-6 lg:px-0">
          <Alert content="We are now offering contactless delivery in light of COVID-19." type="info" />
          {loading ?<div class="flex items-center justify-center ">
            <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin m-12"></div>
          </div>: 
          <div className="mt-12">
            <h1 className="text-3xl font-bold">Recommended For You</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {Allstudents}
            </div>
          </div> 
          }
        </div>
      </div>

    </div>
  )
}

export default StudentSearch