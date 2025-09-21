'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Zap, CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const HowItWorks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Training",
      description: "Upload your data, record your voice and video. Our AI learns your unique communication style.",
      details: [
        "Upload documents and presentations",
        "Record voice samples",
        "Provide presentation videos",
        "Define your personality and tone"
      ]
    },
    {
      number: "02",
      icon: Brain,
      title: "Creation",
      description: "Our AI builds your digital clone with all your capabilities and knowledge.",
      details: [
        "AI data processing",
        "Custom voice synthesis",
        "Digital avatar generation",
        "Language model training"
      ]
    },
    {
      number: "03",
      icon: Zap,
      title: "Implementation",
      description: "We integrate your clone into your website, WhatsApp, social media and existing systems.",
      details: [
        "Website integration",
        "WhatsApp Business connection",
        "Chatbot configuration",
        "CRM synchronization"
      ]
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Optimization",
      description: "We continuously monitor and improve your digital clone's performance.",
      details: [
        "Conversation analysis",
        "Automatic improvements",
        "Performance reports",
        "Continuous updates"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            How it <span className="text-green-600">works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A simple 4-step process to create your perfect digital clone
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">
                {step.number}
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
                
                {/* Details */}
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-green-200"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-6 mb-8">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">
              The complete process takes only 2-3 weeks. Your digital clone will be ready to work.
            </p>
            <button 
              onClick={handleOpenModal}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Start Process
            </button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Start Your Digital Clone Process"
        description="The complete process takes only 2-3 weeks. Your digital clone will be ready to work."
      />
    </section>
  );
};

export default HowItWorks;
