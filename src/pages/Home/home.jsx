import React from 'react'
import { Navbar } from '../../NavBar/navbar'
import { Footer } from '../../Footer/footer'
import { Banner } from './Banner'
import { TeacherLocatiions } from './TeacherLocatiions'
import { About } from './About'
import { Testimonials } from './Testimonials'
export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <TeacherLocatiions/>
      <About/>
      <Testimonials/>
      <Footer/>
     </>
  )
}
