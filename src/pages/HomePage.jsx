
    import React, { useState, useEffect, useMemo, useCallback } from 'react';
    import { blogPosts as allBlogPostsData } from '@/data/blogPosts.jsx';
    import BlogCard from '@/components/BlogCard';
    import { motion } from 'framer-motion';
    import { Search, XCircle, ArrowRight } from 'lucide-react';
    import { useTheme } from '@/components/ThemeProvider';
    import { Input } from '@/components/ui/input';
    import { Button } from '@/components/ui/button';

    const RECENT_POSTS_COUNT = 6;

    const HomePage = ({ searchTerm, setSearchTerm }) => {
      const { theme } = useTheme();
      const [recentPosts, setRecentPosts] = useState([]);
      
      const allPostsSorted = useMemo(() => {
        return [...allBlogPostsData].sort((a, b) => new Date(b.date) - new Date(a.date));
      }, []);

      const filteredPosts = useMemo(() => {
        if (!searchTerm) {
          return allPostsSorted.slice(0, RECENT_POSTS_COUNT);
        }
        return allPostsSorted.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
        );
      }, [searchTerm, allPostsSorted]);

      useEffect(() => {
        if (!searchTerm) {
          setRecentPosts(allPostsSorted.slice(0, RECENT_POSTS_COUNT));
        } else {
          setRecentPosts(filteredPosts); 
        }
      }, [searchTerm, allPostsSorted, filteredPosts]);


      const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
      }, [setSearchTerm]);

      const handleClearSearch = useCallback(() => {
        setSearchTerm('');
      }, [setSearchTerm]);
      
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      };

      const heroBgClass = theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-background to-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100';
      const heroTitleClass = theme === 'dark'
        ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary'
        : 'text-foreground';
      const heroTextClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const searchInputClass = theme === 'dark' 
        ? 'bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary' 
        : 'bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm';
      const searchIconClass = theme === 'dark' ? 'text-slate-500 group-focus-within:text-primary' : 'text-muted-foreground group-focus-within:text-primary';
      const viewAllButtonClass = theme === 'dark' 
        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
        : 'bg-primary hover:bg-primary/90 text-primary-foreground';

      return (
        <div className="space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`text-center py-16 md:py-20 ${heroBgClass} rounded-xl shadow-lg p-8`}
          >
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${heroTitleClass}`}>
              CyberSec Insights
            </h1>
            <p className={`text-lg md:text-xl ${heroTextClass} max-w-3xl mx-auto mb-10`}>
              Your trusted source for the latest in cybersecurity news, threats, and best practices. Stay informed, stay secure.
            </p>
            <div className="relative max-w-xl mx-auto group">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${searchIconClass} transition-colors`} />
              <Input 
                type="search" 
                placeholder="Search recent articles..." 
                className={`w-full py-3 pl-12 pr-10 rounded-lg border outline-none transition-all ${searchInputClass}`}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchTerm && (
                <button 
                  onClick={handleClearSearch} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <XCircle size={20} />
                </button>
              )}
            </div>
          </motion.section>
          
          {searchTerm && recentPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Search Results for: <span className="text-primary">{searchTerm}</span>
              </h2>
              <p className="text-muted-foreground">{recentPosts.length} post(s) found.</p>
            </motion.div>
          )}

          {recentPosts.length === 0 && (
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <XCircle size={48} className="mx-auto text-destructive mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">No Articles Found</h2>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? `Sorry, we couldn't find any articles matching "${searchTerm}". Try a different search term or view all posts.`
                  : "There are no recent articles available. Check back soon!"}
              </p>
            </motion.div>
          )}

          {recentPosts.length > 0 && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.section>
          )}
          
          {!searchTerm && allPostsSorted.length > RECENT_POSTS_COUNT && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" className={`${viewAllButtonClass} shadow-md hover:shadow-lg transition-all`}>
                <a href="#/all-blogs">
                  View All Posts <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      );
    };

    export default HomePage;
  