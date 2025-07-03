'use client';
import React from 'react';
import { motion } from 'framer-motion';

import {
  FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaJs,
  FaBootstrap, FaNodeJs, FaCloud, FaWindows, FaSwift,
} from 'react-icons/fa';

import {
  SiTailwindcss, SiMysql, SiDjango, SiFlutter, SiDart, SiPython,
  SiTensorflow, SiKubernetes, SiGooglecloud, SiDocker, SiNginx,
  SiMongodb, SiPostgresql, SiFirebase, SiAngular,
} from 'react-icons/si';

const categorizedTech = [
  {
    title: 'Web Development',
    items: [
      { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
      // { name: 'Angular', icon: <SiAngular className="text-red-600" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-800" /> },
      { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-700" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Django', icon: <SiDjango className="text-green-800" /> },
    ],
  },
  // {
  //   title: 'Cloud Solutions',
  //   items: [
  //     { name: 'AWS', icon: <FaCloud className="text-orange-400" /> },
  //     { name: 'Azure', icon: <FaWindows className="text-blue-700" /> },
  //     { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-500" /> },
  //   ],
  // },
  {
    title: 'Mobile Apps',
    items: [
      { name: 'Flutter', icon: <SiFlutter className="text-sky-400" /> },
      { name: 'Dart', icon: <SiDart className="text-blue-500" /> },
      { name: 'React Native', icon: <FaReact className="text-cyan-600" /> },
      // { name: 'Swift', icon: <FaSwift className="text-orange-600" /> },
    ],
  },
  // {
  //   title: 'DevOps & Automation',
  //   items: [
  //     { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
  //     { name: 'Kubernetes', icon: <SiKubernetes className="text-indigo-500" /> },
  //     { name: 'CI/CD', icon: <SiNginx className="text-green-700" /> },
  //   ],
  // },
  // {
  //   title: 'AI & ML',
  //   items: [
  //     { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
  //     { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-600" /> },
  //     { name: 'NLP Models', icon: <SiPython className="text-emerald-700" /> },
  //   ],
  // },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-800" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      // { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },  
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },

    ],
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const TechExpertise = ({ withBackground = true }) => {
  return (
    <section className={`relative z-10 ${withBackground ? 'bg-gradient-to-br from-[#F3F9F4] to-[#EAF4F1]' : ''} py-26 px-6 font-['Montserrat'] overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#0D5F53] to-[#14B8A6] bg-clip-text text-transparent"
        >
          Technological Expertise
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categorizedTech.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 transition duration-300 hover:shadow-2xl"
            >
              <h3 className="text-lg font-bold text-[#0D5F53] mb-4 border-b border-dashed border-[#14B8A6] pb-2">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-[#ecfdf5] px-3 py-2 rounded-xl shadow-sm hover:shadow-md transition text-sm font-medium text-[#0D5F53]"
                  >
                    <div className="text-xl">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#CFF7EB] rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute -bottom-20 right-0 w-56 h-56 bg-[#E0FFFA] rounded-full blur-3xl opacity-40 animate-pulse" />
    </section>
  );
};

export default TechExpertise;
