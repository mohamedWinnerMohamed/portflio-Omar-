import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My projects", link: "#projects" },
  ];

  return (
    <header
      className={`fixed top-3 left-3 right-3 z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2430a4]/70 backdrop-blur-md  shadow-md  rounded-3xl "
          : "bg-transparent"
      }`}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container min-w-full flex items-center justify-between py-5 px-8 md:px-18 sm:px-10 text-white">
        {/* LOGO */}
        <a href="#home" className="text-4xl font-bold italic">
          Portfolio
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#2430a4] rounded-full text-lg"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#2430a4] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#2430a4] rounded-full text-lg"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
