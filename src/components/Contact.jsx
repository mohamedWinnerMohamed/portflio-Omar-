import React from 'react'
import contact from "/contact.png";

function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden flex items-center justify-center p-6 mt-10 sm:mt-0 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col  md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative">
          <img
            src={contact}
            alt="Contact illustration"
            className="
            hidden md:block h-[400px] md:h-[335px]
            w-[330px]
            top-20
            object-cover rounded-t-lg md:rounded-r-lg relative"
          />
          <div
            className="absolute z-0 
          w-40 h-40 md:h-60 md:w-60  bg-[#5e91f2] rounded-full blur-3xl opacity-50
          top-0 md:top-32 left-1/3 md:left-10  "
          ></div>
        </aside>
        {/* Contact Form */}
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Us
            </h2>
          </header>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#2430a4]  rounded-full text-lg">
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}

export default Contact