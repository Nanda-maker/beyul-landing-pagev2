
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-beyul-purple/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-beyul-dark/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-beyul-dark/20 to-beyul-purple/20 dark:from-white/20 dark:to-purple-400/20 rounded-full text-beyul-dark dark:text-white font-semibold text-sm backdrop-blur-sm border border-beyul-purple/30 dark:border-purple-400/30">
              🚀 Transforming Emerging Economies
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-beyul-dark dark:text-white mb-8 leading-tight">
            Trusted Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-beyul-purple via-beyul-dark to-beyul-purple dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 animate-pulse">
              Solutions Platform
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-beyul-gray dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Empowering emerging economies with cutting-edge software solutions 
            that drive growth, innovation, and sustainable business transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="group relative overflow-hidden bg-gradient-to-r from-beyul-purple to-beyul-dark dark:from-purple-600 dark:to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-500 shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Explore Platform
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-beyul-dark to-beyul-purple dark:from-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="border-3 border-beyul-dark dark:border-white text-beyul-dark dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-beyul-dark dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-500 backdrop-blur-sm shadow-xl">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-700/60 backdrop-blur-xl rounded-3xl p-8 hover:from-beyul-dark/90 hover:to-beyul-purple/90 dark:hover:from-purple-600/90 dark:hover:to-blue-600/90 transition-all duration-700 shadow-2xl border border-white/50 dark:border-gray-700/50 hover:scale-105">
              <Globe className="text-beyul-purple dark:text-purple-400 group-hover:text-white w-16 h-16 mx-auto mb-6 transition-colors duration-500" />
              <h3 className="text-beyul-dark dark:text-white group-hover:text-white font-bold text-xl mb-4 transition-colors duration-500">Global Reach</h3>
              <p className="text-beyul-gray dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-500">Serving emerging markets worldwide with innovative solutions</p>
            </div>
            
            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-700/60 backdrop-blur-xl rounded-3xl p-8 hover:from-beyul-dark/90 hover:to-beyul-purple/90 dark:hover:from-purple-600/90 dark:hover:to-blue-600/90 transition-all duration-700 shadow-2xl border border-white/50 dark:border-gray-700/50 hover:scale-105" style={{animationDelay: '0.2s'}}>
              <Shield className="text-beyul-purple dark:text-purple-400 group-hover:text-white w-16 h-16 mx-auto mb-6 transition-colors duration-500" />
              <h3 className="text-beyul-dark dark:text-white group-hover:text-white font-bold text-xl mb-4 transition-colors duration-500">Trusted Security</h3>
              <p className="text-beyul-gray dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-500">Enterprise-grade security with advanced protection</p>
            </div>
            
            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-700/60 backdrop-blur-xl rounded-3xl p-8 hover:from-beyul-dark/90 hover:to-beyul-purple/90 dark:hover:from-purple-600/90 dark:hover:to-blue-600/90 transition-all duration-700 shadow-2xl border border-white/50 dark:border-gray-700/50 hover:scale-105" style={{animationDelay: '0.4s'}}>
              <Zap className="text-beyul-purple dark:text-purple-400 group-hover:text-white w-16 h-16 mx-auto mb-6 transition-colors duration-500" />
              <h3 className="text-beyul-dark dark:text-white group-hover:text-white font-bold text-xl mb-4 transition-colors duration-500">Lightning Fast</h3>
              <p className="text-beyul-gray dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-500">Optimized performance for seamless experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
