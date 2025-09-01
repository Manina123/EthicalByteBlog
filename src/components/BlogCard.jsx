import React from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
    import { useTheme } from '@/components/ThemeProvider';
    import { postImages } from '@/assets/images.js';

    const BlogCard = ({ post }) => {
      const { theme } = useTheme();
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { 
          scale: 1.02, 
          boxShadow: theme === 'dark' ? "0px 10px 20px hsla(var(--primary), 0.25)" : "0px 8px 25px rgba(0, 0, 0, 0.08)"
        }
      };

      const cardBgClass = theme === 'dark' ? 'bg-card border-border hover:border-primary/60' : 'bg-card border-border hover:border-primary/40';
      const titleColorClass = theme === 'dark' ? 'text-primary hover:text-primary/80' : 'text-foreground hover:text-primary';
      const descriptionColorClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const contentTextColorClass = theme === 'dark' ? 'text-slate-300' : 'text-foreground/80';
      const readMoreColorClass = theme === 'dark' ? 'text-accent hover:text-accent/80' : 'text-primary hover:text-primary/80';

      const imageUrl = postImages[post.imageKey] || postImages.default;
      const postLink = `#/post/${post.id}`;

      return (
        <motion.div variants={cardVariants} whileHover="hover" className="h-full group">
          <Card className={`flex flex-col h-full ${cardBgClass} transition-all duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden`}>
            <CardHeader className="p-0">
              <div className="mb-4 h-48 w-full overflow-hidden">
                <a href={postLink} aria-label={`Read more about ${post.title}`}>
                  <img  
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    alt={`Blog post illustration for ${post.title}`} 
                    src={imageUrl} />
                </a>
              </div>
              <div className="p-6">
                <CardTitle className={`text-xl font-semibold ${titleColorClass} transition-colors`}>
                  <a href={postLink}>{post.title}</a>
                </CardTitle>
                <CardDescription className={`${descriptionColorClass} text-xs flex flex-wrap items-center gap-x-3 gap-y-1 mt-2`}>
                  <span className="flex items-center"><CalendarDays size={14} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><UserCircle size={14} className="mr-1" /> {post.author}</span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-6 pb-4">
              <p className={`${contentTextColorClass} leading-relaxed text-sm`}>{post.summary}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button asChild variant="link" className={`${readMoreColorClass} p-0 text-sm`}>
                <a href={postLink} className="flex items-center font-semibold">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default BlogCard;