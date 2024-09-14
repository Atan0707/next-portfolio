import React from 'react';
import { CarouselUBA } from './Carousel';
// import Image from 'next/image';


const Experience = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="experience text-center">
        <h1 className=" font-[family-name:var(--font-akira)] mb-8 text-6xl pt-10">Experience</h1>
        <div className="jobs space-y-8">
          <div className="job">
            <div className="uba">
                <h2 className="text-4xl flex items-center justify-center font-[family-name:var(--font-geist-mono)] ">
                UiTM Blockchain Association (UBA)
                </h2>
                <div className="position font-[family-name:var(--font-geist-mono)] pt-2">
                    <h3 className="text-xl">
                        <span>Vice President</span>
                        <span className=""> | </span>
                        <span>March 2024 - Present</span>
                    </h3>
                    <h3 className="text-xl text-zinc-400">
                        <span>Secretary</span>
                        <span className=""> | </span>
                        <span>Sept 2023 - Dec 2023</span>
                    </h3>
                </div>
                <div className="description">
                    <p className="text-xl leading-relaxed font-[family-name:var(--font-nexa-light)] pt-4 ">
                      <ul className='inline-block space-y-5'>
                        <li className='border border-transparent w-96 text-justify text-zinc-300'>
                        At UBA, I am responsible for <span className='text-white font-bold font-[family-name:var(--font-nexa-heavy)]'>organizing events and workshops</span>, collaborating with other clubs and industries, ensuring students are well-informed about blockchain technology.
                        </li>
                        <li className='border border-transparent w-96 text-justify text-zinc-300 font-[family-name:var(--font-nexa-light)]'>
                        On free time, we join several <span className='text-white font-bold font-[family-name:var(--font-nexa-heavy)]'> hackathons and competitions</span> to showcase our skills and <span className='text-white font-bold'>learn new things</span>.
                        </li>
                        
                      </ul>
                      
                    </p>
                </div>

            </div>
            <div className="smf pt-10">
                <h2 className="text-4xl flex items-center justify-center font-[family-name:var(--font-geist-mono)]">
                    Sekretariat Mahasiswa Kolej Pengajian Pengkomputeran,<br /> Informatik dan Matematik (SMKPPIM)
                </h2>
                <div className="position font-[family-name:var(--font-geist-mono)] pt-2">
                    <h3 className="text-xl text-zinc-400">
                        <span>Multimedia Department</span>
                        <span className=""> | </span>
                        <span>Mar 2023 - Jan 2024</span>
                    </h3>
                </div>
                <div className="description">
                    <p className="text-xl leading-relaxed font-[family-name:var(--font-nexa-light)] pt-4 ">
                      <ul className='inline-block space-y-5'>
                        <li className='border border-transparent w-96 text-justify text-zinc-300'>
                        Assisting faculty in organizing events, <span className='text-white font-bold font-[family-name:var(--font-nexa-heavy)]'>focused on multimedia</span>, such as video editing, photography, and graphic design.
                        </li>
                        
                      </ul>
                      
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div className="carousel items-center pt-10 pb-10">
            <CarouselUBA/>
        </div>
      </div>
    </div>
  );
};

export default Experience;