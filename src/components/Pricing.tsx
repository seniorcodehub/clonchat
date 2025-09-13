'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses that want to get started",
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        "1 digital clone",
        "Up to 1,000 conversations/month",
        "Basic integration (Web + WhatsApp)",
        "Email support",
        "Basic training",
        "Basic reports"
      ],
      limitations: [
        "No advanced customization",
        "No CRM integration",
        "No priority support"
      ],
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      monthlyPrice: 799,
      annualPrice: 649,
      features: [
        "3 digital clones",
        "Up to 10,000 conversations/month",
        "Complete integration (Web, WhatsApp, CRM)",
        "24/7 priority support",
        "Custom training",
        "Advanced reports and analytics",
        "Avatar customization",
        "Complete API"
      ],
      limitations: [
        "No dedicated support",
        "No custom integrations"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large companies with specific needs",
      monthlyPrice: 1999,
      annualPrice: 1599,
      features: [
        "Unlimited clones",
        "Unlimited conversations",
        "All available integrations",
        "24/7 dedicated support",
        "Complete team training",
        "Custom dashboard",
        "Ultra-realistic avatars",
        "Complete API + webhooks",
        "Custom integrations",
        "Guaranteed SLA",
        "Strategic consulting"
      ],
      limitations: [],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Additional Conversations",
      description: "Package of 1,000 extra conversations",
      price: 99
    },
    {
      name: "Custom Integration",
      description: "Development of specific integration for your system",
      price: 299
    },
    {
      name: "Dedicated Support",
      description: "Assignment of a dedicated specialist to your account",
      price: 199
    },
    {
      name: "Advanced Training",
      description: "Custom training sessions for your team",
      price: 149
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pricing <span className="text-green-600">plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that best fits your company's needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className={`${plan.bgColor} rounded-2xl p-8 border-2 ${plan.borderColor} h-full`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-gray-600">/month</div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium mt-1">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center space-x-3 opacity-50">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-500 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-green-600 hover:text-green-600'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started Now'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Additional <span className="text-green-600">services</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{addOn.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">${addOn.price}</div>
                <button className="w-full py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition-colors duration-300">
                  Agregar
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans at any time?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes are reflected in your next billing cycle.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is there a trial period?</h4>
              <p className="text-gray-600">We offer a 14-day free trial for all our plans. No credit card required.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">What does support include?</h4>
              <p className="text-gray-600">Support includes complete documentation, video tutorials and email assistance. Higher plans include priority support.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel at any time?</h4>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. No penalties or hidden charges.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Not sure about the right plan?</h3>
            <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
              Our team of experts will help you choose the perfect plan for your company
            </p>
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center mx-auto group">
              Consult with an Expert
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
