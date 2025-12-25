
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-orange-100 via-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Elevate Your Brand</h2>
            <p className="text-slate-600 text-lg mb-8">
              Ready to start your next project? Get in touch with us today. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email Us</h3>
                  <p className="mt-1 text-slate-500">info@elevatedigitalsolutions.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Call Us</h3>
                  <p className="mt-1 text-slate-500">+91 63535 39425</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Visit Us</h3>
                  <p className="mt-1 text-slate-500">
                    Kerala - 670702
                  </p>
                  
                  <p className="mt-6 text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Follow us on Social Media
                  </p>

                  <div className="flex items-center space-x-5 mt-3">
                    <a href="#" className="transform transition-transform hover:scale-110"><Facebook className="h-7 w-7 text-[#1877F2] fill-current" /></a>
                    <a href="#" className="transform transition-transform hover:scale-110"><Instagram className="h-7 w-7 text-[#E4405F]" /></a>
                    <a href="#" className="transform transition-transform hover:scale-110"><Twitter className="h-7 w-7 text-[#1DA1F2] fill-current" /></a>
                    <a href="#" className="transform transition-transform hover:scale-110"><Linkedin className="h-7 w-7 text-[#0A66C2] fill-current" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-xl shadow-purple-100/50">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-[#0061ff] focus:border-transparent outline-none transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-[#0061ff] focus:border-transparent outline-none transition-shadow" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-[#0061ff] focus:border-transparent outline-none transition-shadow" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-[#0061ff] focus:border-transparent outline-none resize-none transition-shadow" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-[#0061ff] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
