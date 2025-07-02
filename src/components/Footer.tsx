
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-beyul-dark/95 to-beyul-purple/90 backdrop-blur-xl border-t-2 border-white/20 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-beyul-light/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-4xl font-black text-white mb-6">
              Beyul <span className="text-beyul-light">Labs</span>
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-md font-medium">
              Empowering emerging economies with trusted business solutions 
              that drive innovation, growth, and sustainable transformation.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-beyul-light hover:to-white rounded-2xl p-4 transition-all duration-300 hover:scale-110 shadow-lg">
                <Linkedin className="w-6 h-6 text-white group-hover:text-beyul-dark transition-colors duration-300" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-beyul-light hover:to-white rounded-2xl p-4 transition-all duration-300 hover:scale-110 shadow-lg">
                <Twitter className="w-6 h-6 text-white group-hover:text-beyul-dark transition-colors duration-300" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-beyul-light hover:to-white rounded-2xl p-4 transition-all duration-300 hover:scale-110 shadow-lg">
                <Github className="w-6 h-6 text-white group-hover:text-beyul-dark transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-beyul-light transition-colors duration-300 text-lg font-medium hover:translate-x-2 inline-block transform">Home</a></li>
              <li><a href="#partnership" className="text-gray-300 hover:text-beyul-light transition-colors duration-300 text-lg font-medium hover:translate-x-2 inline-block transform">Partnership</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-beyul-light transition-colors duration-300 text-lg font-medium hover:translate-x-2 inline-block transform">Features</a></li>
              <li><a href="#tech" className="text-gray-300 hover:text-beyul-light transition-colors duration-300 text-lg font-medium hover:translate-x-2 inline-block transform">Technology</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="bg-gradient-to-r from-beyul-light to-white rounded-xl p-2 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-beyul-dark" />
                </div>
                <span className="font-medium">hello@beyul-labs.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="bg-gradient-to-r from-beyul-light to-white rounded-xl p-2 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-beyul-dark" />
                </div>
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="bg-gradient-to-r from-beyul-light to-white rounded-xl p-2 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-beyul-dark" />
                </div>
                <span className="font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg mb-6 md:mb-0 font-medium">
              © 2024 Beyul Labs. All rights reserved.
            </p>
            <div className="flex space-x-8 text-lg text-gray-300 font-medium">
              <a href="#" className="hover:text-beyul-light transition-colors duration-300 hover:scale-105 transform inline-block">Privacy Policy</a>
              <a href="#" className="hover:text-beyul-light transition-colors duration-300 hover:scale-105 transform inline-block">Terms of Service</a>
              <a href="#" className="hover:text-beyul-light transition-colors duration-300 hover:scale-105 transform inline-block">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
