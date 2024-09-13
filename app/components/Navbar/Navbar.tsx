import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar justify-center w-full font-[family-name:var(--font-geist-mono)]">
      <nav className='flex justify-center items-center border-b-2 py-4 bg-translucent'>
        <ul className='flex space-x-4'>
          <li>
            <a href='#head' className='text-lg'>Home</a>
          </li>
          <li>
            <a href='#projects' className='text-lg'>Projects</a>
          </li>
          <li>
            <a href='#about' className='text-lg'>About</a>
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