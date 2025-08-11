import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Sparkles, TrendingUp, Zap, Target, Users, Award, Clock, Star, ChevronRight } from 'lucide-react';
import { courses, categories } from '../data/courses';
import CourseCarousel from '../components/CourseCarousel';

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
const AnimatedCounter = ({ end, duration = 1000, suffix = '' }) => {
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
    <div ref={ref} className="text-3xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

// Animated section wrapper
const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-50px)';
      case 'right': return 'translateX(50px)';
      case 'down': return 'translateY(-50px)';
      default: return 'translateY(50px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = categories.find(cat => cat.id === categoryId);
  const categoryCourses = courses.filter(course => course.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Category Not Found</h1>
          <p className="text-stone-600 mb-8">The category you're looking for doesn't exist.</p>
          <button className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #F59E0B 2px, transparent 2px), radial-gradient(circle at 80% 50%, #D97706 2px, transparent 2px)`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-400/20 rounded-lg animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-stone-400/20 rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-500/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            {/* Enhanced Badge */}
            <AnimatedSection delay={50}>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-sm font-semibold text-amber-300">{category.name} Specialization</span>
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </AnimatedSection>
            
            {/* Enhanced Title with Staggered Animation */}
            <AnimatedSection delay={100}>
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
                Master {category.name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 relative animate-gradient">
                  {category.name.split(' ').slice(-1)[0]}
                </span>
                <br />
                <span className="text-4xl sm:text-5xl text-stone-300">
                  Professional Courses
                </span>
              </h1>
            </AnimatedSection>
            
            {/* Enhanced Description */}
            <AnimatedSection delay={150}>
              <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed mb-12">
                {category.description} Transform your career with our comprehensive, industry-leading 
                courses designed by experts who've worked at top tech companies worldwide.
              </p>
            </AnimatedSection>

            {/* Enhanced Animated Stats */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                <AnimatedSection delay={250} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={categoryCourses.length} suffix="+" />
                    <div className="text-stone-400 text-sm">Available Courses</div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={300} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-stone-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={2500} suffix="+" />
                    <div className="text-stone-400 text-sm">Students Enrolled</div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={350} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={95} suffix="%" />
                    <div className="text-stone-400 text-sm">Success Rate</div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={400} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={100} suffix="%" />
                    <div className="text-stone-400 text-sm">Certified</div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Call to Action Buttons */}
            <AnimatedSection delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses" className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    Start Learning Today
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="group border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-lg font-bold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Get Expert Guidance
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Section */}
      <AnimatedSection>
        <section className="py-16 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryCourses.length > 0 ? (
            <CourseCarousel 
              courses={categoryCourses}
              title="Available Courses"
              subtitle={`Choose from our carefully crafted ${category.name.toLowerCase()} courses designed by industry experts.`}
              showAll={false}
            />
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-stone-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-800 mb-4">No courses available</h3>
              <p className="text-stone-600 mb-8">We're working on adding more courses to this category.</p>
              <Link to="/courses" className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
                View All Courses
              </Link>
            </div>
          )}
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={100}>
            <h2 className="text-4xl font-bold mb-6">Ready to Master {category.name}?</h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto">
              Join our {category.name.toLowerCase()} program and gain the skills that top companies are looking for. 
              Start your journey today with expert guidance and hands-on projects.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center hover:scale-105">
                Enroll Now
              </Link>
              <Link to="/contact" className="border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-lg font-semibold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 text-center hover:scale-105">
                Schedule Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default CategoryPage;