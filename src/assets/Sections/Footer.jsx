import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { icon: FaTwitter, label: "X", href: "https://x.com" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/inam-niazii-954235365/",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/inam-khan12" },
];

const glowVariant = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]" />

      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1
          className="font-semibold text-white select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            padding: "3vw",
            whiteSpace: "normal",
            textShadow: "0 2px 8px rgba(0,0,0,0.45)",
          }}
        >
          Inam Ul Hassan Khan
        </h1>

        <div className="h-[3px] w-24 md:w-32 rounded bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />

        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariant}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-white"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-300 italic max-w-xl ">
          "Success is when pereparation meets opportunity"
        </p>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Inam Niazii
          </span>
          . All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
