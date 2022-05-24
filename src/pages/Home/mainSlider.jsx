import React from 'react'
import './mainslider.css'
import { Link } from 'react-router-dom'

export const MainSlider = () => {
  return (
    <div id='mainslider' class="intro">
  <div class="sides">
  <Link to='webapp'>
    <div class="side monkey">
      <h2 class="name">Student</h2> 
      <div><img src='assets/student.png' width={250}/></div>
    </div>
    </Link>
    <div class="versus">
      <span><img src='assets/logo.png'/></span>
    </div>
    <Link to='students'>
    <div class="side robot">
      <h2 class="name">Teacher</h2> 
      <div><img src='assets/teacher.png' width={250}/></div>
    </div>
    </Link>
  </div>
</div>
  )
}
