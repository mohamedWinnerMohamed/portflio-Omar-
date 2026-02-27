import React from "react";
import tailwind from "/tailwind.png";
import react from "/react.png";
import javascript from "/javascript.png";
import html from "/html.png";
import css from "/css.png";
import typescript from "/typescript.png";
import mongoDB from "/mongo-db.png";
import nodejs from "/nodejs.png";
import git from "/git.png";
import nextjs from "/nextjs.png";
import dots from "/dots.svg";

const skillsData = [
  {
    id: 1,
    image: javascript,
    title: "JavaScript",
    description:
      "It’s the brain of modern websites, turning static pages into fast, dynamic web applications",
  },
  {
    id: 2,
    image: react,
    title: "React js",
    description:
      "React makes front-end development modular, efficient, and scalable",
  },
  {
    id: 3,
    image: typescript,
    title: "TypeScript",
    description:
      "TypeScript makes JavaScript safer, smarter, and easier to maintain",
  },
  {
    id: 4,
    image: tailwind,
    title: "Tailwind CSS",
    description: "Tailwind CSS makes styling quick, consistent, and flexible",
  },
  {
    id: 5,
    image: html,
    title: "HTML",
    description:
      "HTML is the skeleton of the web, giving every page its basic layout and meaning",
  },
  {
    id: 6,
    image: css,
    title: "CSS",
    description: "CSS adds beauty and visual structure to the web",
  },
  {
    id: 7,
    image: mongoDB,
    title: "mongoDB",
    description:
      "MongoDB makes managing modern, dynamic data simple and efficient",
  },
  {
    id: 8,
    image: git,
    title: "Git",
    description:
      "Git keeps your projects organized, safe, and easy to collaborate on",
  },
  {
    id: 9,
    image: nodejs,
    title: "Node js",
    description:
      "Node.js brings JavaScript to the backend, enabling full-stack development with one language",
  },
  {
    id: 10,
    image: nextjs,
    title: "Next js",
    description:
      "Next.js is a React framework that makes it easy to build fast, modern web applications using static and server-side rendering",
  },
  {
    id: 11,
    image: dots,
    title: "And More",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start text-white px-36 py-20  pt-40 "
    >
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-10 text-center space-y-6 sm:space-y-10"
      >
        <div className="absolute z-0 w-72 h-28 sm:w-80 sm:h-20 top-14 bg-[#5e91f2]  rounded-full blur-3xl opacity-50  left-1/2 transform -translate-x-1/2 "></div>
        <header>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My Experiences <br /> and{" "}
            <span className="text-[#1564bf]">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Combining knowledge with practice to build efficient, scalable
            solutions,
            <br /> Always learning, always improving
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-32"
        >
          {skillsData.map((skill) => (
            <article
              key={skill.id}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-[#0f3d91] transition-all duration-300 items-center flex flex-col justify-center"
            >
              <figure className="flex justify-center  mb-4">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </figure>
              <header>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {skill.title}
                </h3>
              </header>
              <p className="text-gray-400 text-sm sm:text-base">
                {skill.description}
              </p>
            </article>
          ))}
        </section>
      </div>
      {/* <img
        src={imghero}
        alt="Right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      /> */}
    </section>
  );
}

export default Skills;
