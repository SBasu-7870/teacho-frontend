import React, { useState } from "react"

import ChevronDots from "./components/ChevronDots"
import FormGroup from "../Student/components/FormGroup"
import SelectGroup from "./components/SelectGroup"
import InputGroup from "../Student/components/InputGroup"
import Button from "../Student/components/Button"
import Service from "../../../services/HttpService"
import Modal from "../Student/components/PopUp"
import { useNavigate } from "react-router-dom"
import Loader from "../Student/components/Loader"

function Register() {
  const services = new Service();
  let navigate = useNavigate();
  const routeChange = (newPath) =>{ 
    let path = newPath; 
    navigate(path);
  }
  const subjects=[{
    value: "Physics",
    label: "Physics",
    topic:[
    {
      value: "Electrostatics",
      label: "Electrostatics",
    },
    {
      value: "Current Electricity",
      label: "Current Electricity",
    },
    {
      value: "Magnetic Effect of Current & Electromegnetism",
      label: "Magnetic Effect of Current & Electromegnetism",
    },
    {
      value: "Electromagnetic Induction",
      label: "Electromagnetic Induction",
    },
    {
      value: "Alternating Current",
      label: "Alternating Current",
    },
    {
      value: "Electromagnetive Wave",
      label: "Electromagnetive Wave",
    },
    {
      value: "Ray Optics",
      label: "Ray Optics",
    },
    {
      value: "Wave Optics",
      label: "Wave Optics",
    },
    {
      value: "Dual Nature of Matter",
      label: "Dual Nature of Matter",
    },
    {
      value: "Atoms & Nuclei",
      label: "Atoms & Nuclei",
    },
    {
      value: "Electronic Device - I & II and Communication System",
      label: "Electronic Device - I & II and Communication System",
    },
  ]
  },
  {
    value: "Chemistry",
    label: "Chemistry",
    topic:[
      {
        value: "MOLE AND STOICHIOMETRY – I",
        label: "MOLE AND STOICHIOMETRY – I",
      },
      {
        value: "ATOMIC STRUCTURE – I",
        label: "ATOMIC STRUCTURE – I",
      },
      {
        value: "STATES OF MATTER ",
        label: "STATES OF MATTER ",
      },
      {
        value: "CLASSIFICATION OF ELEMENTS and PERIODICITY IN PROPERTIES",
        label: "CLASSIFICATION OF ELEMENTS and PERIODICITY IN PROPERTIES",
      },
      {
        value: "MOLE AND STOICHIOMETRY - II",
        label: "MOLE AND STOICHIOMETRY - II",
      },
      {
        value: "CHEMICAL BONDING AND MOLECULAR STRUCTURE",
        label: "CHEMICAL BONDING AND MOLECULAR STRUCTURE",
      },
      {
        value: "THERMODYNAMICS",
        label: "THERMODYNAMICS",
      },
      {
        value: "GOC - I ",
        label: "GOC - I ",
      },
      {
        value: "GOC - II",
        label: "GOC - II",
      },
      {
        value: "s-Block ELEMENTS AND THEIR COMPOUNDS ; HYDROGEN and ITS COMPOUNDS",
        label: "s-Block ELEMENTS AND THEIR COMPOUNDS ; HYDROGEN and ITS COMPOUNDS",
      },
      {
        value: "EQUILIBRIA : CHEMICAL AND IONIC",
        label: "EQUILIBRIA : CHEMICAL AND IONIC",
      },
      {
        value: "p-Block ELEMENTS (Gr. 13, 14) and THEIR COMPOUNDS",
        label: "p-Block ELEMENTS (Gr. 13, 14) and THEIR COMPOUNDS",
      },
      {
        value: "HYDROCARBONS",
        label: "HYDROCARBONS",
      },
      {
        value: "Environmental Chemistry",
        label: "Environmental Chemistry",
      },
    ]
  },
  {
    value: "Maths",
    label: "Maths",
    topic:[
      {
        value: "RELATION, FUNCTION AND MAPPING",
        label: "RELATION, FUNCTION AND MAPPING",
      },
      {
        value: "INVERSE TRIGONOMETRIC FUNCTION",
        label: "INVERSE TRIGONOMETRIC FUNCTION",
      },
      {
        value: "LIMIT, CONTINUITY, DIFFERENTIABILITY AND DIFFERENTIATION",
        label: "LIMIT, CONTINUITY, DIFFERENTIABILITY AND DIFFERENTIATION",
      },
      {
        value: "APPLICATION OF DERIVATIVE",
        label: "APPLICATION OF DERIVATIVE",
      },
      {
        value: "INDEFINITE INTEGRATION",
        label: "INDEFINITE INTEGRATION",
      },
      {
        value: "DEFINITE INTEGRATION",
        label: "DEFINITE INTEGRATION",
      },
      {
        value: "AREA  OF BOUNDED REGIONS",
        label: "AREA  OF BOUNDED REGIONS",
      },
      {
        value: "DIFFERENTIAL EQUATION",
        label: "DIFFERENTIAL EQUATION",
      },
      {
        value: "VECTORS",
        label: "VECTORS",
      },
      {
        value: "THREE DIMENSIONAL CO-ORDINATE SYSTEM",
        label: "THREE DIMENSIONAL CO-ORDINATE SYSTEM",
      },
      {
        value: "PROBABILITY",
        label: "PROBABILITY",
      },
      {
        value: "DETERMINANTS",
        label: "DETERMINANTS",
      },
      {
        value: "HYDROCARBONS",
        label: "HYDROCARBONS",
      },
      {
        value: "MATRICES",
        label: "MATRICES",
      },
    ]
  },
  {
    value: "Biology",
    label: "Biology",
  },]
  const [obj,setObj]=useState([])
  const [show,setShow]= useState(false)
  const [loading,setLoading]=useState(false);
  const [Mod,setModal]=useState({
    title:"",
    text:"",
    type:"",
    onClose:() => {}
  })
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phn: "",
    email: "",
    password: "",
    subject: "",
    topics:'',
    duration:"",
    dob: "",
    address: "",
    photo: File,
    resume: File,
    video: File
  }) 

    const addTeacher= React.useCallback(() => {
      setLoading(true);
    services
      .postFile('api/auth/teacherSignUp',data)
      .then(res => {
        console.log(res.data)
        setLoading(false);
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

   function handle1(e) {
    const newdata = {...data}
    newdata[e.target.id]=e.target.files[0]
    setdata(newdata);
    console.log(newdata);
   }
  return (
    <div className="container mx-auto p-5">
      <div className="w-full flex justify-between item-center py-6">
        <div className="h-8">
          <a href="/"><img
            src="..\assets\logo.png"
            className="h-full"
          /></a>
        {loading?<Loader/>:show?<Modal
        title={Mod.title}
        text={Mod.text}
        type={Mod.type}
        onClose={Mod.onClose}
      />:null}
        </div>
        <a href="mailto:teacho.india@gmail.com" className="no-underline font-medium text-blue-400">
          Contact Us
        </a>
      </div>
      <div className="mt-8">
        {/* <ChevronDots
          steps={["Account", "Details", "Team", "Pay"]}
          currentStep={2}
        /> */}
      </div>
      <div className="my-12 pb-12 w-full max-w-screen-md mx-auto">
        <h1 className="text-4xl font-bold p-7 text-center">Teacher Registration</h1>
        <form className="mt-2 w-full">
          <FormGroup horizontal>
            <InputGroup label="First Name" onChange={(e) => handle(e)} value={data.firstName} type="text" id="firstName" />
            <InputGroup label="Last Name" name="lastName" onChange={(e) => handle(e)} type="text" value={data.lastName} id="lastName"/>
          </FormGroup>
          <FormGroup horizontal>
            <SelectGroup
              label="Gender"
              placeholder="Select..."
              id="gender"
              onChange={(e) => handle(e)} value={data.gender}
              options={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
                {
                  value: "Rather not say",
                  label: "Rather not say",
                },
              ]}
            />
            <InputGroup label="Phone Number" type="number" id="phn" onChange={(e) => handle(e)} value={data.phn} />
          </FormGroup>
          <FormGroup horizontal>
            <InputGroup label="Email" type="email" id="email" onChange={(e) => handle(e)} value={data.email} />
            <InputGroup
              label="Password"
              type="password"
              id="password"
              placeholder="Your password"
              onChange={(e) => handle(e)} value={data.password}
            />
          </FormGroup>
          <FormGroup horizontal>
            <SelectGroup
              label="Subject"
              placeholder="Select..."
              id="subject"
              onChange={(e) =>{
                 handle(e)
                  setObj(subjects.find(tar => tar.value === e.target.value).topic)
                } 
                } value={data.subject}
              options={subjects}
            />
            <SelectGroup
              label="Topic"
              placeholder="Select..."
              id="topic"
              onChange={(e) => handle(e)} value={data.topic}
              options={obj}
            />
            <SelectGroup
              label="Duration of Course"
              placeholder="Select..."
              id="duration"
              onChange={(e) => handle(e)} value={data.duration}
              options={[
                {
                  value: "Full Course",
                  label: "Full Course",
                },
                {
                  value: "Express Course",
                  label: "Express Course",
                },
              ]}
            />

          </FormGroup>
          <FormGroup horizontal>
            <InputGroup label="Address" type="text" id="address" onChange={(e) => handle(e)} value={data.address} />
            <InputGroup label="Date of Birth " type="date" id="dob" onChange={(e) => handle(e)} value={data.dob} />
          </FormGroup>
          <FormGroup horizontal>
            <InputGroup label="Upload Pic" type="file" id="photo" name="photo" onChange={(e) => handle1(e)} />
            <InputGroup label="Resume" type="file" id="resume"
              onChange={(e) => handle1(e)} />
          </FormGroup>
          <FormGroup>
            <InputGroup label="Sample Video" type="file" id="video" onChange={(e) => handle1(e)} />
          </FormGroup>
          <FormGroup>
            <Button text="Next" onClick={addTeacher} full />
          </FormGroup>
        </form>
      </div>
    </div>
  )
}

export default Register