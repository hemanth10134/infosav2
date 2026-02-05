import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Info<span className="text-primary-500">Savi</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              InfoSavi is a premier IT consulting firm helping businesses navigate the digital landscape with innovative software and cloud solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-primary-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">AI & Automation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get the latest tech trends and updates.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} InfoSavi Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;