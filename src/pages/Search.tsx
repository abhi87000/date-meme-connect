
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  // Mock search results - in real app this would come from API
  const [searchResults] = useState([
    {
      id: "1",
      name: "Alex Johnson",
      age: 27,
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face",
      bio: "Coffee enthusiast ☕ Dog lover 🐕",
      location: "San Francisco, CA",
      interests: ["Coffee", "Hiking", "Photography"]
    },
    {
      id: "2",
      name: "Maya Chen",
      age: 24,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Artist and foodie 🎨🍕",
      location: "Los Angeles, CA", 
      interests: ["Art", "Food", "Travel"]
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      age: 26,
      avatar: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=face",
      bio: "Yoga instructor and nature lover 🧘‍♀️🌿",
      location: "Seattle, WA",
      interests: ["Yoga", "Nature", "Meditation"]
    }
  ]);

  const filteredResults = searchResults.filter(person =>
    person.name.toLowerCase().includes(query.toLowerCase()) ||
    person.bio.toLowerCase().includes(query.toLowerCase()) ||
    person.interests.some(interest => 
      interest.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Search Results</h1>
            {query && (
              <p className="text-gray-600 mt-2">
                {filteredResults.length} results for "{query}"
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((person) => (
              <Link key={person.id} to={`/profile/${person.id}`}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm cursor-pointer">
                  <div className="relative">
                    <div className="h-32 gradient-sunset"></div>
                    <Avatar className="absolute -bottom-8 left-4 h-16 w-16 ring-4 ring-white">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback className="gradient-pink text-white font-bold">
                        {person.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="pt-12 p-4">
                    <h3 className="text-xl font-bold mb-1">{person.name}, {person.age}</h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{person.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{person.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {person.interests.slice(0, 3).map((interest, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-pink-100 text-pink-700 text-xs"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredResults.length === 0 && query && (
            <Card className="p-8 text-center border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <p className="text-gray-500">No people found matching "{query}"</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
