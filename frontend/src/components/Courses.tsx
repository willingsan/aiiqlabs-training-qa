import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChevronRight, Star, BookOpen, Award } from 'lucide-react';
import { courses, categories } from '../data/courses';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-stone-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, #D4B896 1px, transparent 1px), radial-gradient(circle at 70% 30%, #A8956B 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200/50 mb-6">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">Course Catalog</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-6">
            Master In-Demand 
            <span className="text-amber-700 relative">
              {' '}Skills
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 transform -skew-x-12"></div>
            </span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, practical courses designed to take you from beginner to professional. 
            Each program includes real projects, expert mentorship, and career guidance.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
              selectedCategory === 'all'
                ? 'bg-amber-700 text-white shadow-xl scale-105'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:scale-105'
            }`}
          >
            <span className="relative z-10">All Courses</span>
            {selectedCategory === 'all' && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800"></div>
            )}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                selectedCategory === category.id
                  ? 'bg-amber-700 text-white shadow-xl scale-105'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:scale-105'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-current" />
                  <span className="text-xs font-semibold text-stone-800">4.9</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-emerald-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/course/${course.id}`}
                    className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-emerald-800 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-stone-600 leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>
                
                {/* Course Meta */}
                <div className="flex items-center gap-6 text-sm text-stone-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Max 12 students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Certificate</span>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-stone-800 mb-3">Technologies You'll Master:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-200 hover:bg-emerald-100 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 3 && (
                      <span className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-xs font-medium border border-stone-200">
                        +{course.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link 
                  to={`/course/${course.id}`}
                  className="w-full bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-4 rounded-2xl font-semibold hover:from-emerald-800 hover:to-emerald-900 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Now
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-3xl p-12 border border-emerald-200/50">
            <h3 className="text-3xl font-bold text-stone-800 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-stone-600 mb-8 max-w-2xl mx-auto text-lg">
              We offer custom training programs tailored to your specific needs. 
              Let's discuss how we can help you achieve your learning goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-amber-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-center">
                Request Custom Training
              </Link>
              <Link to="/contact" className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full font-semibold hover:border-amber-300 hover:text-amber-700 transition-colors duration-300 text-center">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;