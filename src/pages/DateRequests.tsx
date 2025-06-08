
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const DateRequests = () => {
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: "1",
      name: "Emma Wilson",
      age: 25,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Love hiking and good coffee ☕",
      timeAgo: "2 hours ago"
    },
    {
      id: "2", 
      name: "Sofia Martinez",
      age: 26,
      avatar: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=face",
      bio: "Foodie and yoga enthusiast 🧘‍♀️",
      timeAgo: "1 day ago"
    }
  ]);

  const [acceptedDates] = useState([
    {
      id: "3",
      name: "Maya Patel",
      age: 24,
      avatar: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=face",
      bio: "Artist and dog lover 🎨🐕",
      acceptedAt: "3 days ago",
      status: "Planning date"
    }
  ]);

  const handleAcceptRequest = (requestId: string) => {
    setPendingRequests(prev => prev.filter(req => req.id !== requestId));
    console.log(`Accepted date request from ${requestId}`);
  };

  const handleRejectRequest = (requestId: string) => {
    setPendingRequests(prev => prev.filter(req => req.id !== requestId));
    console.log(`Rejected date request from ${requestId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Date Requests</h1>
          
          <Tabs defaultValue="pending" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pending">
                Pending Requests ({pendingRequests.length})
              </TabsTrigger>
              <TabsTrigger value="accepted">
                Accepted Dates ({acceptedDates.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pending" className="mt-6">
              <div className="space-y-4">
                {pendingRequests.length === 0 ? (
                  <Card className="p-8 text-center border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                    <p className="text-gray-500">No pending date requests</p>
                  </Card>
                ) : (
                  pendingRequests.map((request) => (
                    <Card key={request.id} className="p-6 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-16 w-16 ring-2 ring-primary/20">
                            <AvatarImage src={request.avatar} alt={request.name} />
                            <AvatarFallback className="gradient-pink text-white font-semibold">
                              {request.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-semibold">{request.name}, {request.age}</h3>
                            <p className="text-gray-600">{request.bio}</p>
                            <p className="text-sm text-muted-foreground">{request.timeAgo}</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleRejectRequest(request.id)}
                            variant="outline"
                            size="sm"
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={() => handleAcceptRequest(request.id)}
                            size="sm"
                            className="gradient-pink text-white hover:opacity-90"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="accepted" className="mt-6">
              <div className="space-y-4">
                {acceptedDates.length === 0 ? (
                  <Card className="p-8 text-center border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                    <p className="text-gray-500">No accepted dates yet</p>
                  </Card>
                ) : (
                  acceptedDates.map((date) => (
                    <Card key={date.id} className="p-6 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-16 w-16 ring-2 ring-green-200">
                            <AvatarImage src={date.avatar} alt={date.name} />
                            <AvatarFallback className="gradient-pink text-white font-semibold">
                              {date.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-semibold">{date.name}, {date.age}</h3>
                            <p className="text-gray-600">{date.bio}</p>
                            <p className="text-sm text-green-600 font-medium">{date.status}</p>
                            <p className="text-sm text-muted-foreground">Accepted {date.acceptedAt}</p>
                          </div>
                        </div>
                        
                        <Button
                          size="sm"
                          className="gradient-pink text-white hover:opacity-90"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DateRequests;
