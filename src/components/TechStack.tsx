
import { IconCloud } from '@/components/ui/interactive-icon-cloud';

const TechStack = () => {
  const iconSlugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android", 
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const frontendTech = ["React", "TypeScript", "Next.js", "Tailwind CSS"];
  const backendTech = ["Node.js", "Python", "Go", "GraphQL"];
  const cloudDevOpsTech = ["AWS", "Docker", "Kubernetes", "Terraform"];
  const securityTech = ["OAuth 2.0", "SSL/TLS", "RBAC", "Encryption"];

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm mb-6 border border-purple-200 dark:border-purple-700">
            <span>💻</span>
            Technology Stack
            <span>⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powered by
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent mb-6">
            Modern Technologies
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build scalable, secure, and performant 
            solutions for emerging markets.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Icon Cloud with Stats */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* 50+ Technologies Badge */}
              <div className="absolute -top-4 -left-4 z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl shadow-lg border border-purple-500">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Technologies</div>
              </div>
              
              {/* Icon Cloud Container */}
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border-2 border-purple-200 dark:border-purple-700 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 px-20 pb-20 pt-8 shadow-xl mx-auto">
                <IconCloud iconSlugs={iconSlugs} />
              </div>

              {/* 99.9% Reliability Badge */}
              <div className="absolute -bottom-4 -right-4 z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl shadow-lg border border-purple-500">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Reliability</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enterprise-Grade Technology Foundation */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Enterprise-Grade
            </h3>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent mb-6">
              Technology Foundation
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our carefully curated technology stack combines proven enterprise 
              solutions with cutting-edge innovations, ensuring maximum 
              performance, security, and scalability for emerging market challenges.
            </p>

            {/* Technology Categories Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-700">
                    <span className="text-purple-600 dark:text-purple-400">💻</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Frontend</h5>
                </div>
                <div className="space-y-2">
                  {frontendTech.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-700">
                    <span className="text-purple-600 dark:text-purple-400">🔧</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Backend</h5>
                </div>
                <div className="space-y-2">
                  {backendTech.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-700">
                    <span className="text-purple-600 dark:text-purple-400">🌐</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Cloud & DevOps</h5>
                </div>
                <div className="space-y-2">
                  {cloudDevOpsTech.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-700">
                    <span className="text-purple-600 dark:text-purple-400">🔒</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Security</h5>
                </div>
                <div className="space-y-2">
                  {securityTech.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Our Stack Matters */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Our Stack Matters
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our technology choices are driven by performance, reliability, and scalability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent mb-3">10x</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2 text-lg">Faster Development</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Accelerated delivery cycles with modern tooling</div>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent mb-3">99.9%</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2 text-lg">Uptime SLA</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Enterprise-grade reliability you can trust</div>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2 text-lg">Global Support</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Round-the-clock expert assistance</div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-16 text-center text-white shadow-2xl border border-purple-500">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join thousands of businesses already using our platform to accelerate 
            growth in emerging markets.
          </p>
          <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg border border-purple-200">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
