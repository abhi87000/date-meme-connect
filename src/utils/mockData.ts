
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
    },
    {
      content: "POV: You're on a first date and they order pineapple pizza 🍍🍕 Deal breaker or nah?",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
    },
    {
      content: "When your dating profile says 'love adventures' but your idea of adventure is trying a new Netflix series 📺",
      image: undefined
    },
    {
      content: "First date went so well, I'm already planning our imaginary wedding 💒✨ #Delulu",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop"
    },
    {
      content: "Me: I don't want drama\nAlso me: *screenshots every text to analyze with my friends* 📱👀",
      image: undefined
    },
    {
      content: "Dating app: 'You have a new match!'\nMe: *immediately starts overthinking what to say* 💭",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&h=400&fit=crop"
    },
    {
      content: "That awkward moment when you realize you've been talking to their dog in all their photos 🐶😅",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop"
    },
    {
      content: "Me after one good conversation: 'This is it, this is my person' 💕 *gets ghosted the next day*",
      image: undefined
    },
    {
      content: "Dating tip: If they don't laugh at your memes, they're not the one 📱😂 #MemesAreLife",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      content: "When they say they're 'fluent in sarcasm' but get offended by your first joke 🙄",
      image: undefined
    },
    {
      content: "Successfully made it through a dinner date without spilling anything on myself 🎉 Personal growth!",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
    },
    {
      content: "Me: I want someone genuine\nAlso me: *uses 20 filters on every photo* 📸✨",
      image: undefined
    },
    {
      content: "When you finally meet someone normal and your brain goes: 'What's wrong with them?' 🤔",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      content: "Dating in your 20s vs 30s: From 'do they like me?' to 'do they have a 401k?' 💰",
      image: undefined
    },
    {
      content: "That feeling when you find someone who actually wants to split the bill 🤝 Green flag!",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
    },
    {
      content: "Me trying to be mysterious and cool: *accidentally sends a 3-paragraph text about my day* 📝",
      image: undefined
    },
    {
      content: "Plot twist: The best relationship advice comes from your single friends 👯‍♀️💯",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop"
    },
    {
      content: "When they remember something small you mentioned weeks ago 🥺❤️ *heart melts*",
      image: undefined
    },
    {
      content: "Me on dating apps: 'I'm so unique and different'\nMy bio: 'Love dogs, coffee, and travel' ☕🐕✈️",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
    },
    {
      content: "Successfully went on a date without mentioning my ex 🏆 Personal best record!",
      image: undefined
    },
    {
      content: "When you're both awkward but in a cute way 🤓💕 Found my weirdo!",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=400&fit=crop"
    },
    {
      content: "Me: I'm independent and don't need anyone\nAlso me: *immediately calls mom after bad date* 📞",
      image: undefined
    },
    {
      content: "Dating red flag: They don't tip the waiter 🚩 Run, don't walk!",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    },
    {
      content: "When you both show up overdressed because you were trying to impress each other 👗🤵 Cute!",
      image: undefined
    },
    {
      content: "Me: I hate small talk\nAlso me: *talks about the weather for 20 minutes* 🌤️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      content: "That magical moment when you realize you can be 100% yourself with them ✨💫",
      image: undefined
    },
    {
      content: "Me trying to look effortlessly beautiful: *2 hours of getting ready* 💄👗",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop"
    },
    {
      content: "When they laugh at your terrible dad jokes 😂 This one's a keeper!",
      image: undefined
    },
    {
      content: "Dating milestone: They've seen you without makeup and still want to hang out 🥰",
      image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=600&h=400&fit=crop"
    },
    {
      content: "Me: I'm looking for my soulmate\nUniverse: Here's someone who chews loudly 😤",
      image: undefined
    },
    {
      content: "When you both hate the same things 😈 Bonding over mutual dislikes hits different",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop"
    },
    {
      content: "Successfully made it through the 'what are we?' conversation 🎯 Level up!",
      image: undefined
    },
    {
      content: "Me after one compliment: *plans entire future together* 💍👰‍♀️",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
    },
    {
      content: "When they remember your coffee order without asking ☕❤️ Small gestures, big impact",
      image: undefined
    },
    {
      content: "Dating app photos vs reality: Expectation vs delightful surprise 📸✨",
      image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&h=400&fit=crop"
    },
    {
      content: "Me trying to play hard to get: *responds immediately every time* 📱⚡",
      image: undefined
    },
    {
      content: "When you find someone who also quotes The Office constantly 📺 'That's what she said!'",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      content: "Successfully survived family dinner introduction 👨‍👩‍👧‍👦 Final boss defeated!",
      image: undefined
    },
    {
      content: "Me: I want someone spontaneous\nAlso me: *needs 3 days notice to hang out* 📅",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      content: "When they text you good morning without being asked 🌅💕 Green flag energy!",
      image: undefined
    },
    {
      content: "Dating update: Found someone who laughs at my stories for the 5th time 😂 Patience is a virtue",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop"
    },
    {
      content: "Me: I'm over dating apps\nAlso me: *downloads three new ones* 📱🔄",
      image: undefined
    },
    {
      content: "When you both agree pineapple belongs on pizza 🍍🍕 True love exists!",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
    },
    {
      content: "Successfully navigated the 'meeting the friends' phase 👫👬👭 Social anxiety conquered!",
      image: undefined
    },
    {
      content: "Me trying to be mysterious: *accidentally overshares entire life story* 📚",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      content: "When they bring you food without being asked 🍕❤️ Love language: snacks",
      image: undefined
    },
    {
      content: "Dating reality check: We're both just adults pretending we know what we're doing 🎭",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop"
    }
  ];

  const names = ["Emma", "Jake", "Sofia", "Alex", "Maya", "Oliver", "Luna", "Noah", "Aria", "Ethan", "Isabella", "Liam", "Zoe", "Lucas", "Chloe", "Mason", "Lily", "Owen", "Grace", "Leo"];
  const avatars = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
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
