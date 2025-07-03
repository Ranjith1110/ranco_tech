'use client';

import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const inputStyle =
    'border border-gray-300 rounded-2xl px-5 py-3 bg-white text-sm text-gray-800 ' +
    'shadow-sm placeholder-gray-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-[#0D5F53] focus:border-transparent transition duration-300 ease-in-out';

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#e8f0f2] to-[#f4f9f9] font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
              Reach out for collaborations, queries or just to say hi. We’d love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#0D5F53]" />
                <span>Siruganpur, Trichy, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#0D5F53]" />
                <span>+91 8778597451</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#0D5F53]" />
                <span>info@rancotechnology.com</span>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-700 hover:text-[#0077B5] transition" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="text-gray-700 hover:text-black transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-700 hover:text-pink-500 transition" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className={inputStyle} required />
              <input type="email" placeholder="Your Email" className={inputStyle} required />
            </div>
            <input type="text" placeholder="Project" className={`${inputStyle} w-full`} required />
            <textarea
              rows="4"
              placeholder="Message"
              className={`${inputStyle} w-full resize-none rounded-2xl`}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#0D5F53] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a4c42] transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-hidden rounded-3xl shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6931191433553!2d78.92450251144998!3d11.160013351570682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1ddfdc74838d%3A0xf31882d27f724010!2sSiruganpur%20Postoffice!5e0!3m2!1sen!2sin!4v1712646149015!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] border-none rounded-3xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
