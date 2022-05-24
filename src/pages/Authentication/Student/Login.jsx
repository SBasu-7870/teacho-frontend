import React, { useState, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import GoogleLogin from "react-google-login"
import { useNavigate } from "react-router-dom"
import Service from "../../../services/HttpService.js"
import Button from "./components/Button.jsx"
import FormGroup from "./components/FormGroup.jsx"
import InputGroup from "./components/InputGroup.jsx"
import CheckboxGroup from "./components/CheckboxGroup.jsx"
import SelectGroup from "../Teacher/components/SelectGroup.jsx"
import Loader from "./components/Loader.jsx"
import Modal from "./components/PopUp.jsx"
import axios from "axios"

function Login() {
  const services = new Service();
  let navigate = useNavigate();
  const routeChange = (newPath) =>{ 
    let path = newPath; 
    navigate(path);
  }
  const [show,setShow]= useState(false)
  const [loading,setLoading]=useState(false);
  const [Mod,setModal]=useState({
    title:"",
    text:"",
    type:"",
    onClose:() => {}
  })


  const StudentLogin= React.useCallback(() => {
    setLoading(true);
  services
    .postFile('auth/local/Studentsignin',data)
    .then(res => {
      console.log(res.data)
      setLoading(false);
      localStorage.setItem('auth',res.data.authtoken)
      setModal({
        text:res.data.message,
        title:'Success',
        type:'success',
        onClose:()=>{
          routeChange('../webapp')
          setShow(false)
        }
      })
      setShow(true);
    }).catch(err =>{
      setLoading(false);
      console.log(err.response.data.message);
      setModal({
        text:err.response.data.message,
        title:'Error',
        type:'error',
        onClose:()=>{
          setShow(false)
        }
      })
      setShow(true);
    });
 
},[services]);

const TeacherLogin= React.useCallback(() => {
  setLoading(true);
services
  .postFile('api/auth/teacherLogin',data)
  .then(res => {
    console.log(res.data)
    setLoading(false);
    localStorage.setItem('auth',res.data.authtoken)
    setModal({
      text:res.data.message,
      title:'Success',
      type:'success',
      onClose:()=>{
        routeChange('../webapp')
        setShow(false)
      }
    })
    setShow(true);
  }).catch(err =>{
    setLoading(false);
    console.log(err.response.data.message);
    setModal({
      text:err.response.data.message,
      title:'Error',
      type:'error',
      onClose:()=>{
        setShow(false)
      }
    })
    setShow(true);
  });

},[services]);

function handle(e) {
  const newdata = {...data}
  newdata[e.target.id]=e.target.value
  setdata(newdata);
  console.log(newdata);
 }

  const [data, setdata] = useState({
  userType:"",
  email:"",
  password:""
  }) 
  

  const responseLogin = (response) => {
    console.log(response)
  }

  const handleLogin = (response) => {
    console.log(response.tokenId)
    axios.post('/auth/google-login',{token:response.tokenId}).then(res=> {
      localStorage.setItem('auth',res.data.auth)
      setModal({
        text:res.data.message,
        title:'Success',
        type:'success',
        onClose:()=>{
          routeChange('../webapp')
          setShow(false)
        }
      })
      setShow(true);
    })
  }

  return (
    <>
      {loading?<Loader/>:show?<Modal
        title={Mod.title}
        text={Mod.text}
        type={Mod.type}
        onClose={Mod.onClose}
      />:null}
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-5/12 h-full">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
        <a
          href="/"
          className="absolute text-3xl text-blue-400 cursor-pointer top-0 right-0 mt-6 mr-8"
        >
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <form className="w-5/6 sm:w-1/2 mx-auto text-center">
          <img
            src="..\assets\logo.png"
            className="h-8 block mx-auto"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
            <p className="mt-3 text-gray-800">
              New to Teacho?{" "}
              <a href="#" className="text-blue-400">
                Sign up
              </a>
            </p>
          </div>
          <div className="mt-12">
            <FormGroup>
            <SelectGroup
              placeholder="Select..."
              id="userType"
              onChange={(e) => handle(e)}
              options={[
                {
                  value: "Student",
                  label: "Student",
                },
                {
                  value: "Teacher",
                  label: "Teacher",
                },
              ]}
            />
            </FormGroup>
            <FormGroup>
              <InputGroup
                onChange={(e) => handle(e)} value={data.email} type="email" id="email" placeholder="Your Email"
              />
            </FormGroup>
            <FormGroup>
              <InputGroup
                 onChange={(e) => handle(e)} value={data.password} type="password" id="password" placeholder="Your password"
              />
            </FormGroup>
            <FormGroup>
              <Button text="Log In" full onClick={data.userType=='Student'?StudentLogin:TeacherLogin} />
            </FormGroup>
            <div className="text-right">
              <a href="#" className="text-blue-400">
                Forgot your password?
              </a>
            </div>
            <div className="mt-4">
              <p className="text-left text-gray-800">Or login with (Student Only)</p>
              <div className="mt-2 grid grid-cols-3 gap-6 text-black text-2xl">
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <GoogleLogin
                    clientId="721044493508-1vfmqs10jqk19k4tsjrrltebqschevd1.apps.googleusercontent.com"
                    onSuccess={handleLogin}
                    onFailure={responseLogin}
                    cookiePolicy={'single_host_origin'}
                  />,
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div className="mt-6 border-t border-b border-gray-300">
              <FormGroup>
                <CheckboxGroup
                  label="Remember this device"
                  name="rememberMe"
                  defaultChecked
                />
              </FormGroup>
            </div>
            <p className="text-sm mt-6 text-left">
              By continuing you accept our{" "}
              <a href="#" className="text-blue-400">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login