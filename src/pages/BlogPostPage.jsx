
import React, { useEffect, useState } from 'react';
    import { getPostById } from '@/data/blogPosts.jsx';
    import { postImages } from '@/assets/images.js';
    import { motion } from 'framer-motion';
    import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
    import NotFoundPage from './NotFoundPage';
    import { useTheme } from '@/components/ThemeProvider';

    const BlogPostPage = ({ postId }) => {
      const { theme } = useTheme();
      const [post, setPost] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [imageUrl, setImageUrl] = useState('');

      useEffect(() => {
        setIsLoading(true);
        const foundPost = getPostById(postId);
        setPost(foundPost);
        if (foundPost) {
          setImageUrl(postImages[foundPost.imageKey] || postImages.default);
        }
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, [postId]);
      
      const articleBgClass = theme === 'dark' ? 'bg-card' : 'bg-background'; 
      const backLinkColorClass = theme === 'dark' ? 'text-primary hover:text-primary/80' : 'text-primary hover:text-primary/80';
      const headerBorderClass = theme === 'dark' ? 'border-slate-700/50' : 'border-border';
      const titleColorClass = theme === 'dark' ? 'text-primary' : 'text-foreground';
      const metaColorClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const metaIconColorClass = theme === 'dark' ? 'text-accent' : 'text-primary';
      const tagBgClass = theme === 'dark' ? 'bg-secondary text-primary/90' : 'bg-secondary text-secondary-foreground';
      const contentTextColorClass = theme === 'dark' ? 'text-slate-300' : 'text-foreground/90';
      const proseClass = theme === 'dark' ? 'prose-invert' : '';
      const loaderBorderClass = theme === 'dark' ? 'border-primary' : 'border-primary';
      const exploreButtonBgClass = theme === 'dark' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground';

      if (isLoading) {
        return (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className={`animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 ${loaderBorderClass}`}></div>
          </div>
        );
      }

      if (!post) {
        return <NotFoundPage />;
      }

      return (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`max-w-3xl mx-auto ${articleBgClass} p-6 sm:p-8 md:p-10 rounded-xl ${theme === 'light' ? 'shadow-xl' : 'shadow-2xl'}`}
        >
          <div className="mb-8">
            <a href="#/all-blogs" className={`inline-flex items-center ${backLinkColorClass} transition-colors mb-6 group font-semibold text-sm`}>
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </a>
          </div>
          
          <header className={`mb-8 border-b ${headerBorderClass} pb-8`}>
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColorClass} leading-tight`}>{post.title}</h1>
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${metaColorClass} text-sm`}>
              <span className="flex items-center"><CalendarDays size={16} className={`mr-1.5 ${metaIconColorClass}`} /> Published on {post.date}</span>
              <span className="flex items-center"><UserCircle size={16} className={`mr-1.5 ${metaIconColorClass}`} /> By {post.author}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag size={16} className={`${metaIconColorClass}`} />
                {post.tags.map(tag => (
                  <span key={tag} className={`px-2.5 py-1 ${tagBgClass} text-xs rounded-full font-medium`}>{tag}</span>
                ))}
              </div>
            )}
          </header>

          {imageUrl && (
            <div className="mb-8 h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-md">
              <img 
                className="w-full h-full object-cover" 
                alt={`Illustration for ${post.title}`}  
                src={imageUrl} />
            </div>
          )}
          
          <div
            className={`prose ${proseClass} prose-base md:prose-lg max-w-none content-area ${contentTextColorClass}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`mt-12 pt-8 border-t ${headerBorderClass} text-center`}
          >
            <p className={`${metaColorClass} mb-4 text-sm`}>Enjoyed this article? Share it with your network!</p>
            <a href="#/" className={`inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md ${exploreButtonBgClass} transition-colors shadow-md hover:shadow-lg`}>
              Explore More Articles
            </a>
          </motion.div>
        </motion.article>
      );
    };

    export default BlogPostPage;
