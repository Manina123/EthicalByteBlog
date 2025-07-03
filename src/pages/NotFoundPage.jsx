
import React from 'react';
    import { AlertTriangle, Home } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useTheme } from '@/components/ThemeProvider';

    const NotFoundPage = () => {
      const { theme } = useTheme();

      const iconColorClass = theme === 'dark' ? 'text-amber-400' : 'text-amber-500';
      const titleColorClass = theme === 'dark' ? 'text-red-400' : 'text-red-500';
      const subtitleColorClass = theme === 'dark' ? 'text-slate-300' : 'text-foreground/90';
      const textColorClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const buttonClasses = theme === 'dark' 
        ? 'text-background bg-sky-400 hover:bg-sky-500 hover:shadow-sky-500/50' 
        : 'text-primary-foreground bg-primary hover:bg-primary/90 hover:shadow-primary/30';

      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <AlertTriangle className={`mx-auto h-24 w-24 ${iconColorClass} mb-6`} />
          </motion.div>
          
          <h1 className={`text-6xl font-extrabold ${titleColorClass} mb-4`}>404</h1>
          <h2 className={`text-3xl font-semibold ${subtitleColorClass} mb-6`}>Content Not Found</h2>
          <p className={`text-lg ${textColorClass} max-w-md mx-auto mb-8`}>
            Oops! The content you're looking for at this URL path doesn't exist. It might have been moved or the link is incorrect.
          </p>
          <a
            href="#/"
            className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${buttonClasses} transition-all shadow-lg`}
          >
            <Home size={20} className="mr-2" />
            Go Back Home
          </a>
        </motion.div>
      );
    };

    export default NotFoundPage;
