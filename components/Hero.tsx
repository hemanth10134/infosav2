import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-primary-900 opacity-90"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2"></span>
              Is your business ready for the future?
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Transforming Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Smart IT Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We deliver cutting-edge software, cloud infrastructure, and AI-driven strategies to help global enterprises scale efficiently and innovate faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                View Our Work
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary-500 mr-1" />
                No Lock-in Contracts
              </div>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-primary-500 mr-1" />
                Agile Delivery
              </div>
            </div>
          </div>

          {/* Visual Content / Abstract Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-2">
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Modern Technology Dashboard" 
                  className="rounded-xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs animate-float">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">System Status</p>
                      <p className="text-sm font-bold text-slate-900">100% Operational</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl max-w-xs animate-float animation-delay-2000">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <div className="h-4 w-4 text-blue-600 font-bold text-xs flex items-center justify-center">AI</div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Optimization</p>
                      <p className="text-sm font-bold text-slate-900">+45% Efficiency</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;