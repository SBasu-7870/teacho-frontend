import React  from 'react'
import { useEffect } from 'react'
import { Navbar } from '../../NavBar/navbar'
import { Footer } from '../../Footer/footer'
import  Banner  from './elements/Banner'
import { TeacherLocatiions } from './elements/TeacherLocatiions'
import  About  from './elements/About'
import { Testimonials } from './elements/Testimonials'
import { Subscribe } from './elements/Subscribe'

import { MainSlider } from './mainSlider'
import axios from 'axios'

export const Home = () => {
  useEffect(() => {
    axios
      .get('auth/login/success')
      .then(res => console.log(res.toString()));
   
  }, []);
  return (
    <>
      <MainSlider/>
     </>
  )
}
