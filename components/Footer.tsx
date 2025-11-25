import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-100 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://res.cloudinary.com/ditsmq3r6/image/upload/v1764069190/HHHHHH_du7c5o.png" 
                alt="Elevate Digital Solutions" 
                className="h-32 w-auto object-contain -ml-2"
              />
            </div>
            <p className="text-slate-500 max-w-sm">
              Helping businesses grow through innovative digital marketing, stunning design, and strategic branding solutions.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-indigo-600 transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Poster Design</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Branding</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Elevate Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;