
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Smile, MapPin } from "lucide-react";
import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      console.log("Posting:", content);
      setContent("");
      // Here you would typically send to your backend
    }
  };

  return (
    <Card className="mb-6 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex space-x-4">
          <Avatar className="h-12 w-12 ring-2 ring-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" alt="You" />
            <AvatarFallback className="gradient-pink text-white font-semibold">
              Y
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Share a dating meme or funny story... 😄"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-0 bg-gray-50 focus:ring-2 focus:ring-primary/20 resize-none"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-primary hover:bg-pink-50">
                  <Image className="h-5 w-5 mr-2" />
                  Photo
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-pink-50">
                  <Smile className="h-5 w-5 mr-2" />
                  Meme
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-pink-50">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location
                </Button>
              </div>
              <Button
                onClick={handlePost}
                disabled={!content.trim()}
                className="gradient-pink text-white font-semibold px-6 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
