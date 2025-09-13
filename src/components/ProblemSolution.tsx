'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Clock, DollarSign, Users, Zap } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tareas Repetitivas",
      description: "Tu equipo pierde tiempo en actividades que podrían automatizarse"
    },
    {
      icon: DollarSign,
      title: "Pérdida de Oportunidades",
      description: "Ventas perdidas por horarios limitados y atención no escalable"
    },
    {
      icon: Users,
      title: "Atención Limitada",
      description: "Soporte al cliente restringido a horarios de oficina"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Clones Digitales 24/7",
      description: "Tus clones trabajan sin descanso, atendiendo clientes en cualquier momento"
    },
    {
      icon: CheckCircle,
      title: "Automatización Completa",
      description: "Procesos que antes requerían horas, ahora se completan en segundos"
    },
    {
      icon: Users,
      title: "Escalabilidad Infinita",
      description: "Atiende a miles de clientes simultáneamente sin aumentar tu equipo"
    }
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
            El problema que <span className="text-green-600">resolvemos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las empresas modernas enfrentan desafíos que limitan su crecimiento. 
            Nuestros clones digitales son la solución definitiva.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Problemas Actuales</h3>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100"
                >
                  <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Solución</h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border border-green-100"
                >
                  <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu empresa?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Descubre cómo nuestros clones digitales pueden revolucionar tu negocio en solo 30 días.
            </p>
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Solicitar Consulta Gratuita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
