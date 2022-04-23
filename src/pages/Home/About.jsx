import React from 'react'

export const About = () => {
  return (
    <div class="page-section">
      <div class="container mx-auto sm:px-4">
        <div class="flex flex-wrap ">
          <div class="lg:w-1/2 pr-4 pl-4 py-3 wow zoomIn">
            <div class="img-place text-center">
              <img src="../assets/img/bg_image_2.png" alt=""/>
            </div>
          </div>
          <div class="lg:w-1/2 pr-4 pl-4 py-3 wow fadeInRight">
            <h2 class="title-section">What's on <span class="marked">Teacho</span> ?</h2>
            <div class="divider"></div>
            <p className='mb-5'>Find the best teachers, college seniors, and pro mentors. Begin educative sessions and communicate with them via chat, and live stream. Learn from their courses, and more! Fix your weaknesses, and focus on your goals, and stand out among the competition. Prepare to seize the next great opportunity that comes your way.</p>

            <a href="#" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">More Details</a>
            <a href="#" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-outline border ml-2">Success Stories</a>
          </div>
        </div>
      </div> 
    </div> 
  )
}
