import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Target, CheckCircle, TrendingUp } from 'lucide-react';

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
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
      {count}{suffix}
    </div>
  );
};

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Students Trained', value: '500+', color: 'from-amber-600 to-amber-700' },
    { icon: Award, label: 'Industry Experts', value: '25+', color: 'from-stone-600 to-stone-700' },
    { icon: BookOpen, label: 'Courses Available', value: '50+', color: 'from-amber-500 to-amber-600' },
    { icon: Target, label: 'Success Rate', value: '95%', color: 'from-amber-500 to-amber-600' }
  ];

  const features = [
    'Industry-Aligned Curriculum',
    'Expert Mentorship Program',
    'Hands-on Project Experience',
    'Career Placement Support',
    'Flexible Learning Schedule',
    'Lifetime Community Access'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-stone-50 via-amber-50/30 to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #D4B896, #D4B896 1px, transparent 1px, transparent 20px)`,
          }}></div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-stone-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-stone-200/10 to-amber-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200/50 mb-6">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">About <span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-emerald-700 font-bold">A</span><span className="text-amber-700">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-emerald-700 font-bold">I</span><span className="text-amber-700">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span></span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-5 leading-tight">
                Empowering the Next Generation of 
                <span className="text-amber-700 relative">
                  {' '}Tech Leaders
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 transform -skew-x-12"></div>
                </span>
              </h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-base text-stone-600 leading-relaxed">
                Founded by industry veterans with over 15 years of combined experience, 
                <span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-amber-700 font-bold">A</span><span className="text-amber-700">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-amber-700 font-bold">I</span><span className="text-amber-700">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> bridges the gap between academic learning and real-world 
                application. We believe in transformative education that goes beyond theory.
              </p>
              
              <p className="text-stone-600 leading-relaxed">
                Our mission is to democratize access to cutting-edge technology education. 
                Whether you're starting your tech journey or advancing your career, we 
                provide the expertise, mentorship, and community you need to thrive in 
                today's competitive landscape.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-stone-700 text-sm font-medium group-hover:text-amber-700 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-center">
                Learn More About Us
              </Link>
              <Link to="/contact" className="border-2 border-stone-300 text-stone-700 px-6 py-3 rounded-lg font-semibold hover:border-amber-300 hover:text-amber-700 transition-colors duration-300 text-center">
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-stone-200/50 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <AnimatedCounter end={stat.value} />
                <div className="text-stone-600 font-medium text-sm">
                  {stat.label}
                </div>
                
                {/* Progress indicator */}
                <div className="mt-3 w-full bg-stone-200 rounded-full h-1">
                  <div 
                    className={`bg-gradient-to-r ${stat.color} h-1 rounded-full transition-all duration-1000 delay-500`}
                    style={{ width: index === 0 ? '85%' : index === 1 ? '70%' : index === 2 ? '90%' : '95%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-stone-200/50 shadow-lg">
            <h3 className="text-xl font-bold text-stone-800 mb-3">
              Ready to Transform Your Career?
            </h3>
            <p className="text-stone-600 mb-4 max-w-2xl mx-auto text-sm">
              Join our <span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-amber-700 font-bold">A</span><span className="text-amber-700">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-700">&lt;</span><span className="font-mono tracking-tight italic text-amber-700 font-bold">I</span><span className="text-amber-700">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> community of successful graduates who've landed roles at top tech companies 
              and startups worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-amber-50 px-4 py-3 rounded-lg border border-amber-200 flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-amber-700 font-medium text-sm">Google</span>
              </div>
              <div className="bg-stone-50 px-4 py-3 rounded-lg border border-stone-200 flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill="#00BCF2"/>
                </svg>
                <span className="text-stone-700 font-medium text-sm">Microsoft</span>
              </div>
              <div className="bg-amber-50 px-4 py-3 rounded-lg border border-amber-200 flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
                <span className="text-amber-700 font-medium text-sm">Meta</span>
              </div>
              <div className="bg-stone-50 px-4 py-3 rounded-lg border border-stone-200 flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595 2.779-1.062 5.12-2.574 7.024-4.534.062-.062.14-.093.23-.093.116 0 .209.046.279.14.023.023.023.058 0 .104-.348.417-.85.977-1.508 1.68-.658.703-1.407 1.334-2.248 1.89-.84.556-1.778 1.002-2.816 1.339-1.037.337-2.112.506-3.225.506-2.458 0-4.785-.651-6.98-1.953-2.195-1.302-4.084-3.008-5.668-5.116-.023-.047-.023-.093 0-.14.023-.046.058-.07.104-.07.093 0 .186.047.279.14 1.445 1.445 3.12 2.574 5.02 3.386 1.9.812 3.893 1.218 5.98 1.218 1.62 0 3.195-.279 4.727-.837 1.532-.558 2.9-1.334 4.106-2.33.07-.07.14-.07.21 0 .07.07.07.14 0 .21-1.252 1.252-2.738 2.238-4.457 2.958-1.719.72-3.531 1.08-5.436 1.08-2.32 0-4.548-.558-6.683-1.674C3.694 19.425 1.81 18.02.045 18.02z" fill="#FF9900"/>
                  <path d="M18.996 1.484c-1.89 0-3.47.651-4.741 1.953-1.271 1.302-1.907 2.97-1.907 5.004 0 1.62.372 3.008 1.116 4.164.744 1.156 1.674 2.042 2.79 2.658 1.116.616 2.307.924 3.572.924 1.89 0 3.47-.651 4.741-1.953 1.271-1.302 1.907-2.97 1.907-5.004 0-1.62-.372-3.008-1.116-4.164-.744-1.156-1.674-2.042-2.79-2.658C21.452 1.792 20.261 1.484 18.996 1.484z" fill="#FF9900"/>
                </svg>
                <span className="text-stone-700 font-medium text-sm">Amazon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;