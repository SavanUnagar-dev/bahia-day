// eslint-disable-next-line no-unused-vars
import React from 'react'

const Section2 = () => (
  <>
    <div className="section3 flex flex-wrap lg:flex-nowrap">
      <div className="w-full flex justify-center">
        <img className="sec2-img w-[90%] lg:w-[500px] lg:h-[80%] my-4 lg:my-10"
          src="https://bahiyadays.netlify.app/images/pr1.png" alt="Product Image" />
      </div>

      <div className="sec2_three_right bg-[#E2C9B6] p-6 lg:p-12">
        <div className="s3-img-div">
          <img className="s2-right-img" src="https://bahiyadays.netlify.app/images/frame_3_logo.png" alt="Logo" />
        </div>
        <h1 className="main_text">A Boutique for Boys</h1>
        <h4 className="info_text text-base lg:text-lg mb-4 mt-5 lg:mb-5 text-center">The Bahia Days Story</h4>
        <div className="para_one text-center text-sm lg:text-base mx-auto lg:w-[50%]">
          Bahia Days combines a minimalist aesthetic with the comfort and freedom boys need to play, explore, run, and grow.
        </div>
        <button className="s2-btn border border-[#2B3F45] px-4 py-2 mt-6 lg:mt-8 hover:bg-[#403731] hover:border-[#7BA2A8] hover:text-[#efd5c1]">
          Read More of Our Story
        </button>
      </div>
    </div>

  </>
)

export default Section2
