import React from 'react';
import { FEATURES } from '../constants';
import { Check } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/600/800?office" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-3xl font-bold mb-2">Since 2018</p>
                  <p className="text-slate-300">Helping businesses grow through technology.</p>
                </div>
             </div>
             
             {/* Decorative dots */}
             <div className="absolute -top-12 -right-12 -z-10 text-slate-100">
                <svg width="200" height="200" fill="currentColor">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2"></circle>
                  </pattern>
                  <rect width="200" height="200" fill="url(#dots)"></rect>
                </svg>
             </div>
          </div>

          <div>
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose InfoSavi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We Build Solutions That <br /> Drive Real Results
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              In a crowded market of IT service providers, InfoSavi stands out by focusing on business outcomes, not just code. We partner with you to understand your unique challenges.
            </p>

            <div className="space-y-8">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;