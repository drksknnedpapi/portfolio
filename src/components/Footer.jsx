"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { kobby } from "../assets";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t border-gray-800 bg-[#0a0a16]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-yellow-400">
                  <img
                    src={kobby}
                    alt="Kobby"
                    className="object-cover object-top w-full h-full center"
                  />
                </div>
                <a href="#" className="text-xl font-semibold">
                  <p className="text-white text-[18px] font-bold cursor-pointer flex">
                    <span className="text-[#F2EA02]">Kobby&nbsp;</span>
                    <span className="sm:block hidden"> | Developer</span>
                  </p>
                </a>
              </div>
              <p className="text-gray-400 max-w-xs">
                Creating responsive and engaging web experiences with modern
                technologies. If you find my work attractive, Lets work together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors w-fit"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="text-gray-400 hover:text-yellow-400 transition-colors w-fit"
                >
                  Work
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors w-fit"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/drksknnedpapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/ebenezer-kobby-tio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="ebenezertio0706@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>

                <a
                  href="https://www.instagram.com/kobbythedev"
                  target="_blank"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>

                <a
                  href="https://www.x.com/drksknnedpapi"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>

              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Kobby. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
