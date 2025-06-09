
export const generateMockPosts = (page: number, limit: number) => {
  const posts = [];
  const startIndex = page * limit;
  
  const templates = [
    {
      content: "When he says he's 6 feet tall but you're 5'2 and still looking down at him 😂 #DatingReality",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      content: "Me: I'm looking for something serious\nAlso me: *swipes right based on their pet in the photo* 🐕❤️",
      image: undefined
    },
    {
      content: "Dating in 2024: 'Are you even real?' has become a legitimate question to ask someone 😅 #OnlineDating",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
    },
    {
      content: "That moment when you match with someone and they actually reply with more than 'hey' 🎉",
      image: undefined
    },
    {
      content: "Me explaining to my friends why I'm still single: 'I'm just picky' 💅 #Standards",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
    }
  ];

  const names = ["Emma", "Jake", "Sofia", "Alex", "Maya", "Oliver", "Luna", "Noah", "Aria", "Ethan"];
  const avatars = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=face"
  ];

  for (let i = 0; i < limit; i++) {
    const postIndex = (startIndex + i) % templates.length;
    const nameIndex = (startIndex + i) % names.length;
    const avatarIndex = (startIndex + i) % avatars.length;
    
    posts.push({
      id: `post-${startIndex + i}`,
      author: {
        name: names[nameIndex],
        avatar: avatars[avatarIndex],
        age: 22 + ((startIndex + i) % 10),
        userId: `user-${nameIndex}`
      },
      content: templates[postIndex].content,
      image: templates[postIndex].image,
      likes: Math.floor(Math.random() * 200) + 10,
      comments: Math.floor(Math.random() * 50) + 1,
      timeAgo: `${Math.floor(Math.random() * 24) + 1} hours ago`
    });
  }
  
  return posts;
};

export const generateMockUsers = (page: number, limit: number, query?: string) => {
  const users = [];
  const startIndex = page * limit;
  
  const names = [
    "Alex Johnson", "Maya Chen", "Emma Rodriguez", "Oliver Smith", "Luna Garcia",
    "Noah Wilson", "Aria Martinez", "Ethan Brown", "Sofia Davis", "Jake Miller",
    "Isabella Taylor", "Liam Anderson", "Zoe Thomas", "Lucas Jackson", "Chloe White"
  ];
  
  const bios = [
    "Coffee enthusiast ☕ Dog lover 🐕",
    "Artist and foodie 🎨🍕",
    "Yoga instructor and nature lover 🧘‍♀️🌿",
    "Tech enthusiast and gamer 💻🎮",
    "Travel blogger and photographer 📸✈️",
    "Fitness coach and nutritionist 💪🥗",
    "Music producer and DJ 🎵🎧",
    "Chef and wine connoisseur 👨‍🍳🍷",
    "Book lover and writer 📚✍️",
    "Outdoor adventurer and climber 🏔️🧗‍♀️"
  ];

  const locations = [
    "San Francisco, CA", "Los Angeles, CA", "New York, NY", "Seattle, WA", "Austin, TX",
    "Chicago, IL", "Boston, MA", "Denver, CO", "Portland, OR", "Miami, FL"
  ];

  const interests = [
    ["Coffee", "Hiking", "Photography"], ["Art", "Food", "Travel"], ["Yoga", "Nature", "Meditation"],
    ["Technology", "Gaming", "Movies"], ["Travel", "Photography", "Adventure"], ["Fitness", "Nutrition", "Health"],
    ["Music", "Concerts", "Dancing"], ["Cooking", "Wine", "Fine Dining"], ["Reading", "Writing", "Literature"],
    ["Hiking", "Climbing", "Outdoors"]
  ];

  for (let i = 0; i < limit; i++) {
    const userIndex = (startIndex + i) % names.length;
    const user = {
      id: `user-${startIndex + i}`,
      name: names[userIndex],
      age: 22 + ((startIndex + i) % 10),
      avatar: `https://images.unsplash.com/photo-${1472396961693 + (userIndex * 1000)}?w=400&h=400&fit=crop&crop=face`,
      bio: bios[userIndex % bios.length],
      location: locations[userIndex % locations.length],
      interests: interests[userIndex % interests.length]
    };

    // Filter by query if provided
    if (query) {
      const searchQuery = query.toLowerCase();
      const matchesName = user.name.toLowerCase().includes(searchQuery);
      const matchesBio = user.bio.toLowerCase().includes(searchQuery);
      const matchesInterests = user.interests.some(interest => 
        interest.toLowerCase().includes(searchQuery)
      );
      
      if (matchesName || matchesBio || matchesInterests) {
        users.push(user);
      }
    } else {
      users.push(user);
    }
  }
  
  return users;
};
