import { motion } from 'framer-motion';

const clientLogos = [
  '/clients/client1.png',
  '/clients/client2.png',
  '/clients/client3.png',
  '/clients/client4.png',
  '/clients/client5.png',
  '/clients/client6.png',
  '/clients/client7.png',
  '/clients/client8.png',
];

const OurClients = () => {
  return (
    <section className="bg-white py-20 px-5 font-['Montserrat']" id="our-clients">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0D5F53] mb-4"
        >
          Our Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#4A6D6F] text-base md:text-lg mb-10"
        >
          Trusted by forward-thinking companies:
        </motion.p>

        {/* Horizontal Scrolling Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden mb-12"
        >
          <div className="flex gap-10 items-center animate-marquee">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}

            {/* Duplicate the logos to create infinite scrolling effect */}
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index + 'duplicate'}
                className="flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 md:h-24 w-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="italic text-lg text-gray-700 max-w-3xl mx-auto"
        >
          "Ranco Tech helped us scale our platform seamlessly. Their team is professional, agile, and solution-oriented."
          <span className="block mt-2 text-sm font-semibold text-[#0D5F53]">– Happy Client</span>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default OurClients;
