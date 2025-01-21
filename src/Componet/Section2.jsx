// eslint-disable-next-line no-unused-vars
import React from 'react'

const Section1 = () => {
  return (
    <>
    <div className='sec-2'>
      <div className='s2-main-div' style={{display:"flex" ,alignItems:"center", justifyContent:"center",flexDirection:"column"}}>

        <div className='para-div'>
            <p className="para_1">
             Hey, mom! Like you, we were frustrated with the limited selection and lack of options when we went shopping for our cute boys. 
            </p>
        </div>
        <p className="para_2">Bahia Days was designed specifically for boys <br/> (and boy moms!). All the playful, cozy, high-quality clothes, accessories, and décor – in your new favorite one-stop-shop.</p>
         <img className='s2-logo mt-5 mb-10' src="https://bahiyadays.netlify.app/images/chitah_logo.png" alt="" />
      </div>
    
      <div className='feature-item'>
        <div className='title'>
          <h1 className="feature-title">Our Featured Items</h1>
          <div className="info">These cozy Autumn looks are flying off the shelves!</div>
        </div>
        <div className='items-details flex items-center justify-center flex-wrap'>
           <div className='card'>
              <img src="https://bahiyadays.netlify.app/images/pr1.png" alt="" />
              <div className='card-body'>
                 <p className=''>Comfy Sweatpants</p>
              </div>
              <div className='item-price'>
                 <p className=''>$28.00</p>
              </div>
           </div>
           <div className='card'>
              <img src="https://bahiyadays.netlify.app/images/pr1.png" alt="" />
              <div className='card-body'>
                 <p className=''>Comfy Sweatpants</p>
              </div>
              <div className='item-price'>
                 <p className=''>$28.00</p>
              </div>
           </div>
           <div className='card'>
              <img src="https://bahiyadays.netlify.app/images/pr1.png" alt="" />
              <div className='card-body'>
                 <p className=''>Comfy Sweatpants</p>
              </div>
              <div className='item-price'>
                 <p className=''>$28.00</p>
              </div>
           </div>
           <div className='card'>
              <img src="https://bahiyadays.netlify.app/images/pr1.png" alt="" />
              <div className='card-body'>
                 <p className=''>Comfy Sweatpants</p>
              </div>
              <div className='item-price'>
                 <p className=''>$28.00</p>
              </div>
           </div>
        </div>
      </div>
      <div className='s2-btn-div'>
      <button className='item-btn'>
            Sell All
      </button>
      </div>
    </div>
    </>
  )
}

export default Section1
