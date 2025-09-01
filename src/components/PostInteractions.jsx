import React, { useState, useEffect, useCallback } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Heart, Eye, MessageSquare, Send, Trash2 } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { useTheme } from '@/components/ThemeProvider';
    import { supabase } from '@/lib/customSupabaseClient.js';

    const PostInteractions = ({ postId }) => {
      const { theme } = useTheme();
      const { toast } = useToast();
      
      const [views, setViews] = useState(0);
      const [likes, setLikes] = useState(0);
      const [comments, setComments] = useState([]);
      const [newComment, setNewComment] = useState('');
      const [author, setAuthor] = useState('Anonymous');
      const [hasLiked, setHasLiked] = useState(false);
      const [isLoading, setIsLoading] = useState(true);

      const ensurePostEntry = useCallback(async () => {
        if (!supabase) return null;
        
        const { error: insertError } = await supabase
            .from('posts')
            .insert({ id: postId }, { upsert: true, ignoreDuplicates: true });

        if (insertError && insertError.code !== '23505') { // 23505 is duplicate key error
            console.error('Error ensuring post entry:', insertError);
            toast({ title: "Error", description: "Could not initialize post data.", variant: "destructive" });
            return null;
        }

        let { data, error } = await supabase
            .from('posts')
            .select('view_count, like_count')
            .eq('id', postId)
            .single();

        if (error) {
            console.error('Error fetching post data after upsert:', error);
            return null;
        }
        
        return data;
      }, [postId, toast]);

      const fetchComments = useCallback(async () => {
         if (!supabase) return;
         const { data, error } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', postId)
            .order('created_at', { ascending: false });
        
        if(data) setComments(data);
        if(error) console.error('Error fetching comments:', error);
      }, [postId]);

      useEffect(() => {
        const initializeInteractions = async () => {
            if (!supabase) {
              setIsLoading(false);
              toast({
                  title: "Interactions Disabled",
                  description: "Supabase is not connected. Interactions are disabled.",
                  variant: "destructive"
              });
              return;
            }

            setIsLoading(true);
            
            const postData = await ensurePostEntry();
            if (postData) {
                setViews(postData.view_count);
                setLikes(postData.like_count);

                const { error } = await supabase.rpc('increment_view', { post_row_id: postId });
                if(!error) {
                    setViews(v => v + 1);
                } else {
                    console.error('Error incrementing view:', error);
                }
            }

            await fetchComments();

            const likedPosts = JSON.parse(localStorage.getItem('user_liked_posts') || '[]');
            if (likedPosts.includes(postId)) {
                setHasLiked(true);
            }
            setIsLoading(false);
        };
        initializeInteractions();
      }, [postId, ensurePostEntry, fetchComments, toast]);

      const handleLike = async () => {
        if (hasLiked || !supabase) return;
        
        setHasLiked(true);
        setLikes(l => l + 1);
        
        const { error } = await supabase.rpc('increment_like', { post_row_id: postId });
        
        if (error) {
            setHasLiked(false);
            setLikes(l => l - 1);
            toast({ title: "Error", description: "Couldn't like the post.", variant: "destructive" });
        } else {
            const likedPosts = JSON.parse(localStorage.getItem('user_liked_posts') || '[]');
            likedPosts.push(postId);
            localStorage.setItem('user_liked_posts', JSON.stringify(likedPosts));
            toast({ title: "Thanks!", description: "You've liked this post. ❤️" });
        }
      };

      const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim() || !supabase) return;

        const commentData = {
            post_id: postId,
            author: author.trim() || 'Anonymous',
            content: newComment.trim(),
        };

        const { data, error } = await supabase.from('comments').insert(commentData).select().single();

        if (error) {
            console.error("Error posting comment:", error);
            toast({ title: "Error", description: "Could not post comment. Please try again.", variant: "destructive" });
        } else {
            setComments(currentComments => [data, ...currentComments]);
            setNewComment('');
            toast({ title: "Comment Posted!", description: "Your comment has been successfully added." });
        }
      };

      const handleDeleteComment = async (commentId) => {
         if (!supabase) return;
        
         const originalComments = [...comments];
         setComments(comments.filter(c => c.id !== commentId));

         const { error } = await supabase.from('comments').delete().eq('id', commentId);

         if (error) {
            setComments(originalComments);
            toast({ title: "Error", description: "Could not delete comment.", variant: "destructive" });
         } else {
            toast({ title: "Comment Deleted", description: "The comment has been removed." });
         }
      };

      const borderClass = theme === 'dark' ? 'border-slate-700/50' : 'border-border';
      const titleClass = theme === 'dark' ? 'text-primary' : 'text-foreground';
      const secondaryTextClass = theme === 'dark' ? 'text-slate-400' : 'text-muted-foreground';
      const inputBgClass = theme === 'dark' ? 'bg-slate-800' : 'bg-background';
      const commentBgClass = theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100/80';
      const likeButtonClass = hasLiked ? 'bg-red-500/20 text-red-500 cursor-not-allowed' : 'hover:bg-red-500/10 hover:text-red-500';

      if (isLoading) {
        return <div className="text-center p-4">Loading interactions...</div>;
      }

      if(!supabase) {
        return null;
      }

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`mt-12 pt-8 border-t ${borderClass}`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-2xl font-bold ${titleClass}`}>Interactions</h2>
            <div className={`flex items-center space-x-4 ${secondaryTextClass}`}>
              <div className="flex items-center space-x-1" title={`${views} views`}>
                <Eye size={20} />
                <span>{views}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center space-x-1 ${likeButtonClass}`}
                onClick={handleLike}
                disabled={hasLiked}
              >
                <Heart size={20} className={hasLiked ? 'fill-current' : ''} />
                <span>{likes}</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold flex items-center ${titleClass}`}>
              <MessageSquare className="mr-2" /> Comments ({comments.length})
            </h3>
            
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input 
                  type="text"
                  placeholder="Your name (optional)"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className={`${inputBgClass} col-span-1 sm:col-span-1`}
                />
              </div>
              <Textarea 
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className={`${inputBgClass} h-24`}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={!newComment.trim()}>
                  <Send size={16} className="mr-2" /> Post Comment
                </Button>
              </div>
            </form>
            
            <div className="space-y-4">
              <AnimatePresence>
                {comments.map(comment => (
                  <motion.div 
                    key={comment.id} 
                    className={`p-4 rounded-lg ${commentBgClass} relative group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-primary">{comment.author}</p>
                        <p className={`text-xs ${secondaryTextClass}`}>
                          {new Date(comment.created_at).toLocaleString()}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:bg-destructive/10"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <p className="mt-2 text-foreground/90">{comment.content}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      );
    };

    export default PostInteractions;