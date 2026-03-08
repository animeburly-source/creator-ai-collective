import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { mockCreators } from "@/data/mockCreators";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Search,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Users,
  TrendingUp,
  SlidersHorizontal,
  X,
} from "lucide-react";

const platformIcon = (p: string) => {
  switch (p) {
    case "instagram": return <Instagram className="w-3.5 h-3.5" />;
    case "youtube": return <Youtube className="w-3.5 h-3.5" />;
    case "twitter": return <Twitter className="w-3.5 h-3.5" />;
    default: return null;
  }
};

const categories = ["All", "Fashion", "Tech", "Fitness", "Food", "Beauty", "Gaming"];
const platforms = ["All", "Instagram", "YouTube", "Twitter"];
const followerRanges = [
  { label: "Any", min: 0, max: Infinity },
  { label: "< 500K", min: 0, max: 500000 },
  { label: "500K - 1M", min: 500000, max: 1000000 },
  { label: "1M - 3M", min: 1000000, max: 3000000 },
  { label: "3M+", min: 3000000, max: Infinity },
];
const engagementRanges = [
  { label: "Any", min: 0, max: Infinity },
  { label: "< 5%", min: 0, max: 5 },
  { label: "5% - 7%", min: 5, max: 7 },
  { label: "7%+", min: 7, max: Infinity },
];
const locations = ["All", "Mumbai, India", "San Francisco, USA", "Los Angeles, USA", "Delhi, India", "Seoul, South Korea", "London, UK"];

const Discover = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [followerRange, setFollowerRange] = useState("Any");
  const [engagementRange, setEngagementRange] = useState("Any");
  const [location, setLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(true);

  const activeFilterCount = [category !== "All", platform !== "All", followerRange !== "Any", engagementRange !== "Any", location !== "All"].filter(Boolean).length;

  const filteredCreators = useMemo(() => {
    return mockCreators.filter((creator) => {
      // Search
      if (search) {
        const q = search.toLowerCase();
        const matches = creator.name.toLowerCase().includes(q) ||
          creator.category.toLowerCase().includes(q) ||
          creator.bio.toLowerCase().includes(q) ||
          creator.tags.some(t => t.toLowerCase().includes(q)) ||
          creator.location.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Category
      if (category !== "All" && creator.category !== category) return false;

      // Platform
      if (platform !== "All") {
        const p = platform.toLowerCase();
        if (!creator.platforms.some(pl => pl.name === p)) return false;
      }

      // Followers
      const fr = followerRanges.find(r => r.label === followerRange);
      if (fr && (creator.followersNum < fr.min || creator.followersNum >= fr.max)) return false;

      // Engagement
      const er = engagementRanges.find(r => r.label === engagementRange);
      if (er) {
        const eng = parseFloat(creator.engagement);
        if (eng < er.min || eng >= er.max) return false;
      }

      // Location
      if (location !== "All" && creator.location !== location) return false;

      return true;
    });
  }, [search, category, platform, followerRange, engagementRange, location]);

  const clearFilters = () => {
    setCategory("All");
    setPlatform("All");
    setFollowerRange("Any");
    setEngagementRange("Any");
    setLocation("All");
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-8 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
              Discover Creators
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Find the perfect influencers for your brand from our curated network of creators
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, niche, location, or keyword..."
              className="pl-12 h-14 text-base rounded-2xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary/50 backdrop-blur-sm"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filters + Results */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        {/* Filter toggle + active count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="bg-primary text-primary-foreground text-xs h-5 w-5 p-0 flex items-center justify-center rounded-full">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Clear all
              </button>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {filteredCreators.length} creator{filteredCreators.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Filter bar */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8"
          >
            <Card className="border-border shadow-card">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Category */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Category</label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(c => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Platform */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Platform</label>
                    <Select value={platform} onValueChange={setPlatform}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map(p => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Followers */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Followers</label>
                    <Select value={followerRange} onValueChange={setFollowerRange}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {followerRanges.map(r => (
                          <SelectItem key={r.label} value={r.label}>{r.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Engagement */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Engagement Rate</label>
                    <Select value={engagementRange} onValueChange={setEngagementRange}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {engagementRanges.map(r => (
                          <SelectItem key={r.label} value={r.label}>{r.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Location</label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map(l => (
                          <SelectItem key={l} value={l}>{l}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Creator Grid */}
        {filteredCreators.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-xl font-semibold mb-2">No creators found</p>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
            <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreators.map((creator, i) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/creator/${creator.id}`}>
                  <Card className="border-border shadow-card hover:shadow-glow hover:border-primary/20 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="pt-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-lg group-hover:bg-primary/20 transition-colors shrink-0">
                          {creator.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-lg truncate group-hover:text-primary transition-colors">
                            {creator.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{creator.location}</span>
                          </div>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 shrink-0 text-xs">
                          {creator.category}
                        </Badge>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {creator.bio}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{creator.followers}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="font-semibold">{creator.engagement}</span>
                        </div>
                      </div>

                      {/* Platforms + Tags */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {creator.platforms.map(p => (
                            <div key={p.name} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                              {platformIcon(p.name)}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-1.5">
                          {creator.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Discover;
