import React from 'react';
import { SERVICES } from '../constants';
import SectionHeader from './ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Expertise" 
          subtitle="Comprehensive IT services tailored to modern business needs. We build, deploy, and manage technologies that drive success."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;