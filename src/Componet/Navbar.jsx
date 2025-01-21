// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };

  return (
    <>
    <div className="bg-[#faf0e7] pb-4">
        <div className="container mx-auto px-2">
            <div className="flex justify-around items-center text-[13px]">

                <ul className="navbar flex space-x-10">
                    <li className="nav-link relative group font-sofia-light-italic py-2">
                        <a href="#" className="hover:no-underline">Sale</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic py-2">
                        <a href="#" className="hover:no-underline">Whats New</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic py-2">
                        <a href="#" className="hover:no-underline">Body</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic py-2">
                        <a href="#" className="hover:no-underline">Toddler</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic py-2">
                        <a href="#" className="hover:no-underline">Boys</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                </ul>


                <div className="">
                    <h1 className="navbar-brand font-fonde cursor-pointer  text-[#2B3F45]">Bhaiya Days</h1>
                </div>

                <ul className="navbar flex space-x-10">
                    <li className="nav-link relative group font-sofia-light-italic  text-center text-[#2B3F45] py-2">
                        <a href="#" className="hover:no-underline">Home</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic  text-center text-[#2B3F45] py-2">
                        <a href="#" className="hover:no-underline">Gear</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic  text-center text-[#2B3F45] py-2">
                        <a href="#" className="hover:no-underline">Brand</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic  text-center text-[#2B3F45] py-2">
                        <a href="#" className="hover:no-underline">About</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                    <li className="nav-link relative group font-sofia-light-italic  text-center text-[#2B3F45] py-2">
                        <a href="#" className="hover:no-underline">Blog</a>
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#2B3F45] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>
                </ul>
                <div>
              </div>
              <button onClick={toggleMenu} className='toggle-btn xl:hidden lg:hidden text-[35px] top-[7%] right-4'>
                {isMenuOpen ? '×' : '≡'}
              </button>   
            </div>
          </div>       
       </div>

    <div className='shop-by flex bg-[#faf0e7] p-2 text-center justify-evenly border-t-[1px]'>
        <p className='text-[#2B3F45] translate-x-2 text-[14px] font-medium'>SHOPE BY AGE</p>
        <p className='text-[#2B3F45] translate-x-2 text-[14px] font-medium'>SHOP BY BRAND</p>
        <p className='text-[#2B3F45] translate-x-2 text-[14px] font-medium'>SHOPE BY SALE</p>
    </div>

    {isMenuOpen && (
        <div className='flex bg-[#faf0e7] text-[13px] justify-evenly'>
            <ul className='nav-link-res mb-2'>
            <li><a href="#" className="">Sale</a></li>
            <li><a href="#" className="">Whats New</a></li>
            <li><a href="#" className="">Body</a></li>
            <li><a href="#" className="">Toddler</a></li>
            <li><a href="#" className="">Boys</a></li>
            </ul>
            <ul className='mb-2'>
            <li><a href="#" className="">Home</a></li>
            <li><a href="#" className="">Gear</a></li>
            <li><a href="#" className="">Brand</a></li>
            <li><a href="#" className="">About</a></li>
            <li><a href="#" className="">Blog</a></li> 
            </ul>
            
        </div>
    )}
</>
  );
};

export default Navbar
