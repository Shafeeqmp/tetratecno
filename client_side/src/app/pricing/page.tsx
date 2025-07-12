"use client";
import { motion } from "framer-motion";
import { FaCheck, FaGlobe, FaMobileAlt, FaShieldAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { FiSmartphone, FiGlobe, FiShield, FiMail, FiShare2 } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function PricingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Static Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[40px] left-[20%] top-[10%]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[40px] right-[10%] top-[30%]"></div>
        <div className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[40px] left-[15%] bottom-[20%]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-2 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700 mb-8"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
              PREMIUM WEBSITE PACKAGE
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Only ₹6499
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Get a professional website with all essential features included
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started <FaArrowRight />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        {isMounted && (
          <motion.section 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            style={{ perspective: 1000 }}
          >
            {[
              {
                icon: <FiGlobe className="text-blue-400 text-3xl" />,
                title: "5-6 Page Website",
                desc: "Professional multi-page website tailored to your needs",
                color: "from-blue-500/10 to-blue-600/10"
              },
              {
                icon: <FiSmartphone className="text-purple-400 text-3xl" />,
                title: "Mobile-Friendly Design",
                desc: "Perfect display across all devices and screen sizes",
                color: "from-purple-500/10 to-purple-600/10",
                duplicate: true // Note there's a duplicate in the original
              },
              {
                icon: <FaCheck className="text-green-400 text-3xl" />,
                title: "SEO Optimized",
                desc: "Rank better on Google and other search engines",
                color: "from-green-500/10 to-green-600/10"
              },
              {
                icon: <FiShare2 className="text-pink-400 text-3xl" />,
                title: "Social Media Integration",
                desc: "Connect your Facebook, Instagram, WhatsApp & more",
                color: "from-pink-500/10 to-pink-600/10"
              },
              {
                icon: <FiShield className="text-yellow-400 text-3xl" />,
                title: "Free SSL Certificate",
                desc: "Secure your site with HTTPS encryption",
                color: "from-yellow-500/10 to-yellow-600/10"
              },
              {
                icon: <FiGlobe className="text-indigo-400 text-3xl" />,
                title: "Free Domain & Hosting",
                desc: "No extra hidden charges for the first year",
                color: "from-indigo-500/10 to-indigo-600/10"
              },
              {
                icon: <FiMail className="text-teal-400 text-3xl" />,
                title: "1 Business Email",
                desc: "Build trust with professional email communications",
                color: "from-teal-500/10 to-teal-600/10"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.section>
        )}

        {/* Interactive Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today to discuss your website requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919895089017"
              className="bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/50 rounded-xl p-6 text-center transition-all"
            >
              <div className="text-2xl mb-2">📱</div>
              <div className="font-medium">+91 9895089017</div>
              <div className="text-sm text-gray-400 mt-1">Tap to call</div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919061316120"
              className="bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/50 rounded-xl p-6 text-center transition-all"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium">+91 9061316120</div>
              <div className="text-sm text-gray-400 mt-1">Tap to call</div>
            </motion.a>
          </div>
          
          <div className="mt-10 text-center text-gray-400">
            <p>TETRA TECNO SOLUTIONS</p>
            <p className="text-sm mt-2">Professional website solutions</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}