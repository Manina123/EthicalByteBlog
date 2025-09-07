
    import React, { useState, useEffect, useMemo, useCallback } from 'react';
    import { blogPosts as allBlogPostsData } from '@/data/blogPosts.jsx';
    import BlogCard from '@/components/BlogCard';
    import Pagination from '@/components/Pagination';
    import { motion } from 'framer-motion';
    import { Search, XCircle, Archive } from 'lucide-react';
    import { useTheme } from '@/components/ThemeProvider';
    import { Input } from '@/components/ui/input';

    const POSTS_PER_PAGE = 9; 

    const AllBlogsPage = ({ searchTerm, setSearchTerm }) => {
      const { theme } = useTheme();
      const [currentPage, setCurrentPage] = useState(1);
      const [displayedPosts, setDisplayedPosts] = useState([]);
      
      const filteredAndSortedPosts = useMemo(() => {
        let posts = [...allBlogPostsData];

        if (searchTerm) {
          posts = posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
          );
        }
        
        return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      }, [searchTerm]);

      const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);

      useEffect(() => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        setDisplayedPosts(filteredAndSortedPosts.slice(startIndex, endIndex));
        if (searchTerm || currentPage > 1) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, [currentPage, filteredAndSortedPosts, searchTerm]);

      const handlePageChange = (page) => {
        setCurrentPage(page);
      };

      const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
      }, [setSearchTerm]);

      const handleClearSearch = useCallback(() => {
        setSearchTerm('');
        setCurrentPage(1);
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

      const pageHeaderBgClass = theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-background to-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100';
      const pageTitleClass = theme === 'dark'
        ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary'
        : 'text-foreground';
      const pageTextClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const searchInputClass = theme === 'dark' 
        ? 'bg-slate-800/60 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-primary focus:border-primary' 
        : 'bg-background border-border text-foreground placeholder-muted-foreground focus:ring-primary focus:border-primary shadow-sm';
      const searchIconClass = theme === 'dark' ? 'text-slate-500 group-focus-within:text-primary' : 'text-muted-foreground group-focus-within:text-primary';

      return (
        <div className="space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`text-center py-16 md:py-20 ${pageHeaderBgClass} rounded-xl shadow-lg p-8`}
          >
            <Archive size={48} className={`mx-auto mb-4 ${pageTitleClass}`} />
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${pageTitleClass}`}>
              All Blog Posts
            </h1>
            <p className={`text-lg md:text-xl ${pageTextClass} max-w-3xl mx-auto mb-10`}>
              Browse through our entire collection of articles. Use the search to find specific topics.
            </p>
            <div className="relative max-w-xl mx-auto group">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${searchIconClass} transition-colors`} />
              <Input 
                type="search" 
                placeholder="Search all articles..." 
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
          
          {searchTerm && filteredAndSortedPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Search Results for: <span className="text-primary">{searchTerm}</span>
              </h2>
              <p className="text-muted-foreground">{filteredAndSortedPosts.length} post(s) found.</p>
            </motion.div>
          )}

          {filteredAndSortedPosts.length === 0 && (
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <XCircle size={48} className="mx-auto text-destructive mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">No Articles Found</h2>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? `Sorry, we couldn't find any articles matching "${searchTerm}". Try a different search term.`
                  : "There are no articles available at the moment. Check back soon!"}
              </p>
            </motion.div>
          )}

          {displayedPosts.length > 0 && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {displayedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.section>
          )}
          
          {totalPages > 1 && displayedPosts.length > 0 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      );
    };

    export default AllBlogsPage;
  