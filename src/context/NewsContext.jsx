import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { newsService } from '../services/newsService';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [lastVisibleDoc, setLastVisibleDoc] = useState(null);

    useEffect(() => {
        console.log('Initializing NewsContext synchronization with paging...');
        const unsubscribe = newsService.subscribeToNews((items) => {
            setNews(items);
            setLoading(false);
            // If we got exactly the limit or more, there might be more
            setHasMore(items.length >= 10);
            if (items.length > 0) {
                setLastVisibleDoc(items[items.length - 1]);
            }
        }, 10);

        return () => unsubscribe();
    }, []);

    const loadMore = useCallback(async () => {
        if (loadingMore || !hasMore || !lastVisibleDoc) return;

        setLoadingMore(true);
        try {
            const moreNews = await newsService.loadMoreNews(lastVisibleDoc, 10);

            if (moreNews.length > 0) {
                setNews(prev => [...prev, ...moreNews]);
                setLastVisibleDoc(moreNews[moreNews.length - 1]);
                setHasMore(moreNews.length >= 10);
            } else {
                setHasMore(false);
            }
        } catch (err) {
            console.error('Error loading more news:', err);
            setError(err);
        } finally {
            setLoadingMore(false);
        }
    }, [lastVisibleDoc, loadingMore, hasMore]);

    const value = {
        news,
        loading,
        loadingMore,
        error,
        hasMore,
        loadMore,
        getPostBySlug: (slug) => news.find(p => p.slug === slug)
    };

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error('useNews must be used within a NewsProvider');
    }
    return context;
};
