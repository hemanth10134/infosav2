import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you for your message! We will get back to you shortly.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Have a project in mind? Let's discuss how we can help you achieve your business goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col justify-between overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600 rounded-full filter blur-3xl opacity-20 -mr-16 -mb-16"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-10">
                Fill up the form or contact us directly. Our team is available 24/7 to answer your queries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-lg font-semibold">+91 80 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-lg font-semibold">hello@infosavi.tech</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Headquarters</p>
                    <p className="text-lg font-semibold">
                      Tech Park, Electronic City<br/>
                      Bengaluru, Karnataka 560100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               {/* Map Placeholder */}
               <div className="w-full h-48 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <span className="text-slate-500 flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Google Maps Embed
                  </span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white">
                  <option>General Inquiry</option>
                  <option>Software Development</option>
                  <option>Cloud Consulting</option>
                  <option>Career</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <Button fullWidth size="lg" type="submit" className="group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;