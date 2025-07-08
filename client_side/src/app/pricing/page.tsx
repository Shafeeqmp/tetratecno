"use client";
import { motion } from "framer-motion";
import { Card, Button } from "flowbite-react";
import { FaCheckCircle, FaRocket, FaCrown, FaBuilding } from "react-icons/fa";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Starter",
    price: "₹499",
    period: "month",
    features: ["Basic support", "1 active project", "Community access", "Standard templates"],
    icon: <FaRocket className="w-5 h-5" />,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    highlighted: false,
  },
  {
    title: "Professional",
    price: "₹999",
    period: "month",
    features: [
      "Priority support",
      "5 active projects", 
      "Team collaboration",
      "Advanced analytics",
      "API access"
    ],
    icon: <FaCrown className="w-5 h-5" />,
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Dedicated support",
      "Unlimited projects",
      "Custom integrations",
      "White-glove onboarding",
      "24/7 monitoring",
      "SLA guarantees"
    ],
    icon: <FaBuilding className="w-5 h-5" />,
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    highlighted: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white py-16 sm:py-28 px-4 sm:px-6">
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
        <motion.div variants={fadeIn} className="mb-3">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
            Simple Pricing
          </span>
        </motion.div>
        <motion.h1 
          variants={fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent"
        >
          Choose Your Plan
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl"
        >
          Transparent pricing with no hidden fees. Scale up or down as needed.
        </motion.p>
      </motion.section>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            transition={{ delay: 0.1 * index }}
            className="h-full"
          >
            <Card
              className={`h-full flex flex-col border-0 shadow-xl overflow-hidden ${
                plan.highlighted 
                  ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30" 
                  : "bg-gray-800/50 border border-gray-700/50"
              }`}
            >
              {/* Plan Header */}
              <div className={`p-6 pb-8 -mx-6 -mt-6 mb-6 ${plan.highlighted ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10" : "bg-gray-700/10"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.color} text-white`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                </div>
                
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 mb-1">/{plan.period}</span>}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className={`flex-shrink-0 mt-1 ${plan.highlighted ? "text-pink-300" : "text-blue-400"}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link 
                href={plan.title === "Enterprise" ? "/contact" : "/signup"} 
                passHref
                className="mt-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    color={plan.highlighted ? "purple" : "blue"}
                    size="lg"
                    className={`w-full font-semibold ${plan.highlighted ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gradient-to-r from-blue-500 to-blue-600"}`}
                  >
                    {plan.title === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </motion.div>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* FAQ/Additional Info */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto mt-24 text-center"
      >
        <div className="bg-gray-800/30 p-8 sm:p-10 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need help deciding?</h3>
          <p className="text-gray-300 mb-6">
            Compare features or talk to our sales team to find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium shadow-lg"
            >
              Compare Plans
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-transparent border-2 border-gray-600 text-white rounded-lg font-medium hover:bg-gray-700/30 transition-colors"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}