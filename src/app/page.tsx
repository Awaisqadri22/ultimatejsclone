"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav
        className={`fixed top-0 left-0 w-full p-6 transition-colors duration-300 ${
          isScrolled
            ? "bg-blue-600 border-b-4 border-yellow-300"
            : "bg-gray-800"
        } text-white`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold">Awais Iqbal Qadri</span>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="hover:text-orange-300 transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-orange-300 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#resume"
                className="hover:text-orange-300 transition duration-300"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gray-800 text-white">
        {" "}
        {/* Changed background color to bg-blue-600 */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 py-10 text-xl">
            I'm AWAIS IQBAL QADRI from Stockholm Sweden, a passionate developer.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="/resume.pdf"
              download
              className="bg-orange-500 text-white px-12 py-6 text-2xl font-semibold transition-transform duration-300 transform hover:scale-110"
            >
              Download Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-orange-500 text-white px-12 py-6 text-2xl font-semibold transition-transform duration-300 transform hover:scale-110"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a web developer with a passion for creating interactive and
            dynamic web applications. I have experience in various technologies
            and love to learn new skills.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-200" id="projects">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-4 text-lg">
            Here are some of the projects I've worked on:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Project Title 1</h3>
              <p className="mt-2">
                A brief description of the project goes here.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Project Title 2</h3>
              <p className="mt-2">
                A brief description of the project goes here.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Project Title 3</h3>
              <p className="mt-2">
                A brief description of the project goes here.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-4 text-lg">
            Feel free to reach out for collaborations or just to say hi!
          </p>
          <form className="mt-8">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-800 text-white text-center" id="footer">
        <p>
          &copy; {new Date().getFullYear()} AWAIS IQBAL QADRI. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl hover:text-blue-500 transition duration-300"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl hover:text-blue-500 transition duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl hover:text-blue-500 transition duration-300"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
