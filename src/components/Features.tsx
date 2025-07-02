
import { Database, Lock, Smartphone, BarChart3, Cloud, Cog } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Advanced Analytics",
      description: "Real-time data insights and predictive analytics to drive informed business decisions."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance with international standards."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive platform optimized for mobile devices, ensuring accessibility anywhere."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Comprehensive reporting and dashboard tools for strategic business planning."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud-based architecture with 99.9% uptime guarantee."
    },
    {
      icon: Cog,
      title: "Seamless Integration",
      description: "Easy integration with existing systems through robust APIs and webhooks."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beyul-light/20 to-white/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-96 h-96 bg-beyul-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-beyul-dark/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-beyul-dark/20 to-beyul-purple/20 rounded-full text-beyul-dark font-semibold text-sm backdrop-blur-sm border border-beyul-purple/30 mb-6">
            ⚡ Platform Features
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-beyul-dark mb-8">
            Powerful Features
          </h2>
          <p className="text-xl text-beyul-gray max-w-4xl mx-auto font-medium">
            Discover the innovative features that make our platform the trusted 
            choice for businesses in emerging economies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/50 hover:border-beyul-purple/50 hover:from-beyul-dark/95 hover:to-beyul-purple/95 transition-all duration-700 shadow-2xl hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-beyul-light to-beyul-purple rounded-2xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <feature.icon className="text-white w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-beyul-dark group-hover:text-white mb-6 transition-colors duration-500">
                {feature.title}
              </h3>
              
              <p className="text-beyul-gray group-hover:text-gray-200 leading-relaxed text-lg transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="group relative overflow-hidden bg-gradient-to-r from-beyul-purple to-beyul-dark text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-500 shadow-2xl">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-beyul-dark to-beyul-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
