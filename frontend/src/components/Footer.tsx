import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-8 h-8 text-amber-400" />
              <span className="text-xl font-bold">
                <span className="text-amber-400">&lt;</span><span className="font-mono tracking-tight italic text-emerald-400 font-bold">A</span><span className="text-amber-400">&gt;</span><span className="font-mono tracking-tight">I</span><span className="text-amber-400">&lt;</span><span className="font-mono tracking-tight italic text-emerald-400 font-bold">I</span><span className="text-amber-400">&gt;</span><span className="font-mono">Q</span><span className="font-sans">Labs</span>
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              Empowering the next generation of tech innovators through hands-on 
              learning, expert mentorship, and industry-relevant curriculum.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/category/web-development" className="text-stone-400 hover:text-amber-400 transition-colors">Web Development</Link></li>
              <li><Link to="/category/it-operations" className="text-stone-400 hover:text-amber-400 transition-colors">IT Operations</Link></li>
              <li><Link to="/category/mobile-development" className="text-stone-400 hover:text-amber-400 transition-colors">Mobile App Development</Link></li>
              <li><Link to="/category/artificial-intelligence" className="text-stone-400 hover:text-amber-400 transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/courses" className="text-stone-400 hover:text-amber-400 transition-colors">All Courses</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-stone-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/courses" className="text-stone-400 hover:text-amber-400 transition-colors">All Courses</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">Enrollment</Link></li>
              <li><Link to="/about" className="text-stone-400 hover:text-amber-400 transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-stone-400 text-sm">
                  <p>123 Tech Park</p>
                  <p>Electronic City</p>
                  <p>Bengaluru, Karnataka 560100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-stone-400 text-sm">+91 80 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-stone-400 text-sm">info@aiiqlabs.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              © {currentYear} AIIQLabs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;