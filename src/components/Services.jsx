'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  CreditCard,
  Smartphone,
  Globe,
  SearchCheck
} from 'lucide-react'

const services = [
  {
    name: 'Mobile App Development',
    features: [
      'Cross-Platform (Flutter - Android & iOS)',
      'API Integration',
      'Clean UI/UX',
      'Admin Panel + Database',
      'Delivery: 2–4 Weeks',
    ],
    icon: <Smartphone className="text-[#FF6F00]" size={28} />,
    id: 'mobile-app-development',
  },
  {
    name: 'Custom Web Application',
    features: [
      'Fully Custom Web App Development',
      'Advanced Functionality & API Integrations',
      'Admin Panel & User Management',
      'Scalable & Secure Architecture',
      'Delivery: 4–6 Weeks',
    ],
    icon: <Globe className="text-[#FF6F00]" size={28} />,
    id: 'custom-web-application',
  },
  {
    name: 'SEO Optimization',
    features: [
      'On-page & Off-page SEO',
      'Keyword Research & Competitor Analysis',
      'Technical SEO (Speed & Mobile Optimization)',
      'Backlink Strategy & Content Optimization',
      'Monthly Performance Report',
      'Delivery: Ongoing / Monthly Plans Available',
    ],
    icon: <SearchCheck className="text-[#FF6F00]" size={28} />,
    id: 'seo-optimization',
  },
]

const Services = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#f4f9f9] to-[#e8f0f2] py-20 px-5 font-['Montserrat']"
      id="services-page"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-[#0D5F53] mb-4"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#4A6D6F] text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Browse our complete range of services to meet your business needs.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              id={service.id}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{service.icon}</div>

              <h4 className="text-xl font-bold text-[#0D5F53] mb-2">{service.name}</h4>
              <p className="text-sm font-semibold text-[#138074] mb-4">{service.price}</p>

              <div className="flex-grow">
                {service.features.length > 0 ? (
                  <ul className="space-y-4">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <span className="text-[#FF6F00]">•</span>
                        <p className="text-sm text-[#425E57]">{feat}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#425E57]">Contact for more details.</p>
                )}
              </div>

              {/* Buttons with Icons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+919361660714"
                  className="w-1/2 inline-flex items-center justify-center bg-[#FF6F00] text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-[#e55f00] transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={16} className="mr-2" />
                  Contact Us
                </a>
                <a
                  href="#pay"
                  className="w-1/2 inline-flex items-center justify-center bg-[#138074] text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-[#116c5a] transition-all duration-300 transform hover:scale-105"
                >
                  <CreditCard size={16} className="mr-2" />
                  Pay
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
