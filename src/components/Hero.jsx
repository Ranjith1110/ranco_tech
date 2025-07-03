import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    gsap.to(".bg-gradient", {
      duration: 3,
      backgroundPosition: "100% 100%",
      ease: "power4.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-r from-[#EAF4F1] to-[#FBFBFD] flex items-center justify-center px-4 sm:px-6 md:px-10 pt-20 sm:pt-0 font-[Montserrat] bg-gradient"
      style={{ backgroundSize: "200% 200%" }}
      id="home"
    >
      {/* Main Container */}
      <div className="relative z-[2] max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left: Text Section */}
        <div className="w-full text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D5F53] leading-tight"
          >
            Powering Innovation with <br className="hidden sm:inline-block" />
            <span className="text-[#138074]">Scalable Tech Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-4 max-w-xl text-[#425E57] text-base sm:text-lg mx-auto lg:mx-0"
          >
            At Ranco Tech, we craft high-performance digital solutions that accelerate business growth and transform ideas into powerful products.
          </motion.p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center sm:justify-start gap-6 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <RouterLink
                to="/contact"
                className="bg-[#0D5F53] hover:bg-[#138074] text-white py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold shadow-md transition duration-300 ease-in-out inline-block text-center"
              >
                Get a Free Consultation
              </RouterLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <RouterLink
                to="/ServicesPage"
                className="bg-transparent border-2 border-[#0D5F53] text-[#0D5F53] py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base font-semibold shadow-md transition duration-300 ease-in-out inline-block text-center"
              >
                Explore Our Services
              </RouterLink>
            </motion.div>
          </div>

        </div>

        {/* Right: Image */}
        <div className="w-full max-w-[400px] sm:max-w-[500px] h-auto flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            src="/website.gif"
            alt="Website Animation"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
