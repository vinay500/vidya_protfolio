

import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='flex flex-row justify-between bg-black h-16 pt-5  '>
      <div className='pl-6 '>
        <h1 className=' text-2xl text-white'>Vidya</h1>
      </div>
    
      <nav>
        <ul className='flex flex-row mx-4'>
          <li>
          <Link className='mx-4 text-2xl text-white' to="home" smooth={true}>Home</Link>   
          </li>
          <li>
            <Link className='mx-4 text-2xl text-white' to="skills" smooth={true}>Skills</Link>
          </li>
          <li>
            <Link className='mx-4 text-2xl text-white' to="projects" smooth={true}>Projects</Link>
          </li>
          <li>
            <Link className='mx-4 text-2xl text-white' to="contact" smooth={true}>Contact</Link>
          </li>
        </ul>
      </nav>
      </header>
    
  );
};

export default Header;
