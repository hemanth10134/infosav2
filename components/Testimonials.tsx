import React from 'react';
import { TESTIMONIALS } from '../constants';
import SectionHeader from './ui/SectionHeader';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl mix-blend-screen"></div>
         <div className="absolute left-0 bottom-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Client Success Stories" 
          subtitle="Don't just take our word for it. Here's what our partners have to say about working with InfoSavi."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-700 opacity-50" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-primary-500"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-slate-300 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;