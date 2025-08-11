import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, MessageSquare, Calendar, Users } from 'lucide-react';
import { ContactForm } from '../types';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = parseInt(end.toString().replace(/\D/g, ''));

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endCount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-xl font-bold text-stone-800 mb-1">
      {count}{suffix}
    </div>
  );
};

const Contact: React.FC = () => {
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
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
      details: ['123 Tech Street, Innovation District', 'San Francisco, CA 94105'],
      color: 'from-stone-600 to-stone-700'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon - Fri, 9am - 6pm PST'],
      color: 'from-amber-600 to-amber-700'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@aiiqlabs.com', 'admissions@aiiqlabs.com'],
      color: 'from-stone-500 to-stone-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/30 to-stone-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(30deg, #D4B896 12%, transparent 12.5%, transparent 87%, #D4B896 87.5%, #D4B896), linear-gradient(150deg, #D4B896 12%, transparent 12.5%, transparent 87%, #D4B896 87.5%, #D4B896)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-stone-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-stone-200/10 to-amber-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200/50 mb-6">
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            Start Your Learning 
            <span className="text-amber-700 relative">
              {' '}Journey
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 transform -skew-x-12"></div>
            </span>
          </h2>
          
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Get in touch with us to discuss your goals 
            and find the perfect course for your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Let's Connect</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                We're here to help you every step of the way. Whether you have questions 
                about our courses, need guidance on your learning path, or want to discuss 
                corporate training options, our team is ready to assist.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-stone-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 mb-1">{method.title}</h4>
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-stone-600 mb-1 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200/50">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Quick Actions
              </h4>
              <div className="space-y-2">
                <button className="w-full text-left bg-white rounded-md p-3 hover:bg-amber-50 transition-colors duration-300 border border-amber-200/50">
                  <div className="font-semibold text-stone-800 text-sm">Schedule a Call</div>
                  <div className="text-sm text-stone-600">Book a free consultation</div>
                </button>
                <button className="w-full text-left bg-white rounded-md p-3 hover:bg-amber-50 transition-colors duration-300 border border-amber-200/50">
                  <div className="font-semibold text-stone-800 text-sm">Campus Tour</div>
                  <div className="text-sm text-stone-600">Visit our facilities</div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
           <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 lg:p-8 border border-stone-200/50">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">Thank You!</h3>
                  <p className="text-stone-600 mb-4">
                    We've received your message and will get back to you within 24 hours.
                    🎉 Welcome to the <span className="text-amber-800">&lt;</span><span className="font-mono tracking-tight italic text-emerald-800 font-bold">A</span><span className="text-amber-800">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-800">&lt;</span><span className="font-mono tracking-tight italic text-emerald-800 font-bold">I</span><span className="text-amber-800">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> community!
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200/50">
                    <p className="text-amber-700 font-medium text-sm">
                      🎉 Welcome to the <span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-amber-700 font-bold">A</span><span className="text-amber-700">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-amber-700 font-bold">I</span><span className="text-amber-700">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> community!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">Send us a Message</h3>
                    <p className="text-stone-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="course" className="block text-sm font-semibold text-stone-700 mb-2">
                          Interested Course
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
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
                      <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                        placeholder="Tell us about your goals and any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-4 rounded-lg font-bold hover:from-amber-800 hover:to-amber-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-stone-200/50">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <AnimatedCounter end={24} suffix="/7" />
                <div className="text-stone-600 text-sm">Support Available</div>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-stone-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-stone-800 mb-1">
                  <AnimatedCounter end={24} suffix="h" />
                </div>
                <div className="text-stone-600 text-sm">Response Time</div>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <AnimatedCounter end={100} suffix="%" />
                <div className="text-stone-600 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;