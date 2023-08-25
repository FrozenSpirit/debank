
import { useState } from 'react'
import {navLinks} from '../constants'
import {close, logo, menu} from '../assets'

const Navbar = () => {
  
  const[clicked, setOnClick] = useState('Home')
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt='banklogo' className='w-[124px] h-[32px]'/>
      
      <ul className='list-none hidden sm:flex justify-end items-center flex-1 fixed top-[30px] right-[50px] z-[10]'>

      {/* so we want the title clicked to be of white color and */}
      {navLinks.map((nav, index) => (
        <li key={nav.id}
        className= {`font-poppins font-normal cursor-pointer text-[16px] 
        ${clicked === nav.title ? 'text-white' : 'text-dimWhite'}
        ${index === navLinks.length - 1 ? "mr-0" : 'mr-10'}
        `}
          onClick = {() => setOnClick(nav.title)}
        >
          <a href={`#${nav.id}`} className='p-3'> {nav.title}</a>
        </li>
      ))}

      </ul>

      {/* our drop down menu when sm xs */}
      <div className='flex flex-1 justify-end items-center sm:hidden'>
        <img src={toggle ? close : menu}
        alt='menu'
        className='w-[20px] h-[20px] object-contain'
        onClick={() => setToggle(!toggle)}
        />
      
     <div
     className = {`${!toggle ? " hidden" : "flex transition-all duration-500 ease-in"}
     p-4 bg-black-gradient absolute top-20 right-0 mx-4 my-2
     min-w-[180px] min-h-[300px] rounded-xl 
     `}
     >

      <ul className='list-none flex justify-evenly items-start flex-col flex-1 w-full'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className = {`w-full min-h-[40px] font-poppins flex  justify-center items-center text-lg font-medium cursor-pointer text-[15px]
          ${clicked === nav.title ? "text-white" : 'text-dimWhite'}
          ${index === navLinks.length - 1 ? 'mb-0' : 'mb-3'}`}
          onClick={() => setOnClick(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

      </ul>
     </div>
     </div>


     


    </nav>
  );
};

export default Navbar

