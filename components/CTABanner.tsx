import React from 'react';
import Button from './ui/Button';

const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Innovate?
            </h2>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-10">
              Join 20+ enterprise clients who have transformed their business with InfoSavi's technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg">Schedule a Call</Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">View Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;