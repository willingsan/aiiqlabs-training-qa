import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import About from '../components/About';
import CourseCarousel from '../components/CourseCarousel';
import Contact from '../components/Contact';
import { courses } from '../data/courses';

const HomePage: React.FC = () => {
  // Get featured courses (first 6 courses)
  const featuredCourses = courses.slice(0, 6);
  
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <About />
      <CourseCarousel 
        courses={featuredCourses}
        title="Featured Courses"
        subtitle="Discover our most popular courses designed by industry experts to advance your career."
        showAll={true}
      />
      <Contact />
    </div>
  );
};

export default HomePage;