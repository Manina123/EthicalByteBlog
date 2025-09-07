
    import React, { useState, useEffect, useCallback } from 'react';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import BlogPostPage from '@/pages/BlogPostPage';
    import AllBlogsPage from '@/pages/AllBlogsPage';
    import NotFoundPage from '@/pages/NotFoundPage';

    const App = () => {
      const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
      const [postId, setPostId] = useState(null);
      const [searchTerm, setSearchTerm] = useState('');

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
      
      const handleSetSearchTerm = useCallback((term) => {
        setSearchTerm(term);
      }, []);

      const renderPage = () => {
        let PageComponent;
        let pageProps = {};

        if (currentPath === '#/' || currentPath === '#') {
          PageComponent = HomePage;
          pageProps = { searchTerm, setSearchTerm: handleSetSearchTerm };
        } else if (currentPath === '#/all-blogs') {
          PageComponent = AllBlogsPage;
          pageProps = { searchTerm, setSearchTerm: handleSetSearchTerm };
        } else if (currentPath.startsWith('#/post/') && postId) {
          PageComponent = BlogPostPage;
          pageProps = { postId };
        } else {
          PageComponent = NotFoundPage;
        }

        return <PageComponent {...pageProps} />;
      };
      
      return (
        <Layout routeKey={currentPath}>
          {renderPage()}
        </Layout>
      );
    };

    export default App;
  