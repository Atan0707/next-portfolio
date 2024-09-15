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
    <div className="flex justify-center items-center min-h-screen">
      <div className="intro text-left">
        <div className="name pt-8">
          <h1 className={`transition-all duration-1000 ${isLarge ? 'text-9xl' : 'text-7xl'} font-[family-name:var(--font-akira)]`}>
            Hariz<br />Hakim
          </h1>
        </div>
        <div className="description mt-5 font-[family-name:var(--font-geist-mono)] text-xl">
          <p>
            Aspiring full-stack developer.<br />Focused on building Web3.0 <br />for real-world applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro