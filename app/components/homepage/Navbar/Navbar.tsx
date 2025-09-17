import React from 'react';
import { LuAperture } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full font-[family-name:var(--font-geist-mono)] z-50 bg-opacity-50 backdrop-blur-md">
      <nav className='flex justify-center items-center border-b-2 py-4'>
        <ul className='flex space-x-8'>
          <li>
            <a href='#head' className='text-lg'><LuAperture className='mt-1'/></a>
          </li>
          <li>
            <a href='#experience' className='text-lg'>Experience</a>
          </li>
          <li>
            <a href='#education' className='text-lg'>Education</a>
          </li>
          <li>
            <a href='#projects' className='text-lg'>Projects</a>
          </li>
          <li>
            <a href='#tech' className='text-lg'>Stacks</a>
          </li>
          <li>
            <a href='#contact' className='text-lg'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;