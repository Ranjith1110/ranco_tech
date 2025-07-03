import { FaSmile, FaBusinessTime, FaUsers, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { icon: <FaSmile />, number: 50, label: "Happy Customers" },
  { icon: <FaBusinessTime />, number: 10, label: "Successful Businesses" },
  { icon: <FaUsers />, number: 65, label: "Loyal Clients" },
  { icon: <FaStar />, number: 5, label: "Star Reviews" },
];

const Stats = ({ withBackground = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className={`py-20 text-[#0D5F53] font-[Montserrat] ${withBackground ? 'bg-[#FBFBFD]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#0D5F53]/10 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="text-4xl mb-4 text-[#FF6F00]">{item.icon}</div>
              <h3 className="text-3xl font-semibold text-[#0D5F53]">
                <CountUp
                  start={0}
                  end={inView ? item.number : 0}
                  duration={2}
                  redraw={true}
                />
              </h3>
              <p className="text-sm mt-2 uppercase">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
