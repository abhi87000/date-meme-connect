
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/LazyImage";

interface PostCardProps {
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

const PostCard = ({ author, content, image, likes, comments, timeAgo }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const authorId = author.userId || "1";

  return (
    <Card className="mb-6 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/profile/${authorId}`} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="gradient-pink text-white font-semibold">
                {author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg hover:text-primary transition-colors">{author.name}, {author.age}</h3>
              <p className="text-sm text-muted-foreground">{timeAgo}</p>
            </div>
          </Link>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
        
        <p className="text-gray-800 mb-4 leading-relaxed">{content}</p>
        
        {image && (
          <div className="mb-4 rounded-xl overflow-hidden relative h-64">
            <LazyImage
              src={image}
              alt="Post content"
              className="w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-2 hover:bg-pink-50 transition-colors ${
                isLiked ? 'text-primary' : 'text-gray-600'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-primary' : ''}`} />
              <span className="font-medium">{likeCount}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-blue-50 text-gray-600">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">{comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-green-50 text-gray-600">
              <Share className="h-5 w-5" />
              <span className="font-medium">Share</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
