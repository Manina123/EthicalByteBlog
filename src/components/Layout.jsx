
import React from 'react';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import { motion } from 'framer-motion';

    const Layout = ({ children, routeKey }) => {
      return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Navbar currentHash={routeKey} />
          <motion.main
            key={routeKey} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow container mx-auto px-4 py-8"
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      );
    };

    export default Layout;
