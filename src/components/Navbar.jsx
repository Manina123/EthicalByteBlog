import React from 'react';
    import { Rss, Archive } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useTheme } from '@/components/ThemeProvider';

    const Navbar = ({ currentHash }) => {
      const { theme } = useTheme();
      const logoUrl = "https://ethicalbyte.in/assets/img/logo.png";
      const externalLogoLink = "https://ethicalbyte.in/";

      const getNavLinkClass = (path) => {
        const isActive = currentHash === path || (path === '#/' && currentHash === '#');
        let baseClasses = `transition-colors flex items-center font-medium px-3 py-2 rounded-md text-sm `;
        if (isActive) {
          baseClasses += theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary';
        } else {
          baseClasses += theme === 'dark' ? 'text-slate-300 hover:text-primary hover:bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5';
        }
        return baseClasses;
      };

      return (
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="sticky top-0 z-50 glassmorphism-nav"
        >
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href={externalLogoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={logoUrl} alt="EthicalByte Logo" className="h-10 md:h-12" />
            </a>
            <div className="space-x-2 md:space-x-3">
              <a href="#/" className={getNavLinkClass('#/')}>
                <Rss size={18} className="mr-1.5" />
                Recent
              </a>
              <a href="#/all-blogs" className={getNavLinkClass('#/all-blogs')}>
                <Archive size={18} className="mr-1.5" />
                All Posts
              </a>
            </div>
          </div>
        </motion.nav>
      );
    };

    export default Navbar;