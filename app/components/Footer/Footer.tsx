import React from 'react'
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-[family-name:var(--font-geist-mono)]">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 space-x-5">
          <a href="https://t.me/hrzhkm" className="text-white" target="_blank" rel="noopener noreferrer">
            <BsTelegram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/harizhakim/" className="text-white" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={24} />
          </a>
          <a href="https://github.com/Atan0707" className="text-white" target="_blank" rel="noopener noreferrer">
            <BsGithub size={24} />
          </a>
        </div>
        <div className="mb-4">
          <p>2022496432@student.uitm.edu.my</p>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Hariz Hakim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer