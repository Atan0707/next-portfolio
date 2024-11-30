"use client"
import React, { useState, useEffect } from 'react'

const Intro = () => {
  const [isLarge, setIsLarge] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 20) {
      setIsLarge(false);
    } else {
      setIsLarge(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-transparent via-zinc-900/20 to-transparent"></div>
      
      <div className="intro text-left z-10 px-4 sm:px-6 lg:px-8">
        <div className="name pt-8 relative">
          <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <h1 className={`transition-all duration-1000 ${isLarge ? 'text-7xl sm:text-9xl' : 'text-5xl sm:text-7xl'} font-[family-name:var(--font-akira)] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500`}>
            Hariz<br />Hakim
          </h1>
        </div>
        <div className="description mt-8 font-[family-name:var(--font-geist-mono)] text-lg sm:text-xl text-gray-300 relative">
          <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <p className="leading-relaxed">
            Aspiring full-stack developer<br />
            Focused on building Web3.0<br />
            for real-world applications
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm">
              View Projects
            </a>
            <a href="#tech" className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-300 backdrop-blur-sm">
              Tech Stack
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro