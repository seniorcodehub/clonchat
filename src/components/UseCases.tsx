'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  MessageSquare, 
  Headphones, 
  GraduationCap,
  BarChart3,
  Globe,
  Smartphone
} from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Sales",
      description: "Clones that qualify leads, present products and close sales 24/7",
      examples: [
        "Automatic lead qualification",
        "Personalized product presentation",
        "Abandoned cart follow-up",
        "Price negotiation"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: MessageSquare,
      title: "Marketing",
      description: "Content creation, social media management and automated campaigns",
      examples: [
        "Personalized content generation",
        "Social media management",
        "Email marketing campaigns",
        "Audience analysis"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Instant customer service, problem resolution and technical support",
      examples: [
        "24/7 technical support",
        "FAQ resolution",
        "Intelligent escalation",
        "Ticket tracking"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Employee training, onboarding and skill development",
      examples: [
        "New employee onboarding",
        "Product training",
        "Sales simulations",
        "Automatic evaluations"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    }
  ];

  const integrations = [
    { icon: Globe, name: "Website", description: "Integrated live chat" },
    { icon: Smartphone, name: "WhatsApp", description: "Automatic messages" },
    { icon: MessageSquare, name: "Chatbots", description: "Intelligent conversations" },
    { icon: BarChart3, name: "CRM", description: "Data synchronization" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Use <span className="text-green-600">Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how digital clones can transform different areas of your business
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${useCase.bgColor} rounded-2xl p-6 border ${useCase.borderColor} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              
              <div className="space-y-2">
                {useCase.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 ${useCase.iconColor.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                    <span className="text-sm text-gray-600">{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Perfect Integrations</h3>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Your digital clone integrates perfectly with the tools you already use
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{integration.name}</h4>
                <p className="text-green-100 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Real <span className="text-green-600">Examples</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">E-commerce</h4>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;A clone that answers your customers&apos; frequently asked questions and guides them to purchase&rdquo;
              </p>
                <div className="text-sm text-green-600 font-medium">+40% conversion</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">SaaS</h4>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;An avatar that presents your products in personalized videos for each prospect&rdquo;
              </p>
              <div className="text-sm text-blue-600 font-medium">+60% engagement</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Servicios</h4>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Technical support that resolves 80% of queries without human intervention&rdquo;
              </p>
              <div className="text-sm text-purple-600 font-medium">-70% tickets</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
