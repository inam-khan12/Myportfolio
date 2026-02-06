import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer at HCL Technologies",
    review:
      "Inam Niazi is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him.",
    image: "m1.PNG",
  },
  {
    name: "Sophie Williams",
    role: "UI/UX Designer at PixelWorks",
    review:
      "Working with Inam Niazi was an absolute pleasure. He brings design and code together like magic. Highly recommend him!",
    image: "w1.PNG",
  },
  {
    name: "Michael Brown",
    role: "Tech Manager at CodeEmpire",
    review:
      "From concept to execution, Inam Niazi handled everything flawlessly. His work ethic and innovation are unmatched.",
    image: "m2.PNG",
  },
  {
    name: "Olivia Davis",
    role: "CTO at Innovate Labs",
    review:
      "Inam Niazi transformed our outdated platform into something modern and powerful. His skills are world-class.",
    image: "w2.PNG",
  },
];


const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between items-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
            key={t.name + i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
            <p className="text-sm text-gray-200 mb-3">{t.role}</p>
            <p className="text-sm text-gray-100">{t.review}</p>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default Testimonial;
