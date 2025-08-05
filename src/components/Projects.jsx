import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';

const projects = [
  {
    title: '18 Siddhars Research',
    description:
      'Exploring the ancient wisdom and medicinal knowledge of the 18 Siddhars for modern health applications.',
    image: 'projects/project1.png',
    link: 'https://18siddharsresearch.com/',
  },
  {
    title: 'Sol Sprint',
    description:
      'A clean and modern website designed for a blockchain-based sprint event. It showcases upcoming events, tracks participation, and provides an engaging interface for users to explore blockchain sprint challenges and solutions.',
    image: 'projects/solsprint.xyz_.png',
    link: 'https://solsprint.xyz/',
  },
  {
    title: 'Pech Weg',
    description:
      'AI-powered speech therapy solution helping children with developmental speech challenges.',
    image: 'projects/project3.png',
    link: 'https://pech-weg.nl/',
  },
  {
    title: 'School of Hepatology',
    description:
      'Advanced education and research in liver diseases and treatment through an interdisciplinary platform.',
    image: 'projects/project4.png',
    link: 'https://schoolofhepatology.com/',
  },
  {
    title: 'Bharath First School',
    description:
      'Empowering rural education with smart learning tools and digital classrooms.',
    image: 'projects/project5.png',
    link: 'https://bharathfirstschool.com/',
  },
];

const Projects = () => {
  return (
    <section className="bg-[#f4f9f9] py-24 font-['Montserrat'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-[#0D5F53] text-center mb-16 sm:mb-24"
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((project, index) => {
            const [isFlipped, setIsFlipped] = useState(false);
            const isEven = index % 2 === 0;
            const colSpan =
              index % 3 === 0
                ? 'lg:col-span-7 sm:col-span-1'
                : 'lg:col-span-5 sm:col-span-1';

            const direction = isEven ? -100 : 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group ${colSpan} min-h-[320px] perspective`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div
                  className={`relative w-full h-full duration-700 [transform-style:preserve-3d] rounded-3xl shadow-lg hover:shadow-2xl transition-transform ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  } group-hover:[transform:rotateY(180deg)]`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] z-10 rounded-3xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

                    <div className="absolute bottom-0 p-6 text-white z-10">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-snug">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] z-20 bg-[#0D5F53] text-white flex items-center justify-center rounded-3xl">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm shadow hover:bg-gray-200 transition"
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/*Stats Section*/}
        <div className="mt-24 ">
          <Stats withBackground={false} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
