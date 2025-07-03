'use client';
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: '⚡', title: 'High-Speed', desc: 'Blazing fast performance.' },
  { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade protection.' },
  { icon: '🔗', title: 'Integration', desc: 'Connect easily with tools.' },
  { icon: '☁', title: 'Cloud First', desc: 'Always-on scalability.' },
  { icon: '📱', title: 'Mobile Ready', desc: 'Optimized everywhere.' },
  { icon: '💸', title: 'Cost-Effective', desc: 'Affordable enterprise features.' },
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 14, stiffness: 80 },
  },
};

const Features = () => {
  return (
    <motion.section
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#f3f9f4] to-[#eaf4f1] font-['Montserrat'] overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="text-center mb-12 sm:mb-14 md:mb-16 z-10 relative px-4"
        variants={cardVariants}
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-[#0D5F53] bg-gradient-to-r from-[#0D5F53] to-[#14B8A6] bg-clip-text text-transparent leading-snug">
          Features
        </h2>
        <p className="text-[#4A6D6F] mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-relaxed">
          Smooth. Stylish. Smart. Everything your product needs — aligned on a beautiful path.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-4 relative z-10"
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-16 sm:gap-y-20 lg:gap-y-0 justify-items-center">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative flex flex-col items-center text-center ${
                idx % 2 === 0 ? 'translate-y-[-1rem] sm:translate-y-[-2rem]' : 'translate-y-[1rem] sm:translate-y-[2rem]'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="text-3xl sm:text-4xl w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full border border-[#0D5F53]/20 flex items-center justify-center text-[#0D5F53] mb-2 sm:mb-3 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {f.icon}
              </motion.div>
              <h3 className="font-semibold sm:font-bold text-[#0D5F53] text-sm sm:text-base">{f.title}</h3>
              <p className="text-[#4A6D6F] text-xs sm:text-sm max-w-[120px] sm:max-w-[140px]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Features;
