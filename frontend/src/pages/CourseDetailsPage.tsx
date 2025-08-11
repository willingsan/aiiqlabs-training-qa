import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Users, Award, Star, ChevronRight, Play, Download, Zap, Sparkles, PlayCircle,
  CheckCircle, Calendar, Globe, BookOpen, Target, User,
  MessageCircle, Share2, Heart, ArrowLeft
} from 'lucide-react';
import { courses } from '../data/courses';

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
const AnimatedCounter = ({ end, duration = 1500, suffix = '', decimal = false }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = decimal ? parseFloat(end.toString()) : parseInt(end.toString().replace(/\D/g, ''));

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = decimal 
        ? (easeOutQuart * endCount).toFixed(1)
        : Math.floor(easeOutQuart * endCount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration, decimal]);

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
      className={`transition-all duration-700 ease-out ${className}`}
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

const CourseDetailsPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Course Not Found</h1>
          <p className="text-stone-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  const instructor = {
    name: 'Rajesh Kumar',
    title: 'Senior Full-Stack Developer',
    experience: '8+ years',
    students: '1,200+',
    courses: '12',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Experienced software engineer with expertise in modern web technologies. Previously worked at Google and Microsoft, now dedicated to teaching the next generation of developers.'
  };

  const curriculum = [
    {
      title: 'Introduction to the Course',
      duration: '2 hours',
      lectures: 5,
      lessons: [
        { title: 'Course Introduction and Overview', duration: '15 min', type: 'video', preview: true },
        { title: 'What You Will Learn', duration: '10 min', type: 'video', preview: true },
        { title: 'Course Resources and Materials', duration: '8 min', type: 'reading', preview: false },
        { title: 'Setting up Development Environment', duration: '35 min', type: 'video', preview: false },
        { title: 'Your First Project Setup', duration: '25 min', type: 'exercise', preview: false }
      ]
    },
    {
      title: 'Core Fundamentals',
      duration: '6 hours',
      lectures: 12,
      lessons: [
        { title: 'Understanding the Basics', duration: '30 min', type: 'video', preview: false },
        { title: 'Key Concepts Explained', duration: '45 min', type: 'video', preview: false },
        { title: 'Practical Examples', duration: '40 min', type: 'video', preview: false },
        { title: 'Hands-on Exercise 1', duration: '60 min', type: 'exercise', preview: false },
        { title: 'Common Patterns and Best Practices', duration: '35 min', type: 'video', preview: false },
        { title: 'Working with Tools and Libraries', duration: '50 min', type: 'video', preview: false },
        { title: 'Debugging and Troubleshooting', duration: '25 min', type: 'video', preview: false },
        { title: 'Hands-on Exercise 2', duration: '45 min', type: 'exercise', preview: false },
        { title: 'Performance Optimization', duration: '30 min', type: 'video', preview: false },
        { title: 'Testing Your Code', duration: '40 min', type: 'video', preview: false },
        { title: 'Project: Building Your First Application', duration: '90 min', type: 'project', preview: false },
        { title: 'Quiz: Fundamentals Assessment', duration: '20 min', type: 'quiz', preview: false }
      ]
    },
    {
      title: 'Advanced Concepts and Techniques',
      duration: '8 hours',
      lectures: 15,
      lessons: [
        { title: 'Advanced Architecture Patterns', duration: '45 min', type: 'video', preview: false },
        { title: 'State Management Strategies', duration: '40 min', type: 'video', preview: false },
        { title: 'Advanced Routing and Navigation', duration: '35 min', type: 'video', preview: false },
        { title: 'API Integration and Data Handling', duration: '50 min', type: 'video', preview: false },
        { title: 'Authentication and Security', duration: '45 min', type: 'video', preview: false },
        { title: 'Advanced Styling Techniques', duration: '30 min', type: 'video', preview: false },
        { title: 'Performance Optimization Advanced', duration: '40 min', type: 'video', preview: false },
        { title: 'Testing Strategies and Implementation', duration: '55 min', type: 'video', preview: false },
        { title: 'Deployment and DevOps', duration: '35 min', type: 'video', preview: false },
        { title: 'Monitoring and Analytics', duration: '25 min', type: 'video', preview: false },
        { title: 'Advanced Project: E-commerce Platform', duration: '120 min', type: 'project', preview: false },
        { title: 'Code Review and Best Practices', duration: '30 min', type: 'video', preview: false },
        { title: 'Industry Case Studies', duration: '40 min', type: 'reading', preview: false },
        { title: 'Final Project Presentation', duration: '60 min', type: 'project', preview: false },
        { title: 'Course Completion and Next Steps', duration: '15 min', type: 'video', preview: false }
      ]
    },
    {
      title: 'Bonus Content and Resources',
      duration: '3 hours',
      lectures: 8,
      lessons: [
        { title: 'Industry Trends and Future Outlook', duration: '25 min', type: 'video', preview: false },
        { title: 'Career Guidance and Job Search Tips', duration: '30 min', type: 'video', preview: false },
        { title: 'Building Your Portfolio', duration: '35 min', type: 'video', preview: false },
        { title: 'Interview Preparation', duration: '40 min', type: 'video', preview: false },
        { title: 'Networking and Community Building', duration: '20 min', type: 'video', preview: false },
        { title: 'Additional Resources and Tools', duration: '15 min', type: 'reading', preview: false },
        { title: 'Bonus Project Ideas', duration: '30 min', type: 'reading', preview: false },
        { title: 'Q&A Session Recording', duration: '45 min', type: 'video', preview: false }
      ]
    }
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent course! The instructor explains complex concepts in a very simple way. Highly recommended for beginners.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Arjun Patel',
      rating: 5,
      date: '1 month ago',
      comment: 'Great practical approach with real-world projects. I was able to land a job right after completing this course.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4 text-blue-600" />;
      case 'reading':
        return <BookOpen className="w-4 h-4 text-green-600" />;
      case 'exercise':
        return <Target className="w-4 h-4 text-purple-600" />;
      case 'quiz':
        return <CheckCircle className="w-4 h-4 text-orange-600" />;
      case 'project':
        return <Award className="w-4 h-4 text-red-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-gray-600" />;
    }
  };

  const toggleSection = (sectionIndex: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionIndex) 
        ? prev.filter(index => index !== sectionIndex)
        : [...prev, sectionIndex]
    );
  };

  const getTotalDuration = () => {
    return curriculum.reduce((total, section) => {
      const hours = parseInt(section.duration.split(' ')[0]);
      return total + hours;
    }, 0);
  };

  const getTotalLectures = () => {
    return curriculum.reduce((total, section) => total + section.lectures, 0);
  };
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-stone-900 py-4 border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-stone-400 hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-stone-500" />
            <Link to="/courses" className="text-stone-400 hover:text-amber-400 transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4 text-stone-500" />
            <span className="text-amber-400 font-medium">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Link to="/courses" className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Courses
                </Link>
              </AnimatedSection>
              
              <div className="mb-8">
                {/* Enhanced Badge */}
                <AnimatedSection delay={100}>
                  <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8">
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span className={`text-sm font-semibold ${course.level === 'Beginner' ? 'text-green-300' : course.level === 'Intermediate' ? 'text-yellow-300' : 'text-red-300'}`}>
                      {course.level} Level Course
                    </span>
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                  </div>
                </AnimatedSection>
                
                {/* Enhanced Title with Staggered Animation */}
                <AnimatedSection delay={200}>
                  <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
                    {course.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 relative animate-gradient">
                      {course.title.split(' ').slice(-1)[0]}
                    </span>
                  </h1>
                </AnimatedSection>
                
                {/* Enhanced Description */}
                <AnimatedSection delay={300}>
                  <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed mb-12">
                    {course.description} Transform your career with our comprehensive, industry-leading 
                    course designed by experts who've worked at top tech companies worldwide.
                  </p>
                </AnimatedSection>
              </div>

              {/* Enhanced Animated Stats */}
              <AnimatedSection delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                  <AnimatedSection delay={500} direction="up">
                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <AnimatedCounter end={4.9} suffix="" decimal={true} />
                      <div className="text-stone-400 text-sm">Course Rating</div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={600} direction="up">
                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-br from-stone-500 to-stone-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <AnimatedCounter end={1234} suffix="+" />
                      <div className="text-stone-400 text-sm">Students Enrolled</div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={700} direction="up">
                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <AnimatedCounter end={parseInt(course.duration.split(' ')[0])} suffix="h" />
                      <div className="text-stone-400 text-sm">Course Duration</div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={800} direction="up">
                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <AnimatedCounter end={100} suffix="%" />
                      <div className="text-stone-400 text-sm">Completion Rate</div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>

              {/* Call to Action Buttons */}
              <AnimatedSection delay={900}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <Zap className="w-5 h-5 group-hover:animate-pulse" />
                      Enroll Now - ₹25,000
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-lg font-bold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="flex items-center gap-2">
                      <PlayCircle className="w-5 h-5" />
                      Preview Course
                    </span>
                  </button>
                  </div>
              </AnimatedSection>

              {/* Legacy stats for reference - now hidden */}
              <div className="hidden">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getLevelColor(course.level)} mb-4 inline-block`}>
                  {course.level}
                </span>
                <h1 className="text-4xl font-bold text-stone-800 mb-4">{course.title}</h1>
                <p className="text-xl text-stone-600 leading-relaxed mb-6">{course.description}</p>
                
                {/* Course Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-stone-600">(234 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-stone-600" />
                    <span className="text-stone-600">1,234 students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-stone-600" />
                    <span className="text-stone-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-stone-600" />
                    <span className="text-stone-600">English</span>
                  </div>
                </div>
              </div>

              {/* What you'll learn */}
              <AnimatedSection delay={1000}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">What you'll learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Master the fundamentals and advanced concepts',
                      'Build real-world projects from scratch',
                      'Learn industry best practices and patterns',
                      'Get hands-on experience with modern tools',
                      'Understand deployment and production workflows',
                      'Receive personalized feedback and mentorship'
                    ].map((item, index) => (
                      <AnimatedSection key={index} delay={1100 + (index * 50)} direction="left">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-300">{item}</span>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={500} direction="right">
                <div className="bg-white rounded-xl shadow-2xl border border-stone-200/50 overflow-hidden sticky top-24">
                  {/* Course Image */}
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors hover:scale-110 duration-300">
                        <Play className="w-6 h-6 text-stone-800 ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-stone-800 mb-2">₹25,000</div>
                      <div className="text-stone-600 line-through">₹35,000</div>
                      <div className="text-amber-700 font-semibold">Save ₹10,000</div>
                    </div>

                    {/* Enroll Button */}
                    <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-4 rounded-lg font-bold text-lg hover:from-amber-800 hover:to-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl mb-4 hover:scale-105">
                      Enroll Now
                    </button>

                    <div className="text-center text-sm text-stone-600 mb-6">
                      30-day money-back guarantee
                    </div>

                    {/* Course Includes */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-stone-800">This course includes:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <Play className="w-4 h-4 text-stone-600" />
                          <span>25 hours on-demand video</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-stone-600" />
                          <span>15 articles</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Download className="w-4 h-4 text-stone-600" />
                          <span>Downloadable resources</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="w-4 h-4 text-stone-600" />
                          <span>Certificate of completion</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-stone-600" />
                          <span>Full lifetime access</span>
                        </div>
                      </div>
                    </div>

                    {/* Share */}
                    <div className="flex gap-2 mt-6 pt-6 border-t border-stone-200">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-stone-300 rounded-lg hover:bg-stone-50 transition-all duration-300 hover:scale-105">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-stone-300 rounded-lg hover:bg-stone-50 transition-all duration-300 hover:scale-105">
                        <Heart className="w-4 h-4" />
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-1 mb-8 bg-stone-100 rounded-2xl p-1">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'curriculum', label: 'Curriculum' },
                  { id: 'instructor', label: 'Instructor' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-amber-700 shadow-md'
                        : 'text-stone-600 hover:text-stone-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">Course Description</h3>
                    <div className="prose prose-stone max-w-none">
                      <p className="text-stone-600 leading-relaxed mb-4">
                        This comprehensive course is designed to take you from a complete beginner to a confident professional. 
                        You'll learn through hands-on projects, real-world examples, and expert guidance.
                      </p>
                      <p className="text-stone-600 leading-relaxed mb-4">
                        Our curriculum is constantly updated to reflect the latest industry trends and best practices. 
                        By the end of this course, you'll have built several projects that you can showcase in your portfolio.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">Technologies Covered</h3>
                    <div className="flex flex-wrap gap-3">
                      {course.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-medium border border-amber-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-600">Basic computer skills</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-600">Willingness to learn and practice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-600">No prior programming experience required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-stone-800">Course Curriculum</h3>
                  
                  {/* Course Summary */}
                  <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-6 border border-amber-200/50">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-amber-700 mb-2">{curriculum.length}</div>
                        <div className="text-stone-600 text-sm">Sections</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-700 mb-2">{getTotalLectures()}</div>
                        <div className="text-stone-600 text-sm">Lectures</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-700 mb-2">{getTotalDuration()}h</div>
                        <div className="text-stone-600 text-sm">Total Duration</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-700 mb-2">Lifetime</div>
                        <div className="text-stone-600 text-sm">Access</div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Sections */}
                  {curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-stone-200 rounded-2xl overflow-hidden">
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full bg-white hover:bg-stone-50 p-6 text-left transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-stone-800 mb-2">
                              Section {sectionIndex + 1}: {section.title}
                            </h4>
                            <div className="flex items-center gap-6 text-sm text-stone-600">
                              <span>{section.lectures} lectures</span>
                              <span>{section.duration}</span>
                            </div>
                          </div>
                          <div className={`transform transition-transform duration-200 ${
                            expandedSections.includes(sectionIndex) ? 'rotate-180' : ''
                          }`}>
                            <ChevronRight className="w-5 h-5 text-stone-600" />
                          </div>
                        </div>
                      </button>

                      {/* Section Content */}
                      {expandedSections.includes(sectionIndex) && (
                        <div className="bg-stone-50 border-t border-stone-200">
                          <div className="p-6 space-y-3">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-sm transition-shadow duration-200">
                                <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  {getTypeIcon(lesson.type)}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-stone-800 mb-1">{lesson.title}</div>
                                  <div className="text-sm text-stone-600 flex items-center gap-3">
                                    <span>{lesson.duration}</span>
                                    <span className="capitalize text-xs bg-stone-200 px-2 py-1 rounded-full">
                                      {lesson.type}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {lesson.preview && (
                                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                                      Preview
                                    </span>
                                  )}
                                  <button className="w-8 h-8 bg-amber-100 hover:bg-amber-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                                    <Play className="w-4 h-4 text-amber-700" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Course Features */}
                  <div className="bg-white rounded-2xl p-6 border border-stone-200">
                    <h4 className="text-xl font-bold text-stone-800 mb-4">Course Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-stone-700">Lifetime access to course materials</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Download className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-stone-700">Downloadable resources and code</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-stone-700">Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-stone-700">Access to student community</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-stone-700">Mobile and desktop access</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-stone-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-stone-600" />
                        </div>
                        <span className="text-stone-700">Self-paced learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="mt-8">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-white text-center">
                    <h4 className="text-xl font-bold mb-2">Ready to Start Learning?</h4>
                    <p className="mb-4 opacity-90">Join thousands of students who have already enrolled in this course</p>
                    <button className="bg-white text-amber-700 px-8 py-3 rounded-xl font-bold hover:bg-stone-50 transition-colors duration-300">
                      Enroll Now - ₹25,000
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-6">Meet Your Instructor</h3>
                  <div className="bg-stone-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-2xl object-cover"
                      />
                      <div>
                        <h4 className="text-2xl font-bold text-stone-800 mb-2">{instructor.name}</h4>
                        <p className="text-amber-700 font-semibold mb-2">{instructor.title}</p>
                        <div className="flex items-center gap-4 text-sm text-stone-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-500 fill-current" />
                            <span>{instructor.rating} rating</span>
                          </div>
                          <div>{instructor.students} students</div>
                          <div>{instructor.courses} courses</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-stone-600 leading-relaxed">{instructor.bio}</p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-stone-800">Student Reviews</h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-500 fill-current" />
                      <span className="font-bold">4.9</span>
                      <span className="text-stone-600">(234 reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-stone-50 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="font-semibold text-stone-800">{review.name}</h5>
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-stone-500">{review.date}</span>
                            </div>
                            <p className="text-stone-600 leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-stone-800 mb-4">Course Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Students</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Language</span>
                    <span className="font-medium">English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Certificate</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/50">
                <h4 className="font-bold text-amber-800 mb-4">Need Help?</h4>
                <p className="text-amber-700 text-sm mb-4">
                  Have questions about this course? Our team is here to help!
                </p>
                <button className="w-full bg-amber-700 text-white py-3 rounded-xl font-semibold hover:bg-amber-800 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsPage;