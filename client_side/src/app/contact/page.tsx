"use client";
import { motion } from "framer-motion";
import { TextInput, Textarea, Button } from "flowbite-react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 py-16 sm:py-28">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 px-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
            Get In Touch
          </span>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
          Let's Talk
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
        </p>
      </motion.section>

      {/* Contact Form + Info Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4">
        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-gray-700/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 hover:shadow-blue-500/10 transition-shadow"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Your Name
              </label>
              <TextInput 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                required 
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email Address
              </label>
              <TextInput 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                required 
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={6}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              <span className="flex items-center justify-center gap-2">
                Send Message <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.form>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-purple-500/10 transition-shadow"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            <span className="text-white">📬</span> Contact Info
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-300 mt-1">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Our Office</h3>
                <p className="text-gray-300">
                  TetraTecnoSolutions Pvt Ltd<br />
                  123 Innovation Street<br />
                  Kochi, Kerala, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-300 mt-1">
                <FaPhone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Phone</h3>
                <p className="text-gray-300">+91 98950 089017</p>
                <p className="text-gray-300">+91 90613 16120</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-300 mt-1">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Email</h3>
                <p className="text-gray-300">contact@tetratecno.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-300 mt-1">
                <FaClock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Working Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}