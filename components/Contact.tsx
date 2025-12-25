
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      // Updated with the user's actual Formspree ID: meejybjb
      const response = await fetch('https://formspree.io/f/meejybjb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-orange-100 via-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Let's Elevate Your Brand</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-md">
              Ready to start your next project? Get in touch with us today. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <p className="mt-1 text-slate-500 font-medium">info@elevatedigitalsolutions.in</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-slate-900">Call Us</h3>
                  <p className="mt-1 text-slate-500 font-medium">+91 63535 39425</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-slate-900">Visit Us</h3>
                  <p className="mt-1 text-slate-500 font-medium">Kerala, India - 670702</p>
                  
                  <div className="mt-8">
                    <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Follow us</p>
                    <div className="flex items-center space-x-4">
                      {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="p-2.5 bg-white shadow-sm border border-slate-100 rounded-xl text-slate-400 hover:text-indigo-600 hover:shadow-md transition-all duration-300">
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Form Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white shadow-2xl shadow-indigo-100/50 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2.5">Name</label>
                    <input 
                      required
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2.5">Email</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2.5">Subject</label>
                  <input 
                    required
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" 
                    placeholder="Project Inquiry" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2.5">Message</label>
                  <textarea 
                    required
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none transition-all placeholder:text-slate-400" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                  type="submit" 
                  className={`w-full group relative flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl overflow-hidden ${
                    status === 'SUCCESS' 
                    ? 'bg-green-500 text-white shadow-green-100' 
                    : 'bg-[#0061ff] text-white hover:bg-blue-700 shadow-blue-100'
                  }`}
                >
                  {status === 'SUBMITTING' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === 'SUCCESS' ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === 'ERROR' && (
                  <p className="text-red-500 text-sm text-center font-medium animate-pulse">
                    Something went wrong. Please try again or call us.
                  </p>
                )}
              </form>
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 -z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
