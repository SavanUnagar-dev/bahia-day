// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
  return (
    <>
     <div className='main-div-header bg-[#f1ddcc] p-[60px]'>
        <div className='s1-sec-div mt-10'>
            <p className='header-title mb-[-10px]'>
              A MORDERN-DAY
            </p>
            <div className='responsiv-s1-logo'>
              <h1 className="main_logo_text s1-rps-logo">Boutique </h1>
              <h1 className="main_logo_text1 s1-rps-logo"> for Boys</h1>
            </div>   
            
            <p className='heder-bottom-p'>
              Cloths, accessories and room decor in
              payful, crazy, and simple style
            </p>
            <button className='header-btn'>
                Lets Shop
            </button>
        </div>
        <div className='s1-imgs flex p-5'>
          <div>
            <img className='header-img rps-img1' src="/public/assets/main_img_1.png" alt="" />
          </div>
          <div>
            <img className='header-img rps-img2' src="/public/assets/main_img_two.png" alt="" />
          </div>
        </div>
     </div>
    </>
  )
}

export default Header
