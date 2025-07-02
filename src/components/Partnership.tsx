
import { Handshake, Award, Users, TrendingUp } from 'lucide-react';

const Partnership = () => {
  return (
    <section id="partnership" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/90 to-beyul-light/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-beyul-purple/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-beyul-dark/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-beyul-purple/20 to-beyul-dark/20 rounded-full text-beyul-dark font-semibold text-sm backdrop-blur-sm border border-beyul-purple/30 mb-6">
            🤝 Strategic Partnerships
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-beyul-dark mb-8">
            Our Trusted Partnership
          </h2>
          <p className="text-xl text-beyul-gray max-w-4xl mx-auto font-medium">
            Building the future together with our strategic partner, delivering 
            unmatched value to emerging economies across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="group bg-gradient-to-br from-beyul-dark/90 to-beyul-purple/90 rounded-3xl p-10 border border-beyul-purple/30 hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-beyul-light to-white rounded-2xl p-4 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="text-beyul-dark w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white">Strategic Alliance</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our partnership represents a commitment to excellence, innovation, 
                and sustainable growth in emerging markets. Together, we're reshaping 
                the business landscape with cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                <Award className="text-beyul-purple w-12 h-12 mx-auto mb-4" />
                <h4 className="text-beyul-dark font-bold text-lg mb-2">Excellence Award</h4>
                <p className="text-beyul-gray">Recognized for innovation</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
                <Users className="text-beyul-purple w-12 h-12 mx-auto mb-4" />
                <h4 className="text-beyul-dark font-bold text-lg mb-2">50k+ Users</h4>
                <p className="text-beyul-gray">Across 25+ countries</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-white/95 to-beyul-light/40 rounded-[3rem] p-16 backdrop-blur-xl border-2 border-white/50 shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="text-center mb-10">
                <div className="bg-gradient-to-r from-beyul-purple to-beyul-dark rounded-full w-28 h-28 mx-auto mb-8 flex items-center justify-center shadow-xl">
                  <TrendingUp className="text-white w-14 h-14" />
                </div>
                <h3 className="text-4xl font-black text-beyul-dark mb-6">Global Partner</h3>
                <p className="text-beyul-gray text-lg leading-relaxed">
                  Leading technology solutions provider with a proven track record 
                  in emerging market development and digital transformation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="bg-gradient-to-br from-beyul-purple/20 to-beyul-dark/20 rounded-2xl p-6">
                  <div className="text-4xl font-black text-beyul-purple mb-2">15+</div>
                  <div className="text-beyul-gray font-medium">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-beyul-purple/20 to-beyul-dark/20 rounded-2xl p-6">
                  <div className="text-4xl font-black text-beyul-purple mb-2">99.9%</div>
                  <div className="text-beyul-gray font-medium">Uptime SLA</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-beyul-light to-beyul-purple rounded-full w-12 h-12 animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-beyul-purple to-beyul-dark rounded-full w-8 h-8 animate-pulse shadow-lg" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
