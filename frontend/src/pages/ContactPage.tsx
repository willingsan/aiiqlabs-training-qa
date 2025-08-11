import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, MessageSquare, Calendar, Users, Clock, Globe, ChevronRight } from 'lucide-react';
import { ContactForm } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Our Campus',
      details: ['123 Tech Park, Electronic City', 'Bengaluru, Karnataka 560100', 'India'],
      color: 'from-stone-600 to-stone-700'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 80 1234 5678', 'Mon - Fri, 9am - 6pm IST'],
      color: 'from-amber-600 to-amber-700'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@aiiqlabs.com', 'admissions@aiiqlabs.com'],
      color: 'from-stone-500 to-stone-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #F59E0B 2px, transparent 2px), radial-gradient(circle at 80% 50%, #D97706 2px, transparent 2px)`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-400/20 rounded-lg animate-bounce hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-stone-400/20 rounded-lg animate-bounce hover:rotate-12 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-500/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional Animated Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-amber-300/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-stone-400/20 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 border border-amber-500/40 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8 hover:bg-amber-500/30 hover:scale-105 transition-all duration-300">
              <MessageSquare className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-sm font-semibold text-amber-300">Connect with AIIQLabs</span>
              <MessageSquare className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
              Start Your Learning 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 relative animate-gradient">
                {' '}Journey
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 transform -skew-x-12"></div>
              </span>
            </h1>
            
            <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to transform your career? Get in touch with us to discuss your goals 
              and find the perfect course for your journey. We're here to help every step of the way.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5 group-hover:animate-pulse" />
                  Get Started Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-lg font-bold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 border border-stone-200/50 hover:shadow-xl transition-all duration-300 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">{method.title}</h3>
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-stone-600 mb-2 text-lg">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-stone-200/50">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-amber-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-stone-800 mb-4">Thank You!</h3>
                    <p className="text-stone-600 text-lg mb-6">
                      🎉 Welcome to the <span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-emerald-700 font-bold">A</span><span className="text-amber-700">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-emerald-700 font-bold">I</span><span className="text-amber-700">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> community!
                    </p>
                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/50">
                      <p className="text-amber-700 font-medium">
                        🎉 Welcome to the <span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-emerald-700 font-bold">A</span><span className="text-amber-700">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-emerald-700 font-bold">I</span><span className="text-amber-700">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> community!
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-stone-800 mb-4">Send us a Message</h2>
                      <p className="text-stone-600 text-lg">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-3">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-3">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-3">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label htmlFor="course" className="block text-sm font-semibold text-stone-700 mb-3">
                            Interested Course
                          </label>
                          <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          >
                            <option value="">Select a course</option>
                            <option value="web-development">Web Development</option>
                            <option value="it-operations">IT Operations</option>
                            <option value="mobile-development">Mobile App Development</option>
                            <option value="artificial-intelligence">Artificial Intelligence</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-3">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                          placeholder="Tell us about your goals and any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-5 rounded-2xl font-bold text-lg hover:from-amber-800 hover:to-amber-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-bold text-stone-800">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-stone-200 last:border-b-0">
                      <span className="text-stone-700 font-medium">{schedule.day}</span>
                      <span className="text-stone-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200/50">
                <h3 className="text-xl font-bold text-amber-800 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <button className="w-full text-left bg-white rounded-2xl p-4 hover:bg-amber-50 transition-colors duration-300 border border-amber-200/50 shadow-sm hover:shadow-md">
                    <div className="font-semibold text-stone-800 mb-1">Schedule a Call</div>
                    <div className="text-sm text-stone-600">Book a free consultation</div>
                  </button>
                  <button className="w-full text-left bg-white rounded-2xl p-4 hover:bg-amber-50 transition-colors duration-300 border border-amber-200/50 shadow-sm hover:shadow-md">
                    <div className="font-semibold text-stone-800 mb-1">Campus Tour</div>
                    <div className="text-sm text-stone-600">Visit our facilities</div>
                  </button>
                  <button className="w-full text-left bg-white rounded-2xl p-4 hover:bg-amber-50 transition-colors duration-300 border border-amber-200/50 shadow-sm hover:shadow-md">
                    <div className="font-semibold text-stone-800 mb-1">Download Brochure</div>
                    <div className="text-sm text-stone-600">Get detailed course info</div>
                  </button>
                </div>
              </div>

              {/* Support Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50 shadow-lg">
                <h3 className="text-xl font-bold text-stone-800 mb-6">Our Commitment</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-800">24h Response</div>
                      <div className="text-sm text-stone-600">We reply within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-stone-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-800">Expert Support</div>
                      <div className="text-sm text-stone-600">Industry professionals</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-800">Global Standards</div>
                      <div className="text-sm text-stone-600">World-class education</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Find Us</h2>
            <p className="text-stone-600 text-lg">
              Located in the heart of Bengaluru's tech hub, Electronic City
            </p>
          </div>
          
          <div className="bg-stone-100 rounded-3xl h-96 flex items-center justify-center border border-stone-200">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-stone-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-stone-800 mb-2">Interactive Map</h3>
              <p className="text-stone-600 mb-4">
                123 Tech Park, Electronic City<br />
                Bengaluru, Karnataka 560100
              </p>
              <button className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;