"use client";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 py-16 sm:py-28">
      {/* Header */}
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
        <motion.div variants={fadeIn} className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
            Who We Are
          </span>
        </motion.div>
        <motion.h1 
          variants={fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent"
        >
          About TetraTecnoSolutions
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
        >
          We are passionate about building smart, scalable, and secure software
          solutions to power your business growth.
        </motion.p>
      </motion.section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Card 
            className="bg-white/5 backdrop-blur-lg border border-gray-700/50 hover:border-blue-400/30 transition-all hover:scale-[1.02] cursor-pointer shadow-2xl hover:shadow-blue-500/10 h-full"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To deliver high-quality software products that bring real value to our customers 
              through innovative solutions and exceptional service.
            </p>
          </Card>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Card 
            className="bg-white/5 backdrop-blur-lg border border-gray-700/50 hover:border-purple-400/30 transition-all hover:scale-[1.02] cursor-pointer shadow-2xl hover:shadow-purple-500/10 h-full"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be a globally recognized tech company driving innovation through simplicity 
              and cutting-edge technology solutions.
            </p>
          </Card>
        </motion.div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <Card 
            className="bg-white/5 backdrop-blur-lg border border-gray-700/50 hover:border-sky-400/30 transition-all hover:scale-[1.02] cursor-pointer shadow-2xl hover:shadow-sky-500/10 h-full"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">What We Do</h2>
            <p className="text-gray-300 leading-relaxed">
              Web Development, Mobile Apps, UI/UX Design, Backend APIs, 
              Cloud Solutions, and AI-powered applications.
            </p>
          </Card>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-24 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
      >
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
          <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2">50+</div>
          <div className="text-gray-400">Clients Worldwide</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
          <div className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">100+</div>
          <div className="text-gray-400">Projects Completed</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
          <div className="text-3xl sm:text-4xl font-bold text-sky-300 mb-2">24/7</div>
          <div className="text-gray-400">Support Available</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
          <div className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">10+</div>
          <div className="text-gray-400">Years Experience</div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 sm:mt-24"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to work with us?</h3>
        <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
          Let's build something extraordinary together. Contact us today to discuss your project.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all text-white font-medium text-lg"
        >
          Get in Touch
        </motion.a>
      </motion.section>
    </div>
  );
}