import React from 'react'
//min-h-screen -> minimum height of the screen --font-geist-mono
const Intro = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="intro text-left">
            <div className="name pt-8 ">
                <h1 className='text-5xl font-[family-name:var(--font-akira)]'>
                  Hariz<br />Hakim
                  </h1>
            </div>
            <div className="description mt-5 font-[family-name:var(--font-geist-mono)]">
              <p>
                Aspiring full-stack developer<br></br> based in Melaka. <br />Focused on building Web3.0 <br />for real-world applications.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Intro