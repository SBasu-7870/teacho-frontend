import React from 'react'

export const Testimonials = () => {
  return (
    <div class="page-section bg-gray-100">
    <div class="container mx-auto sm:px-4">
      
      <div class="owl-carousel wow fadeInUp" id="testimonials">
        <div class="item">
          <div class="flex flex-wrap  items-center">
            <div class="md:w-1/2 pr-4 pl-4 py-3">
              <div class="testi-image">
                <img src="../assets/img/person/person_1.jpg" alt=""/>
              </div>
            </div>
            <div class="md:w-1/2 pr-4 pl-4 py-3">
              <div class="testi-content">
                <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                <div class="entry-footer">
                  <strong>Melvin Platje</strong> &mdash; <span class="text-grey">CEO Slurin Group</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="flex flex-wrap  items-center">
            <div class="md:w-1/2 pr-4 pl-4 py-3">
              <div class="testi-image">
                <img src="../assets/img/person/person_2.jpg" alt=""/>
              </div>
            </div>
            <div class="md:w-1/2 pr-4 pl-4 py-3">
              <div class="testi-content">
                <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                <div class="entry-footer">
                  <strong>George Burke</strong> &mdash; <span class="text-grey">CEO Letro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> 
  </div>
  )
}
