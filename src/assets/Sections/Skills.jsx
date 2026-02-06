import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const [dir, setDir] = useState(-1);

  const trackRef = useRef(null);
  const x = useMotionValue(0);

  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  ];

  const repeated = [...skills, ...skills];

  // 🔁 Auto scrolling animation
  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  // 🖱 Scroll direction control
  useEffect(() => {
    const onWheel = (e) => {
      setDir(e.deltaY > 0 ? -1 : 1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      id="skills"
      className="w-full py-10 flex flex-col items-center justify-center relative text-white overflow-hidden bg-black"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-3 mb-10 text-white/80"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-10 text-6xl px-10 text-[#1cd8d2]"
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[120px]"
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm text-white/80">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
