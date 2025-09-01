
import React, { useState, useEffect } from 'react';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import BlogPostPage from '@/pages/BlogPostPage';
    import AllBlogsPage from '@/pages/AllBlogsPage';
    import NotFoundPage from '@/pages/NotFoundPage';

    const App = () => {
      const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
      const [postId, setPostId] = useState(null);

      useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash || '#/';
          setCurrentPath(hash);
          
          if (hash.startsWith('#/post/')) {
            setPostId(hash.substring('#/post/'.length));
          } else {
            setPostId(null);
          }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); 

        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);

      let PageComponent;
      let pageProps = {};

      if (currentPath === '#/' || currentPath === '#') {
        PageComponent = HomePage;
      } else if (currentPath === '#/all-blogs') {
        PageComponent = AllBlogsPage;
      } else if (currentPath.startsWith('#/post/') && postId) {
        PageComponent = BlogPostPage;
        pageProps = { postId };
      } else {
        PageComponent = NotFoundPage;
      }
      
      return (
        <Layout routeKey={currentPath}>
          <PageComponent {...pageProps} />
        </Layout>
      );
    };

    export default App;
