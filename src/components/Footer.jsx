import React from 'react';
    import { Github, Linkedin, Twitter } from 'lucide-react';
    import { useTheme } from '@/components/ThemeProvider';

    const Footer = () => {
      const { theme } = useTheme();
      const currentYear = new Date().getFullYear();
      
      const iconColorClass = theme === 'dark' ? 'hover:text-primary' : 'text-muted-foreground hover:text-primary';
      const textColorClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const bgColorClass = theme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-50'; // Lighter footer for light theme
      const borderColorClass = theme === 'dark' ? 'border-slate-700/60' : 'border-border';

      return (
        <footer className={`${bgColorClass} border-t ${borderColorClass} ${textColorClass} py-8 mt-12`}>
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${iconColorClass} transition-colors`}>
                <Github size={22} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${iconColorClass} transition-colors`}>
                <Linkedin size={22} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${iconColorClass} transition-colors`}>
                <Twitter size={22} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-sm">
              &copy; {currentYear} CyberSec Insights. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              Disclaimer: Information on this blog is for educational purposes only.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;