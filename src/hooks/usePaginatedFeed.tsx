
import { useState, useCallback, useRef } from 'react';
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
  const [initialized, setInitialized] = useState(false);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    console.log("Loading more posts, page:", page);
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newPosts = generateMockPosts(page, 20);
    
    if (newPosts.length === 0 || page >= 25) { // Limit to 500 posts total (25 pages * 20 posts)
      setHasMore(false);
    } else {
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
    }
    
    setLoading(false);
  }, [loading, hasMore, page]);

  const initializeFeed = useCallback(async () => {
    if (initialized) return;
    
    console.log("Initializing feed for first time...");
    setInitialized(true);
    setPosts([]);
    setPage(0);
    setHasMore(true);
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const initialPosts = generateMockPosts(0, 20);
    setPosts(initialPosts);
    setPage(1);
    setLoading(false);
  }, [initialized]);

  return {
    posts,
    loading,
    hasMore,
    loadMore,
    initializeFeed
  };
};
