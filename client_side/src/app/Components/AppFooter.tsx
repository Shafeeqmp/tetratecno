"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaGithub,
  FaDribbble
} from "react-icons/fa";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "API", href: "/api" },
        { name: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Community", href: "/community" },
        { name: "Status", href: "/status" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "#", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-sky-400" },
    { icon: <FaInstagram />, href: "#", color: "hover:text-pink-500" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:text-blue-600" },
    { icon: <FaGithub />, href: "#", color: "hover:text-gray-400" },
    { icon: <FaDribbble />, href: "#", color: "hover:text-pink-400" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 mr-3"
              >
                <img 
                  src="/logo/logo.png" 
                  alt="Tetra Tecno Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                tetra tecno
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions and innovative digital experiences.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                {section.title}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-start group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="group-hover:text-blue-400 transition-all"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} tetra tecno™. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-colors text-xl`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}