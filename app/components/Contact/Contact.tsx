import React from 'react'
import { LoginForm } from './card'

const Contact = () => {
  return (
    <div className="contact min-h-screen flex justify-center items-center">
      <div className="contact">
        <h1>
          Contact
        </h1>
        <h2>Let&apos;s connect!</h2>
      </div>
      <div className="card">
        <LoginForm />
      </div>
      
    </div>
  )
}

export default Contact