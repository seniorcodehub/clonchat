'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Logo from './Logo';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'free' | 'demo'>('free');

  const handleGetStarted = () => {
    setModalType('free');
    setIsModalOpen(true);
  };

  const handleSeeDemo = () => {
    setModalType('demo');
    setIsModalOpen(true);
  };

  const modalConfig = {
    free: {
      title: "Get Your AI Clone FREE",
      description: "Join 500+ companies already using AI clones to boost their revenue. No credit card required."
    },
    demo: {
      title: "See It In Action",
      description: "Schedule a personalized demo and see how our AI clones can transform your business."
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              <span className="block">AI Digital Clones</span>
              <span className="block text-green-600">That Work 24/7</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Automate sales, support, and marketing with intelligent digital clones that never sleep.
              </p>
              
              {/* Simple Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-semibold">500+</span>
                  <span>companies trust us</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  onClick={handleSeeDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </motion.button>
              </div>
              
              {/* Simple Trust Signal */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>✓</span>
                <span>No credit card required • Setup in 5 minutes</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            {/* Product Mockup */}
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl mx-auto max-w-sm lg:max-w-none">
              {/* Chat Interface Mockup */}
              <div className="absolute inset-3 md:inset-4 bg-white rounded-xl shadow-lg p-4 md:p-6 space-y-3 md:space-y-4">
                {/* Chat Header */}
                <div className="flex items-center space-x-2 md:space-x-3 pb-3 md:pb-4 border-b border-gray-200">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs md:text-sm">AI</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm md:text-base truncate">Your AI Clone</div>
                    <div className="text-xs text-green-500 flex items-center">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1 md:mr-2 animate-pulse"></div>
                      <span className="truncate">Online now</span>
                    </div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-2 md:space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-green-50 p-2 md:p-3 rounded-lg rounded-tl-sm"
                  >
                    <div className="text-xs md:text-sm text-gray-800 leading-relaxed">Hi! I'm your AI clone. I just closed a $50K deal while you were sleeping! 🎉</div>
                    <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="bg-gray-100 p-2 md:p-3 rounded-lg rounded-tr-sm ml-4 md:ml-8"
                  >
                    <div className="text-xs md:text-sm text-gray-800">Amazing! What else did you handle?</div>
                    <div className="text-xs text-gray-500 mt-1">1 minute ago</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="bg-green-50 p-2 md:p-3 rounded-lg rounded-tl-sm"
                  >
                    <div className="text-xs md:text-sm text-gray-800 leading-relaxed">
                      ✅ Responded to 47 customer inquiries<br/>
                      ✅ Generated 12 qualified leads<br/>
                      ✅ Scheduled 8 demos for tomorrow
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Just now</div>
                  </motion.div>
                </div>
                
                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                  className="flex items-center space-x-1 md:space-x-2 text-gray-500"
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-xs ml-1 md:ml-2">AI is typing...</span>
                </motion.div>
              </div>
              
              {/* Floating Success Metrics */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg z-10"
              >
                +$50K
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-blue-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg z-10"
              >
                47 leads
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 left-2 w-4 h-4 bg-green-400 rounded-full z-10"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute top-1/4 right-2 w-3 h-3 bg-green-300 rounded-full z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalConfig[modalType].title}
        description={modalConfig[modalType].description}
      />
    </section>
  );
};

export default Hero;
