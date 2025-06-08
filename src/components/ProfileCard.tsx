
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  avatar: string;
  bio: string;
  location: string;
  interests: string[];
  photos: string[];
}

const ProfileCard = ({ id, name, age, avatar, bio, location, interests, photos }: ProfileCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
      <div className="relative">
        <div className="h-48 gradient-sunset"></div>
        <Avatar className="absolute -bottom-12 left-4 h-24 w-24 ring-4 ring-white">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-2xl gradient-pink text-white font-bold">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      
      <div className="pt-16 p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1">{name}, {age}</h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="text-gray-600 leading-relaxed line-clamp-3">{bio}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-500">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {interests.slice(0, 4).map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2">
            {photos.slice(0, 3).map((photo, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={photo}
                  alt={`${name}'s photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <Link to={`/profile/${id}`}>
          <Button
            className="w-full gradient-pink text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>View Profile</span>
            </div>
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProfileCard;
