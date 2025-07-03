import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Stats from "../components/Stats"; 
import TechExpertise from "../components/TechExpertise";
import  Features  from "../components/Features"; 

const AboutPage = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#F3F9F4] to-[#EAF4F1] text-[#0D5F53] font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <motion.img
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 1 }}
            src="/about.gif"
            alt="About Us"
            className="w-full max-w-[500px] md:max-w-[600px] h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-[#0D5F53] leading-tight"
          >
            About RanCoTech
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#425E57] mb-4 text-base sm:text-lg leading-relaxed"
          >
            RanCoTech is a leading Software Development company based in India that provides
            enterprise application solutions, web application, IT consulting & mobile app
            development services to clients across the globe. We offer an extensive range of
            innovative software development services to our customers using Open Source,
            Native & hybrid mobile applications, and front-end technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#425E57] mb-4 text-base sm:text-lg leading-relaxed"
          >
            We ensure your success by delivering business-specific solutions as every organization
            has unique requirements. Our strength lies in the blend of highly technical resources
            and focused operation with a team work environment. We believe in high quality of work
            ethics and on-schedule delivery with cost-effective solutions that lead you to the edge
            of success.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="mt-16 max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0D5F53]/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[#FF6F00] text-2xl">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#138074]">Our Mission</h3>
            </div>
            <p className="text-[#425E57] text-sm">
              To empower businesses by bridging the gap between ideas and technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0D5F53]/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[#FF6F00] text-2xl">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#138074]">Our Vision</h3>
            </div>
            <p className="text-[#425E57] text-sm">
              To be a global leader in transformative technology services that drive real impact.
            </p>
          </motion.div>
        </div>

      </div>

      <Features/>
      <TechExpertise withBackground={false}/>
      <Stats withBackground={false}/>

    </section>
  );
};

export default AboutPage;
