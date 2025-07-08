"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ModernNavigation() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/pricing", name: "Pricing" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-lg py-2" : "bg-black/50 backdrop-blur-md py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-10 h-10 md:w-12 md:h-12"
          >
            <img 
              src="/logo/logo.png" 
              alt="Tetra Tecno Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-12"
            />
          </motion.div>
          <span className="ml-3 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            tetra tecno
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 ${pathName === item.path ? "text-white" : "text-gray-300 hover:text-white"}`}
            >
              {item.name}
              {pathName === item.path && (
                <motion.span 
                  layoutId="navIndicator"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Menu"
        >
          <div className={`w-6 flex flex-col items-end gap-1.5 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <motion.span 
              animate={{ 
                width: isOpen ? '100%' : '100%',
                transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none' 
              }}
              className="h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="h-0.5 bg-white rounded-full w-4/5"
            />
            <motion.span 
              animate={{ 
                width: isOpen ? '100%' : '2/3',
                transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' 
              }}
              className="h-0.5 bg-white rounded-full w-2/3"
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl px-4 py-6 shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-lg font-medium rounded-lg transition-all ${pathName === item.path ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-l-4 border-blue-400" : "text-gray-300 hover:text-white hover:bg-gray-800/50"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}