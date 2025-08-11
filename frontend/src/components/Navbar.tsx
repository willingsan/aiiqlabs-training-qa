import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  const courseCategories = [
    { name: 'Web Development', path: '/category/web-development' },
    { name: 'IT Operations', path: '/category/it-operations' },
    { name: 'Mobile Development', path: '/category/mobile-development' },
    { name: 'Artificial Intelligence', path: '/category/artificial-intelligence' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm bg-white/60 border-stone-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Code2 className="w-8 h-8 text-amber-600 group-hover:text-amber-700 transition-colors" />
            <span className="text-xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
              <span className="text-amber-600">&lt;</span><span className="font-mono tracking-tight italic text-emerald-600 font-bold">A</span><span className="text-amber-600">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-600">&lt;</span><span className="font-mono tracking-tight italic text-emerald-600 font-bold">I</span><span className="text-amber-600">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-amber-700' 
                  : 'text-stone-700 hover:text-amber-700'
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className="flex items-center gap-1 font-medium text-stone-700 hover:text-amber-700 transition-colors"
              >
                Courses
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/50 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                  <Link
                    to="/courses"
                   className="block px-6 py-3 text-stone-700 hover:text-amber-700 hover:bg-white/85 transition-colors font-medium"
                  >
                    All Courses
                  </Link>
                  <div className="border-t border-stone-200 my-2"></div>
                  {courseCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                     className="block px-6 py-2 text-stone-600 hover:text-amber-700 hover:bg-white/75 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-amber-700' 
                  : 'text-stone-700 hover:text-amber-700'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-amber-700' 
                  : 'text-stone-700 hover:text-amber-700'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-amber-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="space-y-2">
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-700 hover:text-amber-700 hover:bg-stone-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/courses"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname.startsWith('/courses') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-700 hover:text-amber-700 hover:bg-stone-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>

              {/* Mobile Course Categories */}
              {courseCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="block px-8 py-2 rounded-lg font-medium text-stone-600 hover:text-amber-700 hover:bg-stone-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/about"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-700 hover:text-amber-700 hover:bg-stone-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-amber-700 bg-amber-50' 
                    : 'text-stone-700 hover:text-amber-700 hover:bg-stone-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block mx-4 mt-4 bg-amber-700 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-amber-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;