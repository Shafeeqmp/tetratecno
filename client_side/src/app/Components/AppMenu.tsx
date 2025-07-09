"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaPlay,
  FaPause,
  FaQuoteLeft,
  FaStar,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const developers = [
    {
      name: "Muhd_Shahid",
      role: "Frontend Developer",
      expertise: "React, TypeScript",
      photo: "/images/team/shahid.jpg",
      social: {
        linkedin: "#",
        github: "https://github.com/Codethemind",
        instagram: "https://twitter.com/muhd_shahid",
      },
    },
    {
      name: "Muhd_Fauzan",
      role: "Backend Developer",
      expertise: "Node.js, JavaScript",
      photo: "/images/team/Fauzan.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/muhd-fauzan",
        github: "https://github.com/muhd-fauzan",
        instagram: "https://twitter.com/muhd_fauzan",
      },
    },
    {
      name: "Muhd_Shafeeq",
      role: "UX Designer",
      expertise: "Figma, UI/UX",
      photo: "/images/team/shafeeq.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/muhammed-shafeeq-254056234/",
        github: "https://github.com/Shafeeqmp",
        instagram: "https://twitter.com/muhd_shafeeq",
      },
    },
    {
      name: "Muhd_Shibili",
      role: "DevOps Engineer",
      expertise: "AWS, Docker",
      photo: "/images/team/shibili.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/muhd-shibili",
        github: "https://github.com/Muhd-Shibili77",
        instagram: "https://twitter.com/muhd_shibili",
      },
    },
  ];

  const transformations = [
    {
      before: "Legacy systems with slow performance",
      after: "Modern cloud infrastructure with 300% faster response times",
      client: "FinTech Solutions Inc.",
    },
    {
      before: "Manual data entry processes",
      after: "Automated workflows saving 40 hours/week",
      client: "HealthCare Logistics",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onLoadedData={() => setLoaded(true)}
        >
          <source src="/videos/video-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TetraTecno
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Innovating the future with cutting-edge technology solutions and
              digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Get Started <FaArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                onClick={toggleVideoPlay}
              >
                {videoPlaying ? (
                  <>
                    <FaPause className="text-sm sm:text-base" />{" "}
                    <span className="text-sm sm:text-base">Pause</span>
                  </>
                ) : (
                  <>
                    <FaPlay className="text-sm sm:text-base" />{" "}
                    <span className="text-sm sm:text-base">Play</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="animate-bounce w-6 h-10 sm:w-8 sm:h-14 rounded-full border-2 border-white/50 flex justify-center p-1">
              <motion.div
                className="w-1 h-2 sm:h-3 bg-white rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">
              Scroll to explore
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Solutions
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 hover:border-purple-500 transition-all"
          >
            <div className="bg-blue-500/10 p-3 sm:p-4 rounded-lg w-max mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Digital Transformation
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              Modernize your business with our comprehensive digital
              transformation strategies.
            </p>
            <button className="text-blue-400 text-sm sm:text-base font-medium flex items-center gap-2 hover:text-blue-300 transition-colors">
              Learn more <FaChevronDown className="text-xs" />
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 hover:border-purple-500 transition-all"
          >
            <div className="bg-purple-500/10 p-3 sm:p-4 rounded-lg w-max mb-4 sm:mb-6">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Custom Software
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              Tailored software solutions designed for your business needs.
            </p>
            <button className="text-purple-400 text-sm sm:text-base font-medium flex items-center gap-2 hover:text-purple-300 transition-colors">
              Learn more <FaChevronDown className="text-xs" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Your Story Starts Here Section */}
      <div className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Your Story{" "}
                </span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                At TetraTecno Solutions, we believe every business has a unique
                story to tell.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
                Founded in 2015, we've grown from a small team to a full-service
                digital agency serving clients worldwide.
              </p>
              <button className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 w-max text-sm sm:text-base">
                Our Journey <FaArrowRight />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video w-full"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/collaboration.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white/30 transition-all"
                onClick={toggleVideoPlay}
              >
                {videoPlaying ? (
                  <FaPause className="text-white text-lg sm:text-xl" />
                ) : (
                  <FaPlay className="text-white text-lg sm:text-xl" />
                )}
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-white text-xs sm:text-sm">
                  See how we work together
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transformations Section */}
      <div className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Transformations,{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Not Just Testimonials
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We measure success by the tangible impact we create.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-purple-500/10 p-2 sm:p-3 rounded-lg">
                  <FaQuoteLeft className="text-purple-400 text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {item.client}
                  </h4>
                  <div className="flex text-yellow-400 gap-1 text-sm sm:text-base">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium mb-1">
                    Before
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {item.before}
                  </p>
                </div>
                <div className="w-full h-px bg-gray-800"></div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium mb-1">
                    After
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {item.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center py-10"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base mx-auto">
            View More Case Studies <FaChevronDown className="animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Developer Team Section with Social Links */}
      <div className="py-16 sm:py-24 px-4 bg-gradient-to-b from-gray-950 to-black text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The brilliant minds powering digital transformation
            </motion.p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                {/* Profile Image */}
                <div className="relative mb-4 rounded-lg overflow-hidden aspect-square w-full">
                  <img
                    src={dev.photo}
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{dev.name}</h3>
                  <p className="text-blue-400 text-sm">{dev.role}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {dev.expertise.split(", ").map((skill, i) => (
                      <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-2 mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={dev.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label={`${dev.name} LinkedIn`}
                  >
                    <FaLinkedin className="hover:text-blue-600" />
                  </a>
                  <a 
                    href={dev.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label={`${dev.name} GitHub`}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={dev.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label={`${dev.name} Instagram`}
                  >
                    <FaInstagram className="hover:text-pink-500" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <span className="flex items-center gap-2">
                View Full Team
                <FaArrowRight />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}