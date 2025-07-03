'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Linkedin, Github, Mail } from 'lucide-react';
import TechExpertise from './TechExpertise';

const teamMembers = [
  {
    name: 'Ranjith Kumar',
    role: 'Founder • Developer',
    image: '/team/ranjith-kumar.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ranjithkumar31/',
      github: '#',
      email: '#',
    },
    bio: 'Visionary leader and founder with a drive to lead innovative tech solutions and build great teams.',
  },
  // {
  //   name: 'Ranjith',
  //   role: 'CTO • Software Team Lead • Full Stack Developer',
  //   image: '/team/ranjith.png',
  //   socials: {
  //     linkedin: 'https://www.linkedin.com/in/ranjithnatarajan009/',
  //     github: '#',
  //     email: '#',
  //   },
  //   bio: 'Experienced full stack developer and tech lead, shaping the company’s technology strategy and architecture.',
  // },
  {
    name: 'Mohamed Abdul Aziz',
    role: 'Backend Developer • WordPress Developer',
    image: '/team/aziz.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/codepythonexpert/',
      github: '#',
      email: '#',
    },
    bio: 'Backend engineer and WordPress expert focused on performance and seamless functionality.',
  },
  {
    name: 'Tanbir Alam',
    role: 'Frontend Developer',
    image: '/team/tanbir.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanbiralam/',
      github: '#',
      email: '#',
    },
    bio: 'Frontend wizard who brings clean, interactive UIs to life using modern web technologies.',
  },
];


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};

const OurTeam = () => {
  return (
    <section className="bg-gradient-to-br from-[#f4f9f9] to-[#e8f0f2] py-24 px-6 font-['Montserrat']">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#0D5F53] mb-6"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[#4A6D6F] text-lg max-w-2xl mx-auto mb-16"
        >
          We’re a team of passionate developers and designers focused on crafting high-quality digital products.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {teamMembers.map((member, i) => (
            <TeamCard member={member} key={i} />
          ))}
        </motion.div>

        {/* TechExpertise section */}
        <TechExpertise withBackground={false} />
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={1000}
      className="h-full"
    >
      <motion.div
        variants={cardVariants}
        className="flex flex-col h-full bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl border border-white transition-all duration-300"
      >
        <div className="flex flex-col items-center flex-grow">
          <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full"
            />
          </div>

          <h3 className="text-xl font-semibold text-[#0D5F53] text-center">
            {member.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2 text-center">{member.role}</p>
          <p className="text-xs text-gray-600 text-center px-3 mt-2">{member.bio}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-gray-700 hover:text-[#0077B5] transition" />
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default OurTeam;
