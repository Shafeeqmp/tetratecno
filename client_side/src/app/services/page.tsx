"use client";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud, FaLock, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-6 h-6" />,
    title: "Web Development",
    desc: "Build fast, scalable, and responsive websites using modern tech stacks like React, Next.js, and Tailwind.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaMobileAlt className="w-6 h-6" />,
    title: "Mobile App Development",
    desc: "Create smooth and reliable cross-platform mobile applications using React Native and Flutter.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FaPaintBrush className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Design intuitive user interfaces and experiences that enhance user engagement and satisfaction.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <FaCloud className="w-6 h-6" />,
    title: "Cloud Services",
    desc: "Deploy and manage apps on scalable cloud infrastructure using AWS, GCP, or Azure.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <FaLock className="w-6 h-6" />,
    title: "Cybersecurity",
    desc: "Implement modern security protocols to keep your applications and data safe.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "SEO & Marketing",
    desc: "Improve search rankings and drive traffic using analytics, SEO, and online marketing strategies.",
    color: "from-yellow-500 to-yellow-600"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 sm:py-28 px-4 sm:px-6">
      {/* Header Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="text-center mb-16 sm:mb-24"
      >
        <motion.div variants={fadeIn} className="mb-3">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
            What We Offer
          </span>
        </motion.div>
        <motion.h1 
          variants={fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl"
        >
          We provide cutting-edge digital solutions tailored to your business goals.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            transition={{ delay: 0.1 * idx }}
          >
            <Card
              className="group bg-white/5 backdrop-blur-lg border border-gray-700/50 hover:border-white/20 transition-all duration-300 h-full flex flex-col"
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{service.desc}</p>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-sm font-medium text-blue-300 cursor-pointer"
              >
                Learn more
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl mx-auto mt-24 text-center"
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 sm:p-10 rounded-2xl border border-gray-700/50">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to transform your business?</h3>
          <p className="text-gray-300 mb-6">Let's discuss how we can help you achieve your goals.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Get a Free Consultation
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}