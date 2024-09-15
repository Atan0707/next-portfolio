import React from 'react'

const Education = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="education text-center">
        <h1 className="text-6xl font-[family-name:var(--font-akira)] mb-8 hover:text-8xl duration-700">Education</h1>
        <div className="schools space-y-8">
          <div className="school">
            <h2 className="text-4xl flex items-center justify-center font-[family-name:var(--font-geist-mono)]">
              Universiti Teknologi MARA (UiTM)
            </h2>
            <div className="degree font-[family-name:var(--font-geist-mono)] pt-3">
              <h3 className="text-xl">
                <span>Bachelor of Computer Science (Hons.) Netcentric Computing</span>
                <span className=""> | </span>
                <span>Oct 2022 - Mar 2026</span>
              </h3>
              <h3 className="text-xl text-white pt-2">
                <span>Foundation in Engineering</span>
                <span className=""> | </span>
                <span>Aug 2021 - Jun 2022</span>
              </h3>
            </div>
            {/* <div className="description">
              <p className="text-lg leading-relaxed font-[family-name:var(--font-nexa-light)] pt-4 ">
                
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education