
import { useState, useCallback } from 'react';
import { generateMockPosts } from '@/utils/mockData';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    age: number;
    userId?: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

export const usePaginatedFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newPosts = generateMockPosts(page, 5);
    
    if (newPosts.length === 0 || page >= 100) { // Limit to 500 posts total
      setHasMore(false);
    } else {
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
    }
    
    setLoading(false);
  }, [loading, hasMore, page]);

  const initializeFeed = useCallback(() => {
    setPosts([]);
    setPage(0);
    setHasMore(true);
    loadMore();
  }, [loadMore]);

  return {
    posts,
    loading,
    hasMore,
    loadMore,
    initializeFeed
  };
};
