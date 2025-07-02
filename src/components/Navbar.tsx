
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Partnership', url: '#partnership', icon: User },
    { name: 'Features', url: '#features', icon: Briefcase },
    { name: 'Technology', url: '#tech', icon: FileText }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 pt-6">
      {/* Beyul Labs Logo */}
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/32898dae-d9f1-412a-9518-2fc6951f0cd3.png" 
          alt="BeyulLabs" 
          className="h-8 md:h-10"
        />
      </div>
      
      {/* Center Navigation */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <NavBar items={navItems} />
      </div>
      
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
