import React, { useState } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import { easeInOut } from "framer-motion";
import { motion } from "framer-motion";


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

console.log(
  SERVICE_ID,
  TEMPLATE_ID,
  PUBLIC_KEY
);


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "message"];
    const newErrors = {};

    required.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Fill this field";
      }
    });

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setStatus("sending");

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        service: formData.service,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  } catch (err) {
    console.error("EmailJS Error:", err.text || err);
    setStatus("error");
  }
};


  return (
    <div id="contact" className="w-full min-h-screen relative text-white bg-black overflow-hidden py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <ParticlesBackground />

      {/* Left image */}
      <motion.div className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="Astra.png"
          alt="Contact"
          className="rounded-2xl w-72 md:w-140 shadow-lg object-cover  "
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Right form */}
      <motion.div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl border shadow-lg border-white/10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}

      >
        <h2 className="text-3xl font-bold mb-6">Let's Work To Gather</h2>
        <form
          className=" flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <label className="mb-1">Your Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <label className="mb-1">Your Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <label className="mb-1">Services <span className="text-red-500">*</span></label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500" : "border-gray-500"
              } text-white focus:outline-none focus:border-blue-500`}
          >
            <option value="" className="bg-black text-gray-400">
              Select Service
            </option>
            <option value="wordpress" className="bg-black text-white">
              Wordpress Website
            </option>
            <option value="coding" className="bg-black text-white">
              Custom Website
            </option>
          </select>
          {errors.service && <span className="text-red-500">{errors.service}</span>}
          <label className="mb-1">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
            rows={5}
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}

          <motion.button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="text-green-500 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-2">Failed to send message. Try again.</p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
