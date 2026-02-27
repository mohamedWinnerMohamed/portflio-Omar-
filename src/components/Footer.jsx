import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#101c3f]  text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* <h1 className="text-3xl font-bold italic mb-4 md-4 md:mb-0">
          Portfolio
        </h1> */}
        <p className="text-sm text-center">
          {" "}
          © 2026 All right reserved
          <br />
          Made With Love By Mohamed Omar
        </p>
      </div>
      {/* from-[#1e3a8a] via-[#38bdf8] to-[#2563eb]  */}
    </footer>
  );
}

export default Footer