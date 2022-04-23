import React from 'react'
import { Navbar } from '../../NavBar/navbar'
import { Footer } from '../../Footer/footer'
import  Banner  from './elements/Banner'
import { TeacherLocatiions } from './elements/TeacherLocatiions'
import  About  from './elements/About'
import { Testimonials } from './elements/Testimonials'
import { Subscribe } from './elements/Subscribe'
export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <TeacherLocatiions/>
      <About/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
     </>
  )
}
