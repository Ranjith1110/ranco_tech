'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const inputStyle =
    'border border-gray-300 rounded-2xl px-5 py-3 bg-white text-sm text-gray-800 ' +
    'shadow-sm placeholder-gray-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-[#0D5F53] focus:border-transparent transition duration-300 ease-in-out w-full';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("mobile", e.target.mobile.value);
    formData.append("service", e.target.service.value);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz0_QnjRGpJm3PtmZ2-nbp75H_Xqy_U-rss_7okFFiCmGEjLhAJpnu_c8-E-bTD49a2NQ/exec",
        {
          method: "POST",
          body: formData, // 🔥 IMPORTANT
        }
      );

      alert("Lead stored in Google Sheet ✅");
      e.target.reset();
    } catch (error) {
      alert("Submission failed ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#e8f0f2] to-[#f4f9f9] font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#0D5F53] text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#0D5F53]">Get In Touch</h3>
            <p className="text-[#4A6D6F] max-w-md">
              Reach out for collaborations, queries or just to say hi.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#0D5F53]" />
                <span>Trichy, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#0D5F53]" />
                <span>+91 93616 60714</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#0D5F53]" />
                <span>info@rancotechnology.com</span>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="text-gray-700 hover:text-[#0077B5]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="text-gray-700 hover:text-black" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="text-gray-700 hover:text-pink-500" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-6"
          >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <input name="name" type="text" placeholder="Your Name" className={inputStyle} required />
              <input name="email" type="email" placeholder="Your Email" className={inputStyle} required />
            </div>

            {/* Mobile & Service */}
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                name="mobile"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Mobile Number"
                className={inputStyle}
                required
              />

              <select name="service" className={inputStyle} required>
                <option value="">Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="SEO">SEO</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0D5F53] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a4c42] transition duration-300 w-full"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>

        {/* Google Map */}
        <motion.div className="mt-20 overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400"
            loading="lazy"
            className="w-full h-[400px] border-none rounded-3xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;