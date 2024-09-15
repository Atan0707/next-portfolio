import React from 'react'

const projectData = [
  {
    title: "Weather App ",
    description: "Created using Open Weather Map API and react",
    link: "https://github.com/Atan0707/WeatherAppTest"
  },
  {
    title: "Web3 Real Estate Dapp",
    description: "A decentralized application for real estate transactions using Solidity and Web3.js",
    link: "https://github.com/Atan0707/solidity-learn-web3-real-estate"
  },
  {
    title: "Todo List (Next.js)",
    description: "Todo list app created using Next.js and postgreSQL as database",
    link: "https://github.com/Atan0707/september-project"
  },
  {
    title: "Speech-to-Text AI",
    description: "Hackathon project that converts speech to text OpenAI Speech-to-Text API",
    link: "https://github.com/Atan0707/hackinsan"
  },
  {
    title: "Push-Up Counter (IoT)",
    description: "Developed using ESP32 and Firebase to count push-ups",
    link: "https://github.com/Atan0707/iot-project-pushup"
  },
  {
    title: "Whatsapp Chatbot",
    description: "Developed using whatsapp API and ww.js",
    link: "https://github.com/Atan0707/iot-project-pushup"
  },
  {
    title: "Devfolio (Hackthon Profile)",
    description: "My Hackathon profile",
    link: "https://devfolio.co/@Atan"
  },
  {
    title: "More Projects on my Github ",
    description: "My Hackathon profile",
    link: "https://github.com/Atan0707"
  },
  // Add more projects here
]

const Projects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="projects text-center">
        <h1 className="text-6xl font-[family-name:var(--font-akira)] mb-8 hover:text-8xl duration-700">Projects</h1>
        <div className="project-list space-y-8">
          {projectData.map((project, index) => (
            <div className="project" key={index}>
              <h2 className="text-2xl font-[family-name:var(--font-geist-mono)] hover:text-sky-700 hover: transition-all duration-700">
                <a href={project.link}>{project.title}</a>
              </h2>
              <p className="text-lg leading-relaxed font-[family-name:var(--font-nexa-light)] pt-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects