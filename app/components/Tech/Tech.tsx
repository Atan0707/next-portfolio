import React from 'react';

const Tech = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="tech text-center">
        <h1 className="text-6xl font-[family-name:var(--font-akira)] pb-8">Stacks</h1>
        <div className="tech-stack space-y-8 ">
          <div className="stack">
            <h2 className="text-4xl ">Frontend</h2>
            <ul className="pt-2 text-xl flex justify-center space-x-4 font-[family-name:var(--font-geist-mono)]">
              <li>React</li>
              <li>Next.js</li>
              <li>Solidity</li>
              <li>Web3.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="stack">
            <h2 className="text-4xl">Backend</h2>
            <ul className="pt-2 flex justify-center space-x-4 font-[family-name:var(--font-geist-mono)] text-xl">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="stack">
            <h2 className="text-4xl">Tools</h2>
            <ul className=" text-xl flex justify-center space-x-4 font-[family-name:var(--font-geist-mono)]">
              <li>Git</li>
              <li>GitHub</li>
              <li>VSCode</li>
              <li>Docker</li>
              <li>Hardhat</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;