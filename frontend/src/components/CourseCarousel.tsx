import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChevronRight, Star, Award, ChevronLeft } from 'lucide-react';
import { Course } from '../types';

interface CourseCarouselProps {
  courses: Course[];
  title: string;
  subtitle?: string;
  showAll?: boolean;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ 
  courses, 
  title, 
  subtitle,
  showAll = true 
}) => {
  const scrollLeft = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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

  const containerId = `course-carousel-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base text-stone-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
          {showAll && (
            <div className="mt-4">
              <Link
                to="/courses" 
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold transition-colors group"
              >
                View All Courses
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Course Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollLeft(containerId)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 text-stone-600 group-hover:text-amber-700" />
          </button>
          
          <button
            onClick={() => scrollRight(containerId)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-stone-600 group-hover:text-amber-700" />
          </button>

          {/* Scrollable Container */}
          <div
            id={containerId}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-80 group bg-white rounded-lg overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500 fill-current" />
                    <span className="text-xs font-semibold text-stone-800">4.9</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-md text-xs font-bold">
                    ₹25,000
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-stone-600 leading-relaxed mb-3 line-clamp-2 text-sm">
                    {course.description}
                  </p>
                  
                  {/* Course Meta */}
                  <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>1,234 students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2">
                      {course.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-stone-100 text-stone-600 rounded-md text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                      {course.tools.length > 3 && (
                        <span className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">
                          +{course.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link 
                    to={`/course/${course.id}`}
                    className="w-full bg-amber-600 text-white py-2 px-4 rounded-md font-medium hover:bg-amber-700 transition-colors text-center block text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        {showAll && (
          <div className="text-center mt-6 md:hidden">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 bg-amber-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors text-sm"
            >
              View All Courses
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CourseCarousel;