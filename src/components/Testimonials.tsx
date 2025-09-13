'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Digital clones have revolutionized our business. We now serve 10x more customers with the same quality. It's like having a sales team that never sleeps.",
      rating: 5,
      metric: "+300% sales"
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de Marketing, InnovateCorp",
      company: "InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The personalization we achieve with our clones is incredible. Every customer feels like they're talking directly to me, but at massive scale.",
      rating: 5,
      metric: "95% satisfaction"
    },
    {
      name: "Ana Martínez",
      position: "Fundadora, Digital Solutions",
      company: "Digital Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "We implemented the clones in 2 weeks and already see results. Our customer support is now 24/7 and costs reduced by 70%.",
      rating: 5,
      metric: "-70% costs"
    },
    {
      name: "David Chen",
      position: "CTO, FutureTech",
      company: "FutureTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The integration was perfect. The clones adapted to our CRM and now automate the entire sales process. It's future technology, today.",
      rating: 5,
      metric: "100% automation"
    },
    {
      name: "Laura Fernández",
      position: "VP Ventas, GrowthCo",
      company: "GrowthCo",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Our clones don't just sell, they qualify leads perfectly. The quality of conversations is impressive. It's like having my best salesperson multiplied by 100.",
      rating: 5,
      metric: "+500% leads"
    },
    {
      name: "Roberto Silva",
      position: "CEO, ScaleUp Inc",
      company: "ScaleUp Inc",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The ROI was immediate. In 3 months we recovered the investment and now generate 5x more revenue with the same structure. It's the best decision we've made.",
      rating: 5,
      metric: "5x ROI"
    }
  ];

  const companies = [
    { name: "TechStart", logo: "TS" },
    { name: "InnovateCorp", logo: "IC" },
    { name: "Digital Solutions", logo: "DS" },
    { name: "FutureTech", logo: "FT" },
    { name: "GrowthCo", logo: "GC" },
    { name: "ScaleUp Inc", logo: "SU" }
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
            What our <span className="text-green-600">clients</span> say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading companies are already transforming their business with our digital clones
          </p>
        </motion.div>

        {/* Companies Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">Companies that trust us</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-gray-700 mb-2">{company.logo}</div>
                <div className="text-sm text-gray-600">{company.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-green-600" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Metric */}
              <div className="bg-green-50 rounded-lg p-3 mb-6">
                <div className="text-2xl font-bold text-green-600">{testimonial.metric}</div>
                <div className="text-sm text-green-700">improvement in results</div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-green-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-100">Conversations/day</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-100">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Availability</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join these successful companies</h3>
            <p className="text-gray-600 mb-6">
              Discover how you can transform your business with our digital clones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center group">
                View Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
