
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partnership from '@/components/Partnership';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#AAADFF] via-white to-[#AAADFF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-redhat transition-colors duration-300">
      <Navbar />
      <div className="pt-28">
        <Hero />
        <Partnership />
        <Features />
        <TechStack />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
