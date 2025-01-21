// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Componet/Navbar'
import Section1 from './Componet/Section1'
import Section2 from './Componet/Section2'
import Section3 from './Componet/Section3'
import Section4 from './Componet/Section4'
import Section5 from './Componet/Section5'
import Section6 from './Componet/Section6'
import Footer from './Componet/Footer'
const App = () => {
  return (
    <>
    <div className='bg-[#D9BAA0] w-full h-auto font-normal text-[14px] text-[#2B3F45] text-center p-2'>
      <p className='nav-title font-semibold'>Shop our Mother’s Day Sale | 20% Off Select Items</p>
    </div>
    <Navbar />
    <Section1 />
    <Section3 />
    <Section4 />
    <Section2 />
    <Section6 />
    <Section5 /> 
    <Footer />
    </>
  )
}

export default App
