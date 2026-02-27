import React from "react";
import sanhour from "/sanhour.png";
import ecommerce from "/ecommerce.png";
import solarPanelInstallers from "/solarPanelInstallers.png";
import ageCalculator from "/ageCalculator.png";


function Projects() {
  const listProjects = [
    {
      id: 1,
      image: sanhour,
      title: "Sanhour village",
      des: "Village services guide and all related news and announcements",
      link: "https://sanhour.elbahar.top/",
    },
    {
      id: 2,
      image: ecommerce,
      title: "E-commerce Website",
      des: "Online clothing Stor",
      link: "https://e-commerc-2.netlify.app/",
    },
  ];
  return (
    <main className="pt-40 px-18" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <div className="absolute z-0 w-72 h-28 sm:w-80 sm:h-20 top-10 bg-[#5e91f2]  rounded-full blur-3xl opacity-50  left-1/2 transform -translate-x-1/2 "></div>
        <header className="text-center mb-24">
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-[#1564bf]">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            A selection of projects that reflect my technical skills and passion
            for building clean, functional web experiences
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project) => (
          <article
            key={project.id}
            className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group"
          >
            <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#5e91f2] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
            <div className="relative z-10">
              <figure className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute h-[202px] inset-0 flex items-center justify-center  bg-[rgba(100,116,211,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white  hover:bg-[#2879d5]">
                    Live Preview
                  </button>
                </a>
              </figure>
              <div className="px-6 py-4">
                <header>
                  <h3 className="text-white font-bold text-xl nb-2">
                    {project.title}
                  </h3>
                </header>
                <p className="text-gray-200 text-base">{project.des}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
