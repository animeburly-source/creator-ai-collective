export interface Creator {
  id: string;
  name: string;
  avatar: string;
  category: string;
  bio: string;
  location: string;
  followers: string;
  followersNum: number;
  engagement: string;
  platforms: { name: string; handle: string; followers: string }[];
  audienceDemographics: {
    countries: { name: string; percentage: number }[];
    ageGroups: { range: string; percentage: number }[];
    genderSplit: { male: number; female: number; other: number };
  };
  pastCampaigns: {
    brand: string;
    title: string;
    reach: string;
    engagement: string;
    date: string;
  }[];
  pricing: {
    type: string;
    price: string;
    description: string;
  }[];
  mediaKit: {
    title: string;
    type: string;
    thumbnail: string;
  }[];
  stats: {
    avgViews: string;
    avgLikes: string;
    avgComments: string;
    postsPerWeek: number;
  };
  tags: string[];
}

export const mockCreators: Creator[] = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    avatar: "PS",
    category: "Fashion",
    bio: "Fashion enthusiast & lifestyle creator sharing daily outfit inspiration, shopping hauls, and sustainable fashion tips. Collaborated with 50+ brands including Zara, H&M, and Myntra.",
    location: "Mumbai, India",
    followers: "2.1M",
    followersNum: 2100000,
    engagement: "4.8%",
    platforms: [
      { name: "instagram", handle: "@priyasharma", followers: "1.8M" },
      { name: "youtube", handle: "PriyaSharmaStyle", followers: "300K" },
    ],
    audienceDemographics: {
      countries: [
        { name: "India", percentage: 62 },
        { name: "United States", percentage: 15 },
        { name: "United Kingdom", percentage: 8 },
        { name: "UAE", percentage: 6 },
        { name: "Other", percentage: 9 },
      ],
      ageGroups: [
        { range: "13-17", percentage: 8 },
        { range: "18-24", percentage: 35 },
        { range: "25-34", percentage: 38 },
        { range: "35-44", percentage: 14 },
        { range: "45+", percentage: 5 },
      ],
      genderSplit: { male: 22, female: 74, other: 4 },
    },
    pastCampaigns: [
      { brand: "Myntra", title: "Summer Fashion Haul 2025", reach: "4.2M", engagement: "5.1%", date: "Jun 2025" },
      { brand: "H&M", title: "Sustainable Collection Launch", reach: "3.8M", engagement: "4.9%", date: "Apr 2025" },
      { brand: "Zara", title: "Winter Lookbook", reach: "5.1M", engagement: "5.5%", date: "Dec 2024" },
      { brand: "Nykaa Fashion", title: "Festive Edit", reach: "2.9M", engagement: "6.2%", date: "Oct 2024" },
    ],
    pricing: [
      { type: "Instagram Reel", price: "₹75,000", description: "30-60 sec reel with product integration" },
      { type: "Instagram Story", price: "₹25,000", description: "3-5 story slides with swipe-up link" },
      { type: "YouTube Video", price: "₹1,50,000", description: "Dedicated 8-12 min video review" },
      { type: "Bundle Package", price: "₹2,00,000", description: "1 Reel + 5 Stories + 1 Post" },
    ],
    mediaKit: [
      { title: "Summer Lookbook Reel", type: "video", thumbnail: "🎬" },
      { title: "Brand Collaboration Post", type: "image", thumbnail: "📸" },
      { title: "Shopping Haul Video", type: "video", thumbnail: "🎬" },
      { title: "OOTD Carousel", type: "image", thumbnail: "📸" },
      { title: "Behind the Scenes", type: "video", thumbnail: "🎬" },
      { title: "Product Review Story", type: "story", thumbnail: "📱" },
    ],
    stats: { avgViews: "850K", avgLikes: "92K", avgComments: "3.2K", postsPerWeek: 5 },
    tags: ["Fashion", "Lifestyle", "Sustainable", "Shopping", "OOTD"],
  },
  {
    id: "alex-chen",
    name: "Alex Chen",
    avatar: "AC",
    category: "Tech",
    bio: "Tech reviewer and gadget enthusiast. Breaking down the latest in smartphones, laptops, and AI tools. Known for honest, no-BS reviews that help viewers make informed decisions.",
    location: "San Francisco, USA",
    followers: "890K",
    followersNum: 890000,
    engagement: "6.2%",
    platforms: [
      { name: "youtube", handle: "AlexChenTech", followers: "720K" },
      { name: "twitter", handle: "@alexchentech", followers: "170K" },
    ],
    audienceDemographics: {
      countries: [
        { name: "United States", percentage: 45 },
        { name: "India", percentage: 18 },
        { name: "United Kingdom", percentage: 10 },
        { name: "Canada", percentage: 8 },
        { name: "Other", percentage: 19 },
      ],
      ageGroups: [
        { range: "13-17", percentage: 5 },
        { range: "18-24", percentage: 28 },
        { range: "25-34", percentage: 42 },
        { range: "35-44", percentage: 18 },
        { range: "45+", percentage: 7 },
      ],
      genderSplit: { male: 72, female: 24, other: 4 },
    },
    pastCampaigns: [
      { brand: "Samsung", title: "Galaxy S25 Ultra Review", reach: "2.1M", engagement: "6.8%", date: "Feb 2025" },
      { brand: "OnePlus", title: "OnePlus 13 Launch", reach: "1.8M", engagement: "7.1%", date: "Jan 2025" },
      { brand: "Notion", title: "Productivity Setup Tour", reach: "1.2M", engagement: "5.9%", date: "Nov 2024" },
    ],
    pricing: [
      { type: "YouTube Review", price: "$5,000", description: "Dedicated 10-15 min in-depth review" },
      { type: "YouTube Integration", price: "$2,500", description: "60-90 sec sponsored segment" },
      { type: "Twitter Thread", price: "$800", description: "Detailed thread with product highlights" },
      { type: "Bundle Package", price: "$7,000", description: "1 Review + 1 Integration + Twitter Thread" },
    ],
    mediaKit: [
      { title: "Galaxy S25 Review", type: "video", thumbnail: "🎬" },
      { title: "Tech Desk Setup", type: "image", thumbnail: "📸" },
      { title: "AI Tools Breakdown", type: "video", thumbnail: "🎬" },
      { title: "Laptop Comparison", type: "video", thumbnail: "🎬" },
    ],
    stats: { avgViews: "420K", avgLikes: "28K", avgComments: "1.8K", postsPerWeek: 3 },
    tags: ["Tech", "Reviews", "Gadgets", "AI", "Smartphones"],
  },
  {
    id: "maya-rodriguez",
    name: "Maya Rodriguez",
    avatar: "MR",
    category: "Fitness",
    bio: "Certified personal trainer & nutrition coach. Sharing workout routines, meal preps, and fitness transformations. Helping 1.5M+ people live healthier lives, one workout at a time.",
    location: "Los Angeles, USA",
    followers: "1.5M",
    followersNum: 1500000,
    engagement: "5.1%",
    platforms: [
      { name: "instagram", handle: "@mayafitlife", followers: "1.5M" },
    ],
    audienceDemographics: {
      countries: [
        { name: "United States", percentage: 52 },
        { name: "Brazil", percentage: 12 },
        { name: "Mexico", percentage: 9 },
        { name: "Canada", percentage: 7 },
        { name: "Other", percentage: 20 },
      ],
      ageGroups: [
        { range: "13-17", percentage: 6 },
        { range: "18-24", percentage: 32 },
        { range: "25-34", percentage: 40 },
        { range: "35-44", percentage: 16 },
        { range: "45+", percentage: 6 },
      ],
      genderSplit: { male: 35, female: 62, other: 3 },
    },
    pastCampaigns: [
      { brand: "Nike", title: "Just Do It Spring Campaign", reach: "3.5M", engagement: "5.8%", date: "Mar 2025" },
      { brand: "MyProtein", title: "Protein Launch Collab", reach: "2.8M", engagement: "6.1%", date: "Jan 2025" },
      { brand: "Lululemon", title: "Holiday Activewear", reach: "2.2M", engagement: "4.9%", date: "Nov 2024" },
    ],
    pricing: [
      { type: "Instagram Reel", price: "$4,500", description: "30-60 sec workout or product reel" },
      { type: "Instagram Post", price: "$3,000", description: "Feed post with product placement" },
      { type: "Story Series", price: "$1,500", description: "5-8 stories with workout demo" },
      { type: "Bundle Package", price: "$8,000", description: "1 Reel + 1 Post + Stories" },
    ],
    mediaKit: [
      { title: "Morning Routine Reel", type: "video", thumbnail: "🎬" },
      { title: "Transformation Post", type: "image", thumbnail: "📸" },
      { title: "Meal Prep Guide", type: "image", thumbnail: "📸" },
      { title: "Workout Tutorial", type: "video", thumbnail: "🎬" },
    ],
    stats: { avgViews: "620K", avgLikes: "78K", avgComments: "2.5K", postsPerWeek: 6 },
    tags: ["Fitness", "Nutrition", "Wellness", "Workout", "Health"],
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    avatar: "RP",
    category: "Food",
    bio: "Home chef turned food creator. Exploring street food, restaurant reviews, and easy recipes. My food videos have garnered 500M+ views. Let's make the world taste better, together!",
    location: "Delhi, India",
    followers: "3.2M",
    followersNum: 3200000,
    engagement: "7.3%",
    platforms: [
      { name: "instagram", handle: "@rajpatelfoods", followers: "2.5M" },
      { name: "youtube", handle: "RajPatelCooks", followers: "700K" },
    ],
    audienceDemographics: {
      countries: [
        { name: "India", percentage: 70 },
        { name: "United States", percentage: 10 },
        { name: "UAE", percentage: 7 },
        { name: "United Kingdom", percentage: 5 },
        { name: "Other", percentage: 8 },
      ],
      ageGroups: [
        { range: "13-17", percentage: 10 },
        { range: "18-24", percentage: 30 },
        { range: "25-34", percentage: 35 },
        { range: "35-44", percentage: 18 },
        { range: "45+", percentage: 7 },
      ],
      genderSplit: { male: 48, female: 49, other: 3 },
    },
    pastCampaigns: [
      { brand: "Swiggy", title: "Swiggy Instamart Cooking", reach: "8.5M", engagement: "8.2%", date: "May 2025" },
      { brand: "Haldiram's", title: "Festive Snack Challenge", reach: "6.2M", engagement: "7.8%", date: "Oct 2024" },
      { brand: "Borosil", title: "Kitchen Essentials Series", reach: "3.1M", engagement: "6.5%", date: "Aug 2024" },
    ],
    pricing: [
      { type: "Instagram Reel", price: "₹1,00,000", description: "Recipe or food review reel" },
      { type: "YouTube Video", price: "₹2,50,000", description: "Full recipe or restaurant review" },
      { type: "Instagram Story", price: "₹35,000", description: "Story series with food integration" },
      { type: "Bundle Package", price: "₹3,50,000", description: "1 YT Video + 1 Reel + Stories" },
    ],
    mediaKit: [
      { title: "Street Food Tour", type: "video", thumbnail: "🎬" },
      { title: "Recipe Tutorial", type: "video", thumbnail: "🎬" },
      { title: "Restaurant Review", type: "video", thumbnail: "🎬" },
      { title: "Food Photography", type: "image", thumbnail: "📸" },
    ],
    stats: { avgViews: "1.2M", avgLikes: "145K", avgComments: "5.8K", postsPerWeek: 4 },
    tags: ["Food", "Cooking", "Recipes", "Street Food", "Reviews"],
  },
  {
    id: "sarah-kim",
    name: "Sarah Kim",
    avatar: "SK",
    category: "Beauty",
    bio: "Licensed esthetician & beauty content creator. Reviewing skincare, makeup, and haircare with a science-backed approach. Trusted by 1.8M followers for honest, dermatologist-approved recommendations.",
    location: "Seoul, South Korea",
    followers: "1.8M",
    followersNum: 1800000,
    engagement: "5.9%",
    platforms: [
      { name: "instagram", handle: "@sarahkimbeauty", followers: "1.2M" },
      { name: "youtube", handle: "SarahKimGlow", followers: "450K" },
      { name: "twitter", handle: "@sarahkimglow", followers: "150K" },
    ],
    audienceDemographics: {
      countries: [
        { name: "South Korea", percentage: 30 },
        { name: "United States", percentage: 25 },
        { name: "Japan", percentage: 12 },
        { name: "Indonesia", percentage: 8 },
        { name: "Other", percentage: 25 },
      ],
      ageGroups: [
        { range: "13-17", percentage: 12 },
        { range: "18-24", percentage: 38 },
        { range: "25-34", percentage: 33 },
        { range: "35-44", percentage: 12 },
        { range: "45+", percentage: 5 },
      ],
      genderSplit: { male: 15, female: 82, other: 3 },
    },
    pastCampaigns: [
      { brand: "Laneige", title: "Water Bank Collection", reach: "4.8M", engagement: "6.5%", date: "Mar 2025" },
      { brand: "Fenty Beauty", title: "Foundation Matchmaker", reach: "3.9M", engagement: "5.8%", date: "Jan 2025" },
      { brand: "The Ordinary", title: "Skincare Routine Rebuild", reach: "5.2M", engagement: "7.1%", date: "Sep 2024" },
    ],
    pricing: [
      { type: "Instagram Reel", price: "$6,000", description: "Product review or tutorial reel" },
      { type: "YouTube Review", price: "$8,000", description: "Full in-depth product review" },
      { type: "Instagram Post", price: "$3,500", description: "Feed post with product showcase" },
      { type: "Bundle Package", price: "$15,000", description: "YT Video + Reel + Post + Stories" },
    ],
    mediaKit: [
      { title: "K-Beauty Routine", type: "video", thumbnail: "🎬" },
      { title: "Skincare Flatlay", type: "image", thumbnail: "📸" },
      { title: "Makeup Tutorial", type: "video", thumbnail: "🎬" },
      { title: "Product Comparison", type: "video", thumbnail: "🎬" },
    ],
    stats: { avgViews: "720K", avgLikes: "85K", avgComments: "4.1K", postsPerWeek: 4 },
    tags: ["Beauty", "Skincare", "K-Beauty", "Makeup", "Dermatology"],
  },
  {
    id: "james-okafor",
    name: "James Okafor",
    avatar: "JO",
    category: "Gaming",
    bio: "Pro gamer & content creator. Streaming daily on YouTube, covering FPS, RPGs, and indie gems. Known for entertaining commentary and competitive gameplay. Let's game together!",
    location: "London, UK",
    followers: "4.1M",
    followersNum: 4100000,
    engagement: "8.1%",
    platforms: [
      { name: "youtube", handle: "JamesPlaysGames", followers: "3.5M" },
      { name: "twitter", handle: "@jamesokafor_gg", followers: "600K" },
    ],
    audienceDemographics: {
      countries: [
        { name: "United States", percentage: 35 },
        { name: "United Kingdom", percentage: 22 },
        { name: "Germany", percentage: 10 },
        { name: "Canada", percentage: 8 },
        { name: "Other", percentage: 25 },
      ],
      ageGroups: [
        { range: "13-17", percentage: 18 },
        { range: "18-24", percentage: 40 },
        { range: "25-34", percentage: 30 },
        { range: "35-44", percentage: 9 },
        { range: "45+", percentage: 3 },
      ],
      genderSplit: { male: 78, female: 19, other: 3 },
    },
    pastCampaigns: [
      { brand: "Razer", title: "Razer Viper V3 Launch", reach: "9.2M", engagement: "8.9%", date: "Apr 2025" },
      { brand: "EA Games", title: "FC 25 Launch Stream", reach: "7.5M", engagement: "9.2%", date: "Sep 2024" },
      { brand: "G-Fuel", title: "New Flavor Drop", reach: "5.8M", engagement: "7.5%", date: "Jul 2024" },
    ],
    pricing: [
      { type: "YouTube Dedicated Video", price: "$12,000", description: "Full gameplay or review video" },
      { type: "YouTube Integration", price: "$5,000", description: "60-90 sec in-video sponsor spot" },
      { type: "Live Stream Sponsorship", price: "$8,000", description: "2-hour branded live stream" },
      { type: "Bundle Package", price: "$22,000", description: "Video + Stream + Twitter Campaign" },
    ],
    mediaKit: [
      { title: "Gaming Setup Tour", type: "video", thumbnail: "🎬" },
      { title: "Tournament Highlights", type: "video", thumbnail: "🎬" },
      { title: "Stream Clip Compilation", type: "video", thumbnail: "🎬" },
      { title: "Setup Photography", type: "image", thumbnail: "📸" },
    ],
    stats: { avgViews: "1.8M", avgLikes: "210K", avgComments: "8.5K", postsPerWeek: 5 },
    tags: ["Gaming", "FPS", "Streaming", "Esports", "Reviews"],
  },
];

export const getCreatorById = (id: string) => mockCreators.find((c) => c.id === id);
