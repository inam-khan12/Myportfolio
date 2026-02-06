import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Bin Buzz ",
      desc: "Smart waste managment system using React and Node.js. ",
      img: "Bin Bzz.png",
      link: "#",
    },
    
    {
      title: "C++ Syntax Validator",
      desc: "Web based tool to validate C++ syntax with detailed error output.",
      img: "C-Syntax.jpg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Tailwind and Framer Motion.",
      img: "portfolio.png",
      link: "#",
    },
    {
      title: "AI Language Translator",
      desc: "Python based AI translator for multiple languages.",
      img: "translator.png",
      link: "#",
    },
    {
      title: "Secure File Storage System",
      desc: "A secure web app with encryption, file sharing and admin dashboard.",
      img: "secure file.png",
      link: "#",
    },
    
    {
      title: "Business Website",
      desc: "Modern responsive website for a software house.",
      img: "bssines.jpg",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 bg-black text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <p className="text-center text-white/80 mb-12">
        Some of my recent work & personal projects
      </p>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#1cd8d2]/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-white/70 mb-4">
                {project.desc}
              </p>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 px-5 py-2 text-lg font-medium
                           rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]
                         text-black hover:scale-105 transition-transform"
              >
                <span>View Project</span>
                <FaArrowRight />
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
