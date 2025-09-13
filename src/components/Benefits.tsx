'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users,
  BarChart3
} from 'lucide-react';

const Benefits: React.FC = () => {
  // ROI Calculator state
  const [employees, setEmployees] = useState(5);
  const [costPerEmployee, setCostPerEmployee] = useState(3000);
  const [clonesNeeded, setClonesNeeded] = useState(1);

  // Calculate ROI
  const calculateSavings = () => {
    const totalEmployeeCost = employees * costPerEmployee;
    const cloneCost = clonesNeeded * 799; // Professional plan cost
    const savings = totalEmployeeCost - cloneCost;
    return Math.max(0, savings);
  };

  const calculateROI = () => {
    const monthlySavings = calculateSavings();
    const cloneCost = clonesNeeded * 799;
    if (cloneCost === 0) return 0;
    return (monthlySavings / cloneCost) * 100;
  };

  const getROITimeframe = () => {
    const monthlySavings = calculateSavings();
    const cloneCost = clonesNeeded * 799;
    if (monthlySavings <= 0) return 'N/A';
    const months = Math.ceil(cloneCost / monthlySavings);
    return `${months} month${months > 1 ? 's' : ''}`;
  };

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your clones work non-stop, serving customers at any time of day",
      stat: "24/7",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Eliminate the need to hire additional staff for repetitive tasks",
      stat: "-70%",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Infinite Scalability",
      description: "Serve thousands of customers simultaneously without capacity limits",
      stat: "∞",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Brand Consistency",
      description: "Maintain a uniform message and tone in all interactions",
      stat: "100%",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Customers receive immediate responses without waiting",
      stat: "<1s",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Total Personalization",
      description: "Each interaction adapts to the customer's profile and needs",
      stat: "1:1",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const metrics = [
    {
      number: "95%",
      label: "Customer Satisfaction",
      description: "Customers prefer speed and availability"
    },
    {
      number: "3x",
      label: "Sales Increase",
      description: "Improvement in conversion and customer retention"
    },
    {
      number: "80%",
      label: "Cost Reduction",
      description: "Less staff needed for operations"
    },
    {
      number: "24/7",
      label: "Availability",
      description: "No interruptions due to schedules or vacations"
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
            Key <span className="text-green-600">Benefits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of companies trust our digital clones
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">{benefit.stat}</div>
                    <div className="text-sm text-gray-500">metric</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-xl text-gray-600">
              Real data from companies already using our digital clones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-green-600 mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Calculate your ROI</h3>
              <p className="text-green-100 text-lg mb-6">
                Discover how much you can save with our digital clones
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <span>Average savings: $50,000/month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Equivalent to 5 employees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <span>ROI in 3 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">ROI Calculator</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current employees</label>
                  <input 
                    type="number" 
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    placeholder="5"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly cost per employee ($)</label>
                  <input 
                    type="number" 
                    value={costPerEmployee}
                    onChange={(e) => setCostPerEmployee(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    placeholder="3000"
                    min="0"
                    max="50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">AI clones needed</label>
                  <input 
                    type="number" 
                    value={clonesNeeded}
                    onChange={(e) => setClonesNeeded(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-100 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    placeholder="1"
                    min="1"
                    max="10"
                  />
                </div>
                
                {/* Results */}
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-green-100 mb-1">Monthly savings</div>
                    <div className="text-2xl font-bold">
                      ${calculateSavings().toLocaleString()}/month
                    </div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-green-100 mb-1">ROI percentage</div>
                    <div className="text-2xl font-bold">
                      {calculateROI().toFixed(0)}%
                    </div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-green-100 mb-1">Payback period</div>
                    <div className="text-2xl font-bold">
                      {getROITimeframe()}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mt-4">
                  <p className="text-sm text-green-100">
                    <strong>Note:</strong> Based on Professional plan ($799/month per clone). 
                    Actual savings may vary based on your specific use case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see these benefits?</h3>
            <p className="text-gray-600 mb-6">
              Schedule a personalized demo and discover the potential of your digital clone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
                Request Demo
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
