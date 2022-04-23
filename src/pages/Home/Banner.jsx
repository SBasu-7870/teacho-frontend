import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGooglePlay
  } from "@fortawesome/free-brands-svg-icons"

export const Banner = () => {
  return (
      <div class="container mx-auto sm:px-4 h-full ">
        <div class="flex flex-wrap items-center h-full">
          <div class="lg:w-1/2 pr-6 pl-8 py-5">
          <h1 class="font-medium leading-tight text-4xl mt-0 mb-4 font-[Poppins]">Learn & Build every topic with with Pro Teachers and Mentors</h1>
            <p class="text-lg mb-5">We understand that you want to be the greatest version of yourself. In order to have a successful career. Why don't you learn from someone who can show you how to do it correctly? 20,000+ hustlers are on their way to their dream colleges, and we want YOU to join them.</p>

            <a href="#" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-500 text-white hover:bg-blue-600 btn-split ml-2">Download Now<div class="fab">  
                    <FontAwesomeIcon icon={faGooglePlay} /></div></a>

            <a href="#" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-outline border text-blue-600 ml-2">Web App </a>

          </div>
          <div class="lg:w-1/2 pr-4 pl-8 py-3">
            <div class="img-place">
              <img src="../assets/bg_image_1.png" alt=""/>
            </div>
          </div>
        </div>
      </div>

  )
}
