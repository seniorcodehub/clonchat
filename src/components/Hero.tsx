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
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              <span className="block">Stop losing</span>
              <span className="block text-green-600 relative">
                customers to competitors
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2 text-4xl"
                >
                  ⚡
                </motion.span>
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Create AI digital clones that handle sales, support, and marketing 
                <span className="font-semibold text-green-600"> 24/7</span> while you sleep.
              </p>
              
              {/* Social Proof */}
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-6 h-6 bg-green-100 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-green-600">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span>500+ companies trust us</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Your AI Clone FREE</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button 
                  onClick={handleSeeDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  See It In Action
                </motion.button>
              </div>
              
              {/* Urgency & Trust Signals */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                <div className="flex items-center space-x-2 text-green-600 font-semibold">
                  <motion.span
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-lg"
                  >
                    🔥
                  </motion.span>
                  <span>Limited Time: 50% OFF first month</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span>✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span>✓</span>
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-4xl font-bold text-green-600 mb-2"
                >
                  $2.3M
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Average Revenue Increase</div>
                <div className="text-xs text-green-500 mt-1">+340% YoY</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-4xl font-bold text-green-600 mb-2"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Always Working</div>
                <div className="text-xs text-green-500 mt-1">Never sleeps</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-4xl font-bold text-green-600 mb-2"
                >
                  5min
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Setup Time</div>
                <div className="text-xs text-green-500 mt-1">Ready to go</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Product Mockup */}
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Chat Interface Mockup */}
              <div className="absolute inset-4 bg-white rounded-xl shadow-lg p-6 space-y-4">
                {/* Chat Header */}
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Your AI Clone</div>
                    <div className="text-xs text-green-500 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Online now
                    </div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-green-50 p-3 rounded-lg rounded-tl-sm"
                  >
                    <div className="text-sm text-gray-800">Hi! I'm your AI clone. I just closed a $50K deal while you were sleeping! 🎉</div>
                    <div className="text-xs text-gray-500 mt-1">2 minutes ago</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="bg-gray-100 p-3 rounded-lg rounded-tr-sm ml-8"
                  >
                    <div className="text-sm text-gray-800">Amazing! What else did you handle?</div>
                    <div className="text-xs text-gray-500 mt-1">1 minute ago</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="bg-green-50 p-3 rounded-lg rounded-tl-sm"
                  >
                    <div className="text-sm text-gray-800">✅ Responded to 47 customer inquiries<br/>✅ Generated 12 qualified leads<br/>✅ Scheduled 8 demos for tomorrow</div>
                    <div className="text-xs text-gray-500 mt-1">Just now</div>
                  </motion.div>
                </div>
                
                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                  className="flex items-center space-x-2 text-gray-500"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-xs ml-2">AI is typing...</span>
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
                className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10"
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
                className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10"
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
