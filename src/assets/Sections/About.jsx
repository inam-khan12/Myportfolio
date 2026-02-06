import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Experience", value: "1+ Year" },
  { label: "Specialty", value: "Web Developer" },
  { label: "Focus", value: "Performance & UI" },
];

const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        {/* Top Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          {/* Image Card */}
          <div className="shrink-0">
            <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302663]/20">
              <img
                src="pic.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] to-[#00bfff]">
              Inam Ul Hassan Khan
            </h2>

            <p className="mt-2 text-lg text-white/80 font-medium">
              Full Stack Developer
            </p>

            <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
              I build scalable, modern applications with a strong focus on clean
              architecture, delightful user experiences, and high performance.
              I enjoy solving real-world problems through elegant code, intuitive
              interfaces, and efficient systems. My goal is to create products
              that are fast, reliable, and enjoyable to use.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md text-center"
                >
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="px-5 py-3 rounded-lg bg-white text-black font-semibold shadow hover:bg-gray-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl"
        >
          <h3 className="text-2xl font-bold mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            I’m a Software Developer, Content Creator, and Web Developer passionate
            about building fast, resilient applications and sharing coding insights
            on Instagram and YouTube.
          </p>
          <p className="mt-3 text-gray-400">
            I love turning ideas into scalable, user-friendly products that make
            an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
