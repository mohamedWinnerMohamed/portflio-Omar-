import React from "react";
import Navbar from "./Navbar";
import pc from "/pc.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import whatsapp from "/whatsapp.png";
import discord from "/discord.png";
import cv from "/cv.pdf";

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center sm:top-30">
      <div
        className="md:h-[550px] h-[400px] w-[250px] md:w-[350px] lg:w-[450px]  bg-gradient-to-r absolute from-[#1e3a8a] via-[#38bdf8] to-[#2563eb] 
      transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-18 lg:px-20 xl:px-32 pb-4 md:pb-36 md:pt-32 pt-12 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#5e91f2] rounded-full blur-3xl opacity-50 -top-5 -left-12 "></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Mohamed Omar
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#1564bf] mb-2">
              Frontend Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            I’m a developer with deep knowledge of front-end technologies, I
            enjoy solving real-world problems through code and always aim to
            deliver polished, maintainable projects
          </p>
          {/* <div className="flex items-center space-x-4 mb-6">
            <a href="https://github.com/mohamedWinnerMohamed" target="_blank">
              <img
                src={github}
                alt="github"
                className="w-9 h-9 md:h-11 md:w-11 transition-transform duration-300 ease-in-out hover:scale-[1.1]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-faez-saad-eldeen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-9 h-9 md:h-11 md:w-11 transition-transform duration-300 ease-in-out  hover:scale-[1.1]"
              />
            </a>
            <a href="https://wa.me/201552310890" target="_blank">
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-9 h-9 md:h-11 md:w-11 transition-transform duration-300 ease-in-out  hover:scale-[1.1]"
              />
            </a>
            <a
              href="https://discord.com/users/968556068626112553"
              target="_blank"
            >
              <img
                src={discord}
                alt="discord"
                className="w-9 h-9 md:h-11 md:w-11 transition-transform duration-300 ease-in-out  hover:scale-[1.1]"
              />
            </a>
          </div> */}
          <a href={cv} download>
            <button className="inline-flex text-white border-2 py-2 px-6  focus:outline-none hover:bg-[#1b3c9c] hover:shadow-[0_0_40px_rgba(30, 64, 175, 0.7)] rounded-full text-lg">
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={pc}
            alt="Hero Image"
            className="h-[280px] sm:h-[500px] md:h-[400px] lg:h-[500px]  w-[500px]  object-fill rounded-lg hidden md:block"
          />
        </figure>
      </main>
    </div>
  );
}

export default Hero;
