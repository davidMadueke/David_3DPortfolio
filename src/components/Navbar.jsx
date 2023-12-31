import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; /* Meant for generating hyperlinks to different parts of the Site */

import { styles } from '../styles';
import { navLinks } from '../constants'; // Used for the names and link destinations of navigation bar links
import { logo, menu, close  } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      /* w-full = full width of page, flex = flex property, item-center = make the element centered
      py-5 = Y axis padding of 5, top-0 = make it stay on the top, z-20 = make it appear above other elements
      */
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to = "/" // To the top of the page
          className='flex items-center gap-2 '
          onClick={() => {
            setActive("") // A react dom that keeps track of where the useer is on the page
            window.scrollTo(0,0); //Scroll to the top of the page
          }}
        >
          <img src ={logo} alt = "logo" className="w-9 h-9 object-contain flex-none bg-[length:2000px_2000px]" width={1000} height={1000} />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>David Madueke &nbsp; <span className='sm:block hidden'>| Javascript Mastery </span> </p>

        </Link> 
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${ 
                active === link.tile 
                  ? "text-white" 
                  : "text-secondary"  
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
              <a href = {`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">  
          <img 
            src={toggle ? close : menu}
              alt='menu'
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${ 
                  active === link.tile 
                    ? "text-white" 
                    : "text-secondary"  
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                <a href = {`#${link.id}`}> {link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar