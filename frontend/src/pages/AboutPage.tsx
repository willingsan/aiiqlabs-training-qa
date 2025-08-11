import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Target, CheckCircle, TrendingUp, Star, Globe, Heart, Lightbulb, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Students Trained', value: '500+', color: 'from-amber-600 to-amber-700' },
    { icon: Award, label: 'Industry Experts', value: '25+', color: 'from-stone-600 to-stone-700' },
    { icon: BookOpen, label: 'Courses Available', value: '50+', color: 'from-amber-500 to-amber-600' },
    { icon: Target, label: 'Success Rate', value: '95%', color: 'from-amber-500 to-amber-600' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends and continuously update our curriculum to reflect the latest industry developments.'
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Every decision we make is focused on providing the best learning experience and career outcomes for our students.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Our training programs meet international standards while being tailored for the Indian tech ecosystem.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure our success by the career growth and achievements of our graduates in the tech industry.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      experience: '15+ years',
      expertise: 'Full-Stack Development, AI/ML',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Curriculum',
      experience: '12+ years',
      expertise: 'React, Node.js, DevOps',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Arjun Patel',
      role: 'AI/ML Lead',
      experience: '10+ years',
      expertise: 'Machine Learning, Data Science',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sneha Reddy',
      role: 'Mobile Development Lead',
      experience: '8+ years',
      expertise: 'React Native, Flutter',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 pt-24 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #F59E0B 2px, transparent 2px), radial-gradient(circle at 80% 50%, #D97706 2px, transparent 2px)`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-400/20 rounded-lg animate-bounce hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-stone-400/20 rounded-lg animate-bounce hover:rotate-12 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-stone-400/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-500/60 rounded-full animate-ping hover:scale-150 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional Animated Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-amber-300/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-stone-400/20 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 border border-amber-500/40 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-8 hover:bg-amber-500/30 hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-sm font-semibold text-amber-300">About AIIQLabs</span>
              <TrendingUp className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
              Empowering India's 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 relative animate-gradient">
                {' '}Tech Future
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200/50 -z-10 transform -skew-x-12"></div>
              </span>
            </h1>
            
            <p className="text-xl text-stone-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Founded in Bengaluru, <span className="font-serif">A</span><span className="font-mono tracking-tight">I</span><span className="text-stone-400">&lt;</span><span className="font-mono tracking-tight italic text-amber-300 font-bold">I</span><span className="text-stone-400">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span> is at the forefront of technology education in India. 
              We bridge the gap between academic learning and industry requirements, creating 
              skilled professionals ready for tomorrow's challenges.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 group-hover:animate-pulse" />
                  Discover Our Story
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <Link to="/contact" className="group border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-lg font-bold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Meet Our Team
                </span>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-stone-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-lg">
                  AIIQLabs was born from a simple observation: there was a significant gap between 
                  what students learn in traditional education and what the industry actually needs. 
                  Our founders, seasoned professionals from top tech companies, decided to bridge this gap.
                </p>
                <p>
                  Starting in a small office in Electronic City, Bengaluru, we began with just 10 students 
                  and a vision to create India's most practical and industry-relevant tech training programs. 
                  Today, we're proud to have trained over 500 professionals who are now working at leading 
                  companies across India and globally.
                </p>
                <p>
                  Our approach is simple: learn by doing. Every course is designed with real-world projects, 
                  industry mentorship, and practical skills that employers value. We don't just teach 
                  technology; we prepare you for a successful tech career.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AIIQLabs office"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold">2019</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-br from-amber-50/30 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Our Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the learning experience we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our experienced instructors and mentors bring real-world expertise from top tech companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg border border-stone-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{member.name}</h3>
                  <p className="text-amber-700 font-semibold mb-2">{member.role}</p>
                  <p className="text-stone-600 text-sm mb-2">{member.experience}</p>
                  <p className="text-stone-500 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful graduates who've transformed their careers with <span className="text-amber-300">&lt;</span><span className="font-mono tracking-tight italic text-emerald-300 font-bold">A</span><span className="text-amber-300">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-300">&lt;</span><span className="font-mono tracking-tight italic text-emerald-300 font-bold">I</span><span className="text-amber-300">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span>. 
            Your future in tech starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-center">
              View Our Courses
            </Link>
            <Link to="/contact" className="border-2 border-stone-400 text-stone-300 px-8 py-4 rounded-full font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors duration-300 text-center">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;