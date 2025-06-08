
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Instagram, Linkedin, Mail, Edit } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const { userId } = useParams();
  const [requestSent, setRequestSent] = useState(false);
  
  // Mock data - in real app this would come from API
  const profile = {
    id: userId || "1",
    name: "Alex Johnson",
    age: 27,
    avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face",
    bio: "Coffee enthusiast ☕ Dog lover 🐕 Always up for adventure! Looking for someone who can make me laugh as much as my dog does. Love hiking, photography, and trying new restaurants.",
    location: "San Francisco, CA",
    interests: ["Coffee", "Hiking", "Photography", "Dogs", "Travel", "Food"],
    photos: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
    ],
    socialMedia: {
      instagram: "@alexj_adventures",
      linkedin: "alex-johnson-sf",
      email: "alex.johnson@email.com"
    }
  };

  const handleDateRequest = () => {
    setRequestSent(true);
    console.log(`Date request sent to ${profile.name}`);
  };

  const isOwnProfile = userId === "current-user"; // Mock check

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
          {/* Cover Photo */}
          <div className="relative h-64 gradient-sunset"></div>
          
          {/* Profile Info */}
          <div className="relative px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16">
              <Avatar className="h-32 w-32 ring-4 ring-white">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="text-4xl gradient-pink text-white font-bold">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{profile.name}, {profile.age}</h1>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {isOwnProfile ? (
                      <Button className="gradient-pink text-white font-semibold px-6 rounded-xl">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    ) : (
                      <Button
                        onClick={handleDateRequest}
                        disabled={requestSent}
                        className="gradient-pink text-white font-semibold px-6 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                      >
                        {requestSent ? (
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>Date Request Sent!</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>Ask on Date</span>
                          </div>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="mt-6">
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  {profile.socialMedia.instagram}
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </div>
            </div>
            
            {/* Interests */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
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
            
            {/* Photos */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Photos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {profile.photos.map((photo, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`${profile.name}'s photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
