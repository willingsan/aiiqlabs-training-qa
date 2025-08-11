import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Filter, Search, TrendingUp, Zap, Target, Sparkles, Users, Award, ChevronRight } from 'lucide-react';
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
      className={`transition-all duration-1000 ease-out ${className}`}
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

const CoursesPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popular');
  
  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(course.level);
    const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && levelMatch && searchMatch;
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Animations */}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            {/* Enhanced Badge */}
            <AnimatedSection delay={200}>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-sm font-semibold text-amber-300">Premium Course Collection</span>
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </AnimatedSection>
            
            {/* Enhanced Title with Staggered Animation */}
            <AnimatedSection delay={400}>
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
                Master Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 relative animate-gradient">
                  {' '}Future
                </span>
                <br />
                <span className="text-4xl sm:text-5xl text-stone-300">
                  With Expert-Led Courses
                </span>
              </h1>
            </AnimatedSection>
            
            {/* Enhanced Description */}
            <AnimatedSection delay={600}>
              <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Transform your career with our comprehensive collection of industry-leading courses. 
                From beginner-friendly introductions to advanced masterclasses, we have everything 
                you need to excel in today's competitive tech landscape.
              </p>
            </AnimatedSection>

            {/* Enhanced Animated Stats */}
            <AnimatedSection delay={800}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                <AnimatedSection delay={1000} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={courses.length} suffix="+" />
                    <div className="text-stone-400 text-sm">Expert Courses</div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={1200} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-stone-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={10000} suffix="+" />
                    <div className="text-stone-400 text-sm">Students</div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={1400} direction="up">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <AnimatedCounter end={95} suffix="%" />
                    <div className="text-stone-400 text-sm">Success Rate</div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={1600} direction="up">
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
            <AnimatedSection delay={1800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 hover:scale-105">
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    Start Learning Today
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-lg font-bold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    View Success Stories
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filters with Animation */}
      <AnimatedSection>
        <section className="py-8 bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <AnimatedSection delay={200} direction="left">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 focus:scale-105"
                  />
                </div>
              </AnimatedSection>

              {/* View Toggle and Sort */}
              <AnimatedSection delay={400} direction="right">
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 focus:scale-105"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price">Price: Low to High</option>
                  </select>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Filters and Results with Staggered Animations */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <AnimatedSection delay={200} direction="left">
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-white via-stone-50/30 to-amber-50/20 rounded-3xl p-8 sticky top-24 transform transition-all duration-500 hover:shadow-2xl border border-stone-200/30 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Filter className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-800">Filter Courses</h3>
                      <p className="text-sm text-stone-500">Find your perfect course</p>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center shadow-sm">
                        <BookOpen className="w-4 h-4 text-amber-700" />
                      </div>
                      <h4 className="text-lg font-bold text-stone-800">Categories</h4>
                    </div>
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const count = courses.filter(c => c.category === category.id).length;
                        return (
                          <label key={category.id} className="flex items-center group cursor-pointer p-4 rounded-2xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-stone-50 transition-all duration-300 border border-transparent hover:border-amber-200/50 hover:shadow-sm">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category.id)}
                              onChange={() => handleCategoryChange(category.id)}
                              className="mr-4 text-amber-600 focus:ring-amber-500 focus:ring-2 w-5 h-5"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-stone-700 group-hover:text-amber-800 transition-colors font-semibold">{category.name}</span>
                                <span className="px-2 py-1 bg-stone-100 group-hover:bg-amber-100 text-stone-600 group-hover:text-amber-700 rounded-full text-xs font-medium transition-all duration-300">{count}</span>
                              </div>
                              <div className="text-xs text-stone-500 group-hover:text-amber-600 transition-colors mt-1">{category.description.split('.')[0]}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Level Filter */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center shadow-sm">
                        <Target className="w-4 h-4 text-stone-700" />
                      </div>
                      <h4 className="text-lg font-bold text-stone-800">Difficulty Level</h4>
                    </div>
                    <div className="space-y-2">
                      {['Beginner', 'Intermediate', 'Advanced'].map((level) => {
                        const count = courses.filter(c => c.level === level).length;
                        const levelColors = {
                          'Beginner': { 
                            badge: 'text-green-700 bg-gradient-to-r from-green-100 to-green-200 border-green-300',
                            hover: 'hover:from-green-50 hover:to-amber-50 hover:border-green-200/50'
                          },
                          'Intermediate': { 
                            badge: 'text-yellow-700 bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300',
                            hover: 'hover:from-yellow-50 hover:to-amber-50 hover:border-yellow-200/50'
                          },
                          'Advanced': { 
                            badge: 'text-red-700 bg-gradient-to-r from-red-100 to-red-200 border-red-300',
                            hover: 'hover:from-red-50 hover:to-amber-50 hover:border-red-200/50'
                          }
                        };
                        return (
                          <label key={level} className={`flex items-center group cursor-pointer p-4 rounded-2xl hover:bg-gradient-to-r transition-all duration-300 border border-transparent hover:shadow-sm ${levelColors[level as keyof typeof levelColors].hover}`}>
                            <input
                              type="checkbox"
                              checked={selectedLevels.includes(level)}
                              onChange={() => handleLevelChange(level)}
                              className="mr-4 text-amber-600 focus:ring-amber-500 focus:ring-2 w-5 h-5"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${levelColors[level as keyof typeof levelColors].badge}`}>
                                  {level}
                                </span>
                                <span className="px-2 py-1 bg-stone-100 group-hover:bg-stone-200 text-stone-600 group-hover:text-stone-700 rounded-full text-xs font-medium transition-all duration-300">
                                  {count}
                                </span>
                              </div>
                              <div className="text-xs text-stone-500 group-hover:text-stone-600 transition-colors">{count} courses available</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-gradient-to-r from-white to-stone-50 px-4 text-xs text-stone-500 font-medium">Actions</span>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedLevels([]);
                      setSearchTerm('');
                    }}
                    className="w-full bg-gradient-to-r from-stone-600 to-stone-700 text-white py-4 rounded-2xl font-bold hover:from-stone-700 hover:to-stone-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-6"
                  >
                    <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                      <Filter className="w-3 h-3" />
                    </div>
                    Clear All Filters
                  </button>

                  {/* Filter Stats */}
                  <div className="p-6 bg-gradient-to-br from-amber-50 via-amber-50/50 to-stone-50 rounded-2xl border border-amber-200/30 shadow-inner">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-sm">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-amber-700 mb-2">{filteredCourses.length}</div>
                      <div className="text-sm text-amber-600 font-medium">Courses Found</div>
                      <div className="text-xs text-stone-500 mt-1">
                        {filteredCourses.length === courses.length ? 'Showing all courses' : `Filtered from ${courses.length} total`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Course Results */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <AnimatedSection delay={400}>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-stone-600">
                    Showing <span className="font-semibold text-amber-700">{filteredCourses.length}</span> of {courses.length} courses
                  </p>
                </div>
              </AnimatedSection>

              {/* Course Grid/List with Staggered Animation */}
              <AnimatedSection delay={600}>
                {filteredCourses.length > 0 ? (
                  <CourseCarousel 
                    courses={filteredCourses}
                    title="Available Courses"
                    subtitle={`Showing ${filteredCourses.length} of ${courses.length} courses`}
                    showAll={false}
                  />
              ) : (
                /* No Results */
                  <div className="text-center py-16">
                    <BookOpen className="w-16 h-16 text-stone-400 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">No courses found</h3>
                    <p className="text-stone-600 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedLevels([]);
                        setSearchTerm('');
                      }}
                      className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Animation */}
      <AnimatedSection>
        <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection delay={200}>
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
                Get notified about new courses, special offers, and learning resources.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-stone-800 focus:ring-2 focus:ring-amber-500 transition-all duration-300 focus:scale-105"
                />
                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default CoursesPage;