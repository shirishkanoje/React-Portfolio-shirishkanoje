import React from "react";
import logo from "../assets/kevinRushLogo.png";

// logos
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Resume Link */}
        <a
        href="/ShirishKanojeResume (1).pdf"
        download="Shirish_Kanoje_Resume"
        className="border-2 border-white text-white text-sm px-1 py-0.3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
      >
        Resume
      </a>
        
        {/* Social Media Links */}
        <a
          href="https://www.linkedin.com/in/shirish-kanoje-5b17ba271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/shirishkanoje" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shirishkanoje?igsh=YjJlMGRlaXoxNm5y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
