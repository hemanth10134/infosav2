import React from 'react';
import SectionHeader from './ui/SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader 
          title="About InfoSavi" 
          subtitle="We are a team of visionaries, engineers, and strategists passionate about technology."
        />
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-8">
            "At InfoSavi, our mission is to democratize access to enterprise-grade technology. We believe that every business, regardless of size, deserves intelligent systems that scale."
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
            <img 
              src="https://picsum.photos/100/100?face" 
              alt="CEO" 
              className="w-20 h-20 rounded-full border-4 border-primary-100"
            />
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900">Arjun Reddy</h4>
              <p className="text-primary-600 font-medium">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;