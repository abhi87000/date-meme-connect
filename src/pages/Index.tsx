
import { useEffect } from "react";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import ProfileCard from "@/components/ProfileCard";
import CreatePost from "@/components/CreatePost";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePaginatedFeed } from "@/hooks/usePaginatedFeed";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const Index = () => {
  const { posts, loading, hasMore, loadMore, initializeFeed } = usePaginatedFeed();

  useInfiniteScroll(loadMore, { hasMore, loading });

  useEffect(() => {
    initializeFeed();
  }, [initializeFeed]);

  const suggestedProfiles = [
    {
      id: "user-alex",
      name: "Alex",
      age: 27,
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face",
      bio: "Coffee enthusiast ☕ Dog lover 🐕 Always up for adventure! Looking for someone who can make me laugh as much as my dog does.",
      location: "2 km away",
      interests: ["Coffee", "Hiking", "Photography", "Dogs"],
      photos: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=300&h=300&fit=crop"
      ]
    },
    {
      id: "user-maya",
      name: "Maya",
      age: 24,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Foodie 🍕 Yoga instructor 🧘‍♀️ Meme connoisseur 😂 If you can't handle my weird sense of humor, swipe left!",
      location: "5 km away", 
      interests: ["Yoga", "Food", "Travel", "Memes"],
      photos: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <CreatePost />
            
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
              
              {/* Loading indicator at the bottom of posts */}
              {loading && (
                <div className="flex flex-col items-center justify-center py-8 space-y-3">
                  <LoadingSpinner size={32} />
                  <p className="text-center text-gray-500 font-medium">Loading more posts...</p>
                </div>
              )}
            </div>
            
            {!loading && !hasMore && posts.length > 0 && (
              <div className="py-8 text-center text-gray-500">
                <p>You've reached the end! 🎉</p>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">People You Might Like</h2>
                <div className="space-y-6">
                  {suggestedProfiles.map((profile) => (
                    <ProfileCard key={profile.id} {...profile} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
