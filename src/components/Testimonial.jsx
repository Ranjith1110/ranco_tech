'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Stats from './Stats';
const testimonials = [
  {
    name: "Cyranodd",
    role: "Netherlands",
    feedback:
      "Lovely working with Ranjith. I sure do recommend! Very fast reply as well. Could wish for a better experience to be honest.",
    rating: 5,
  },
  {
    name: "Jachin Rupe",
    role: "United States",
    feedback:
      "The project was to write some CSS to style a web component. Ranjith communicated a lot about the progress of the project. He also responded to my feedback when I needed things changed.",
    rating: 5,
  },
  {
    name: "Anjalee Anuththa",
    role: "Sri Lanka",
    feedback:
      "Glad to work with him. Submitted the Project according to my expectations with required time. Recommend for others. You will never disappoint with his work.",
    rating: 5,
  },
  {
    name: "WF Media",
    role: "Germany",
    feedback:
      "Absolutely thrilled with the website redesign! The attention to detail and professionalism displayed throughout the project was top-notch. I truly appreciate the dedication and creativity that went into capturing the essence of my vision. Highly recommend his services to anyone looking for a seamless web development experience.",
    rating: 5,
  },
  {
    name: "Robert Nicholl",
    role: "United States",
    feedback:
      "Excellent collaborative style and easy communication. Very amenable and willing to drive the solution. Initiated design improvements and insisted on quality. RajithKumar got it done extremely fast and kept improving until we agreed on the final product. I will be using RajithKumar again. Thank you!",
    rating: 5,
  },
  {
    name: "willamkelbert",
    role: "Singapore",
    feedback:
      "I had a fantastic experience with my freelancer, who delivered a top-notch e-commerce solution. Communication was seamless, with prompt responses and crystal-clear explanations. Their expertise and intelligence truly shone through. I am so surprised, it was a great experience to me. 😁😁👍👍",
    rating: 5,
  },
  {
    name: "talenbekova07",
    role: "Kyrgyzstan",
    feedback:
      "Our project was a resounding success, thanks to the outstanding work delivered! Completed on time, with impressive creativity and new ideas. Highly recommend for fast, quality, and innovative solutions.",
    rating: 5,
  },
  {
    name: "adam_dreja",
    role: "Libya",
    feedback:
      "Third project with Ranjith — all 3 ended satisfactorily. Instant replies, unlimited editing, well-behaved and skilled. 100% would ask again.",
    rating: 5,
  },
  {
    name: "jillenrique",
    role: "United Kingdom",
    feedback:
      "Delivery was done well with no issues whatsoever! 100% Highly recommended.",
    rating: 5,
  },

  {
    name: "jacobluke0",
    role: "Ireland",
    feedback:
      "Utmost satisfaction! Profound expertise in design, coding, UX. Translated complex ideas smoothly.",
    rating: 5,
  },

  {
    name: "oscarhiemcke2",
    role: "Netherlands",
    feedback:
      "This guy is great. Very skilled and even exceeded my expectations with the quality of the work. Communication was also great, always responds fast. The work was often done in just a day. 10/10 would recommend!",
    rating: 5,
  },

];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-[#FBFBFD] to-[#EAF4F1] py-20 px-6 font-['Montserrat']"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-[#0D5F53] mt-8 mb-8" 
        >
          Client Testimonials
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#4A6D6F] text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Here’s what clients around the world have to say about working with us.
        </motion.p>

        {/* Masonry-style layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid bg-white text-[#1F2937] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-3 text-left">
                <h4 className="font-bold text-lg text-[#0D5F53]">{t.name}</h4>
                <p className="text-sm text-[#6B7280]">{t.role}</p>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    color="#FFD700"
                    fill={idx < Math.round(t.rating) ? "#FFD700" : "none"}
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-[#4B5563] whitespace-pre-line text-justify">
                {t.feedback}
              </p>

            </motion.div>
          ))}
        </div>
        {/*Stats component */}
        <Stats withBackground={false} />
      </div>
    </section>
  );
};

export default Testimonials;
