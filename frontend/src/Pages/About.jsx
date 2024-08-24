import React from 'react'
import './Style/about.css'

const About = () => {
  return (
    <div className="main_header container-fluid bg-gray-100 ">
    <div className="flex justify-center">
      <div className="w-full max-w-[70%]">
        <div className="flex flex-wrap justify-around">
          {/* Left side div */}
          <div className="main_header_right md:w-1/2 flex justify-center md:justify-end items-center">
            <figure>
              <img
                src="/aboutMe.png"
                alt="Raj"
                className="rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* Right side div */}
          <div className="main_header_left  w-full md:w-1/2 flex justify-center items-start text-center md:text-left px-4">
            <p className="text-gray-600 mb-4">Welcome to Design World</p>
            <h1 className="md:text-5xl font-bold text-gray-800 mb-6">
              I Am A{" "}
              <span className="text-indigo-600">MERN Stack Developer</span>, Youtuber, and
              Freelancer
            </h1>
            <a
              href="http://www.facebook.com/rajkumar.rabidas.313?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-indigo-600 text-lg text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
                ABOUT ME
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
