import React from 'react';
import { Code2, Server, Smartphone, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/courses';

const iconMap = {
  Code2,
  Server,
  Smartphone,
  Brain
};

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-stone-50 to-amber-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, #D4B896 25%, transparent 25%), linear-gradient(-45deg, #D4B896 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4B896 75%), linear-gradient(-45deg, transparent 75%, #D4B896 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200/50 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm font-medium text-amber-700">Training Domains</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
            Choose Your 
            <span className="text-amber-700 relative">
              {' '}Learning Path
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 transform -skew-x-12"></div>
            </span>
          </h2>
          
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover our expertly crafted learning paths designed by industry veterans. 
            Each domain offers hands-on experience with cutting-edge technologies and real-world projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200/50 hover:border-amber-300/50 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-stone-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-8 h-8 text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
                    </div>
                    {/* Floating number */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  {/* Course Count */}
                  <div className="flex items-center justify-between">
                    <div className="text-amber-700 font-bold">
                      {category.courses.length} Courses
                    </div>
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-stone-600 mb-6">Not sure which path to choose?</p>
          <button className="bg-stone-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-900 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;