// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='footer-logo-div'>
          <a href="" className='footer-logo-img'>
            <img src="https://bahiyadays.netlify.app/images/about_images/real_logo_footer.svg" alt="" /> 
          </a>
        </div>

        <div className='footer-navlink-div'>
            <ul className='flex justify-center justify-evenly pt-8'>
               <li className='footer-navlink'><a href="" className='decoration-none'>About</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Contact</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Shope</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Blog</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Shiping</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Return Policy</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Privecy Policy</a></li>
               <li className='footer-navlink'><a href="" className='decoration-none'>Terms & condition</a></li>
            </ul>
        </div>

        <div className='footer-social' >
           <a href="" className=''>
            <span><i className="fa-brands fa-instagram"></i></span>
           </a>
        </div>

        <div className="copywrite_section pt-4 pb-2">
        <p className="text-capitalize text-center mb-0">C 2021 Bahia Days   |   Site by Bungalow Creative</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
