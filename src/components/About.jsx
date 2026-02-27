import React from "react";
import img_about from "/img_about.png";
import img_about1 from "/img_about1.png";
import linux from "/linux.png";

function About() {
  return (
    <section
      id="about"
      className="h-[50rem] overflow-hidden flex items-center justify-center text-white px-4 sm:px-6  pt-40"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8  sm:gap-20 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="
          h-[280px]
          w-[500px]
          bg-gradient-to-l hidden lg:block from-[#1e3a8a] via-[#38bdf8] to-[#2563eb]  absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full "
          ></div>
          <img
            src={img_about1}
            alt="about picture 1"
            className="absolute -top-2 left-5  sm:left-10 transform -translate-y-20 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
          <img
            src={linux}
            alt="about picture 2"
            className="relative  hidden lg:block z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg "
          />
          <img
            src={img_about}
            alt="about picture"
            className="absolute bottom-0 right-5 sm:right-10 transform scale-x-[-1] lg:scale-x-[1] translate-y-8 tr z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#5e91f2] rounded-full blur-3xl opacity-50 -top-5 left-28 sm:left-45 md:left-70 lg:left-10"></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Passionate Linux user and front-end developer focused on writing
            clean, efficient code. Seeking a full-time role where I can build
            high-quality interfaces, grow my skills, and contribute to a
            professional development team.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
