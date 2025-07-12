"use client";
import { motion } from "framer-motion";
import { FaCheck, FaGlobe, FaMobileAlt, FaShieldAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">TETRA TECNO</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Locations</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium">
              PREMIUM WEBSITE DESIGN
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-2"
          >
            Only ₹6499
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Get your professional website with all essential features included
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Everything Included
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <FaGlobe className="text-blue-500 text-xl" />, text: "UP TO 6 PAGE WEBSITE" },
              { icon: <FaCheck className="text-green-500 text-xl" />, text: "SEO OPTIMIZED – RANK BETTER ON GOOGLE" },
              { icon: <FaMobileAlt className="text-purple-500 text-xl" />, text: "MOBILE-FRIENDLY DESIGN – PERFECT ACROSS ALL DEVICES" },
              { icon: <FaFacebook className="text-blue-600 text-xl" />, text: "SOCIAL MEDIA INTEGRATION – CONNECT YOUR FACEBOOK, INSTAGRAM, WHATSAPP & MORE" },
              { icon: <FaShieldAlt className="text-yellow-500 text-xl" />, text: "FREE SSL CERTIFICATE – SECURE YOUR SITE" },
              { icon: <FaCheck className="text-green-500 text-xl" />, text: "FREE DOMAIN & HOSTING – NO EXTRA HIDDEN CHARGES" },
              { icon: <FaEnvelope className="text-red-500 text-xl" />, text: "1 BUSINESS EMAIL – BUILD TRUST WITH CUSTOMERS" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="mt-1">{feature.icon}</div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-100">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg mb-8"
          >
            Contact us today and we'll have your website live within 7 days!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all">
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <div className="space-y-2 mb-4">
              <a href="tel:+919895089017" className="block hover:text-blue-300 transition-colors">+91 9895089017</a>
              <a href="tel:+919061316120" className="block hover:text-blue-300 transition-colors">+91 9061316120</a>
            </div>
            <div className="text-gray-300 mb-6">TETRA TECNO SOLUTIONS</div>
            
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} TETRA TECNO SOLUTIONS. All rights reserved.
          </div> */}
        </div>
      </footer>
    </div>
  );
}