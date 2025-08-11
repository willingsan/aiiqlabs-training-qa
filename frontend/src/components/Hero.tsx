import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, Star, Users, Award, Building2, GraduationCap, Sparkles, Zap, TrendingUp } from 'lucide-react';

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
    <div ref={ref} className="text-xl font-bold text-amber-700">
      {count}{suffix}
    </div>
  );
};

// Corporate counter component with different styling
const CorporateCounter = ({ end, duration = 2000, suffix = '' }) => {
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
    <div ref={ref} className="text-xl font-bold text-stone-700">
      {count}{suffix}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden animate-fade-in">
      {/* Main Hero Banner with Text */}
      <div className="relative h-[85vh] pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 flex items-center justify-center overflow-hidden">
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-400/20 rounded-lg animate-bounce hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-stone-400/20 rounded-lg animate-bounce hover:rotate-12 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-500/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional Animated Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-amber-300/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-stone-400/20 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 border border-amber-500/40 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8 hover:bg-amber-500/30 hover:scale-105 transition-all duration-300 animate-fade-in-delay">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-sm font-semibold text-amber-300">#1 Tech Training Platform in India</span>
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-8 animate-slide-up-delay">
            Master Tomorrow's 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 relative animate-gradient hover:scale-105 transition-transform duration-300 inline-block">
              {' '}Technology
            </span>
            <br />
            <span className="text-4xl sm:text-5xl text-stone-300 hover:text-stone-200 transition-colors duration-300">
              Today
            </span>
          </h1>
          
          <p className="text-xl text-stone-300 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in-slow hover:text-stone-200 transition-colors duration-300">
            Transform your career or upskill your team with expert-led training programs. 
            Choose your path: Individual growth or enterprise transformation.
          </p>
        </div>
      </div>

      {/* Training Sections - Split Screen */}
      <div className="w-full flex min-h-[60vh]">
        {/* Individual Training Section - Left Side */}
        <div className="flex-1 relative bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-200/30 flex items-center justify-center overflow-hidden group hover:from-amber-100 hover:via-amber-200/50 hover:to-amber-300/30 transition-all duration-500">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, #F59E0B 2px, transparent 2px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-300/30 rounded-full animate-pulse group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-all duration-500"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-amber-400/40 rounded-lg rotate-45 animate-bounce group-hover:rotate-90 group-hover:scale-110 transition-all duration-500"></div>
          
          {/* Creative Image Blend */}
          <div className="absolute top-10 right-0 w-64 h-64 opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Individual learning"
              className="w-full h-full object-cover rounded-full blur-sm"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-8 max-w-md py-12 animate-slide-in-left">
            <div className="mb-6">
              <GraduationCap className="w-16 h-16 text-amber-600 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <h2 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-amber-800 transition-colors duration-300">
                Individual
                <span className="block text-amber-700 group-hover:text-amber-800 transition-colors duration-300">Training</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6 text-sm group-hover:text-stone-700 transition-colors duration-300">
                Transform your career with personalized learning paths, expert mentorship, 
                and hands-on projects designed for individual growth.
              </p>
            </div>
            
            {/* Individual Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-in-up">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/90 transition-all duration-300">
                <AnimatedCounter end={500} suffix="+" />
                <div className="text-sm text-stone-600">Students</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/90 transition-all duration-300">
                <AnimatedCounter end={95} suffix="%" />
                <div className="text-sm text-stone-600">Success Rate</div>
              </div>
            </div>
            
            <Link to="/courses" className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-2 hover:scale-110 mb-8 animate-bounce-subtle">
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Corporate Training Section - Right Side */}
        <div className="flex-1 relative bg-gradient-to-br from-stone-100 via-stone-200/50 to-stone-300/30 flex items-center justify-center overflow-hidden group hover:from-stone-200 hover:via-stone-300/50 hover:to-stone-400/30 transition-all duration-500">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, #57534E 2px, transparent 2px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 border-2 border-stone-400/30 rounded-full animate-pulse group-hover:scale-110 group-hover:border-stone-500/50 transition-all duration-500"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-stone-400/20 rounded-full blur-xl group-hover:bg-stone-500/30 transition-all duration-500"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-stone-500/40 rounded-lg rotate-45 animate-bounce group-hover:rotate-90 group-hover:scale-110 transition-all duration-500"></div>
          
          {/* Creative Image Blend */}
          <div className="absolute top-10 left-0 w-64 h-64 opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Corporate training"
              className="w-full h-full object-cover rounded-full blur-sm"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-8 max-w-md py-12 animate-slide-in-right">
            <div className="mb-6">
              <Building2 className="w-16 h-16 text-stone-600 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <h2 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-stone-900 transition-colors duration-300">
                Corporate
                <span className="block text-stone-700 group-hover:text-stone-800 transition-colors duration-300">Training</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6 text-sm group-hover:text-stone-700 transition-colors duration-300">
                Upskill your entire team with customized training programs, 
                enterprise solutions, and dedicated support for organizational growth.
              </p>
            </div>
            
            {/* Corporate Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-in-up">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/90 transition-all duration-300">
                <CorporateCounter end={25} suffix="+" />
                <div className="text-sm text-stone-600">Companies</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/90 transition-all duration-300">
                <CorporateCounter end={500} suffix="+" />
                <div className="text-sm text-stone-600">Employees</div>
              </div>
            </div>
            
            <Link to="/contact" className="group bg-gradient-to-r from-stone-600 to-stone-700 text-white px-6 py-3 rounded-xl font-bold hover:from-stone-700 hover:to-stone-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-stone-500/25 transform hover:-translate-y-2 hover:scale-110 mb-8 animate-bounce-subtle">
              <TrendingUp className="w-5 h-5 group-hover:animate-pulse" />
              Get Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Vertical Divider Line - Only for bottom section */}
      <div className="absolute left-1/2 top-[85vh] bottom-0 w-px bg-gradient-to-b from-stone-300/50 via-stone-300/50 to-transparent transform -translate-x-1/2 z-10"></div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.2s both; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.4s both; }
        .animate-fade-in-slow { animation: fade-in 1.2s ease-out 0.6s both; }
        .animate-fade-in-up { animation: slide-up 0.6s ease-out 0.8s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 1s both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 1s both; }
        .animate-bounce-subtle { 
          animation: bounce 2s infinite;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </section>
  );
};

export default Hero;