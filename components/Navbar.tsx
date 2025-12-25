
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setActiveTab(label);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar with Gradient */}
      <div className="bg-gradient-to-r from-[#6b46c1] to-[#2563eb] text-white py-2 text-[12px] md:text-[13px] font-medium hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span>info@elevatedigitalsolutions.in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>Kerala 670702</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 font-bold">
            <span>Need Urgent Service?</span>
            <a href="tel:6353539425" className="underline hover:text-indigo-100 transition-colors">Call 6353539425</a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="opacity-90">Follow us</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"><Facebook className="h-3.5 w-3.5 fill-current" /></a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"><Twitter className="h-3.5 w-3.5 fill-current" /></a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"><Linkedin className="h-3.5 w-3.5 fill-current" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-100'} h-20 lg:h-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => { window.scrollTo(0, 0); setActiveTab('Home'); }}>
              <img 
                src="https://res.cloudinary.com/ditsmq3r6/image/upload/v1764069190/HHHHHH_du7c5o.png" 
                alt="Elevate Digital Solutions" 
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-8 mr-12">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.label)}
                    className={`relative py-2 text-[15px] font-bold transition-all duration-300 ${
                      activeTab === item.label ? 'text-[#0061ff]' : 'text-slate-700 hover:text-[#0061ff]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#0061ff] transform origin-left transition-transform duration-300 ${activeTab === item.label ? 'scale-x-100' : 'scale-x-0'}`}></span>
                  </a>
                ))}
              </div>

              {/* Call Now Button */}
              <a 
                href="tel:6353539425"
                className="flex items-center gap-2 bg-[#0061ff] hover:bg-blue-700 text-white px-7 py-3 rounded-full font-bold text-sm lg:text-base transition-all duration-300 shadow-lg shadow-blue-200 active:scale-95"
              >
                <Phone className="h-4 w-4 fill-current" />
                <span>Call Now</span>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-[#0061ff] focus:outline-none transition-colors"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-4 pt-2 pb-8 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`block px-4 py-4 rounded-xl text-base font-bold ${
                  activeTab === item.label ? 'bg-blue-50 text-[#0061ff]' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 px-2">
              <a 
                href="tel:6353539425"
                className="flex items-center justify-center gap-2 bg-[#0061ff] text-white px-6 py-4 rounded-2xl font-bold w-full shadow-lg shadow-blue-100"
              >
                <Phone className="h-5 w-5 fill-current" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
