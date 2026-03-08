import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Target,
  DollarSign,
  CalendarIcon,
  Users,
  FileText,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Instagram,
  Youtube,
  Twitter,
  ChevronRight,
} from "lucide-react";

const STEPS = [
  { id: 1, label: "Goals", icon: Target },
  { id: 2, label: "Budget", icon: DollarSign },
  { id: 3, label: "Timeline", icon: CalendarIcon },
  { id: 4, label: "Audience", icon: Users },
  { id: 5, label: "Content", icon: FileText },
  { id: 6, label: "Review", icon: CheckCircle2 },
];

const CAMPAIGN_GOALS = [
  { id: "awareness", label: "Brand Awareness", description: "Increase visibility and reach new audiences", emoji: "📢" },
  { id: "engagement", label: "Engagement", description: "Drive likes, comments, shares and saves", emoji: "💬" },
  { id: "traffic", label: "Website Traffic", description: "Send visitors to your website or landing page", emoji: "🌐" },
  { id: "sales", label: "Sales & Conversions", description: "Drive purchases and sign-ups", emoji: "🛒" },
  { id: "ugc", label: "User-Generated Content", description: "Get authentic content from creators", emoji: "📸" },
  { id: "launch", label: "Product Launch", description: "Create buzz for a new product or service", emoji: "🚀" },
];

const CATEGORIES = ["Fashion", "Tech", "Fitness", "Food", "Beauty", "Gaming", "Travel", "Music", "Comedy", "Education"];
const PLATFORMS = [
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "youtube", label: "YouTube", icon: Youtube },
  { id: "twitter", label: "Twitter / X", icon: Twitter },
];
const AGE_RANGES = ["13-17", "18-24", "25-34", "35-44", "45-54", "55+"];
const LOCATIONS = ["United States", "India", "United Kingdom", "Canada", "Australia", "Germany", "Brazil", "UAE", "South Korea", "Japan"];
const CONTENT_TYPES = [
  { id: "reel", label: "Short-form Video (Reels/Shorts)", description: "15-60 second vertical videos" },
  { id: "video", label: "Long-form Video", description: "3-15 minute YouTube-style content" },
  { id: "post", label: "Feed Post / Carousel", description: "Static image or multi-slide post" },
  { id: "story", label: "Stories", description: "24-hour ephemeral content" },
  { id: "livestream", label: "Live Stream", description: "Real-time interactive broadcast" },
  { id: "blog", label: "Blog / Article", description: "Written long-form content" },
];

interface CampaignData {
  name: string;
  goals: string[];
  budgetMin: number;
  budgetMax: number;
  currency: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  categories: string[];
  platforms: string[];
  ageRanges: string[];
  locations: string[];
  gender: string;
  minFollowers: number;
  contentTypes: string[];
  brief: string;
  dos: string;
  donts: string;
  hashtags: string;
  deliverables: string;
}

const initialData: CampaignData = {
  name: "",
  goals: [],
  budgetMin: 1000,
  budgetMax: 10000,
  currency: "USD",
  startDate: undefined,
  endDate: undefined,
  categories: [],
  platforms: [],
  ageRanges: [],
  locations: [],
  gender: "all",
  minFollowers: 10000,
  contentTypes: [],
  brief: "",
  dos: "",
  donts: "",
  hashtags: "",
  deliverables: "",
};

const formatBudget = (val: number, currency: string) => {
  const sym = currency === "USD" ? "$" : currency === "INR" ? "₹" : "€";
  if (val >= 1000) return `${sym}${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}K`;
  return `${sym}${val}`;
};

const formatFollowers = (val: number) => {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
  return val.toString();
};

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CampaignData>(initialData);

  const update = <K extends keyof CampaignData>(key: K, value: CampaignData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArrayItem = (key: "goals" | "categories" | "platforms" | "ageRanges" | "locations" | "contentTypes", item: string) => {
    const arr = data[key] as string[];
    update(key, arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return data.name.trim().length > 0 && data.goals.length > 0;
      case 2: return data.budgetMax >= data.budgetMin;
      case 3: return data.startDate !== undefined;
      case 4: return data.platforms.length > 0;
      case 5: return data.contentTypes.length > 0 && data.brief.trim().length > 0;
      default: return true;
    }
  };

  const handleSubmit = () => {
    toast.success("Campaign created successfully!", {
      description: `"${data.name}" is ready to go. Creators will be matched shortly.`,
    });
    setTimeout(() => navigate("/discover"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Create Campaign</h1>
            <p className="text-muted-foreground">Define your campaign and we'll match you with the perfect creators.</p>
          </motion.div>

          {/* Stepper */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {STEPS.map((s, i) => {
                const isActive = step === s.id;
                const isComplete = step > s.id;
                return (
                  <div key={s.id} className="flex items-center flex-1 last:flex-initial">
                    <button
                      onClick={() => { if (isComplete) setStep(s.id); }}
                      className={cn(
                        "flex flex-col items-center gap-1.5 group",
                        isComplete && "cursor-pointer",
                        !isComplete && !isActive && "cursor-default"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold",
                        isActive && "bg-primary text-primary-foreground shadow-glow",
                        isComplete && "bg-primary/20 text-primary group-hover:bg-primary/30",
                        !isActive && !isComplete && "bg-secondary text-muted-foreground"
                      )}>
                        {isComplete ? <CheckCircle2 className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                      </div>
                      <span className={cn(
                        "text-xs font-medium hidden sm:block",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}>
                        {s.label}
                      </span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <div className={cn(
                        "flex-1 h-0.5 mx-2 rounded-full transition-colors",
                        step > s.id ? "bg-primary/40" : "bg-border"
                      )} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-border shadow-card">
                <CardContent className="pt-8 pb-8">
                  {/* Step 1: Goals */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-1">Campaign Goals</h2>
                        <p className="text-sm text-muted-foreground">Name your campaign and select what you want to achieve.</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Campaign Name</label>
                        <Input
                          value={data.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="e.g., Summer Product Launch 2026"
                          className="h-12"
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-3 block">Select Goals</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {CAMPAIGN_GOALS.map((goal) => {
                            const selected = data.goals.includes(goal.id);
                            return (
                              <button
                                key={goal.id}
                                onClick={() => toggleArrayItem("goals", goal.id)}
                                className={cn(
                                  "flex items-start gap-3 p-4 rounded-xl border text-left transition-all",
                                  selected
                                    ? "border-primary bg-primary/5 shadow-sm"
                                    : "border-border hover:border-primary/30 hover:bg-secondary/30"
                                )}
                              >
                                <span className="text-2xl">{goal.emoji}</span>
                                <div>
                                  <p className="font-semibold text-sm">{goal.label}</p>
                                  <p className="text-xs text-muted-foreground mt-0.5">{goal.description}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Budget */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-1">Budget</h2>
                        <p className="text-sm text-muted-foreground">Set your campaign budget range.</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Currency</label>
                        <Select value={data.currency} onValueChange={(v) => update("currency", v)}>
                          <SelectTrigger className="w-40 h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="INR">INR (₹)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <label className="text-sm font-medium">Budget Range</label>
                          <span className="font-display font-bold text-primary text-lg">
                            {formatBudget(data.budgetMin, data.currency)} – {formatBudget(data.budgetMax, data.currency)}
                          </span>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <label className="text-xs text-muted-foreground mb-2 block">Minimum</label>
                            <Slider
                              value={[data.budgetMin]}
                              onValueChange={([v]) => update("budgetMin", Math.min(v, data.budgetMax))}
                              min={100}
                              max={100000}
                              step={100}
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground mb-2 block">Maximum</label>
                            <Slider
                              value={[data.budgetMax]}
                              onValueChange={([v]) => update("budgetMax", Math.max(v, data.budgetMin))}
                              min={100}
                              max={100000}
                              step={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {[
                          { label: "Starter", min: 500, max: 2000 },
                          { label: "Growth", min: 2000, max: 10000 },
                          { label: "Enterprise", min: 10000, max: 50000 },
                        ].map((preset) => (
                          <Button
                            key={preset.label}
                            variant="outline"
                            size="sm"
                            onClick={() => { update("budgetMin", preset.min); update("budgetMax", preset.max); }}
                            className="text-xs"
                          >
                            {preset.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Timeline */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-1">Timeline</h2>
                        <p className="text-sm text-muted-foreground">When should this campaign run?</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Start Date</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal h-12", !data.startDate && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {data.startDate ? format(data.startDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={data.startDate}
                                onSelect={(d) => update("startDate", d)}
                                disabled={(d) => d < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">End Date (optional)</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal h-12", !data.endDate && "text-muted-foreground")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {data.endDate ? format(data.endDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={data.endDate}
                                onSelect={(d) => update("endDate", d)}
                                disabled={(d) => d < (data.startDate || new Date())}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      {data.startDate && data.endDate && (
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                          <p className="text-sm">
                            Campaign duration:{" "}
                            <span className="font-semibold text-primary">
                              {Math.ceil((data.endDate.getTime() - data.startDate.getTime()) / (1000 * 60 * 60 * 24))} days
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 4: Audience */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-1">Target Audience</h2>
                        <p className="text-sm text-muted-foreground">Define who you want to reach through this campaign.</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-3 block">Platforms</label>
                        <div className="flex flex-wrap gap-3">
                          {PLATFORMS.map((p) => {
                            const selected = data.platforms.includes(p.id);
                            return (
                              <button
                                key={p.id}
                                onClick={() => toggleArrayItem("platforms", p.id)}
                                className={cn(
                                  "flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all",
                                  selected
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-border hover:border-primary/30 text-muted-foreground"
                                )}
                              >
                                <p.icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{p.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-3 block">Creator Categories</label>
                        <div className="flex flex-wrap gap-2">
                          {CATEGORIES.map((cat) => {
                            const selected = data.categories.includes(cat);
                            return (
                              <button
                                key={cat}
                                onClick={() => toggleArrayItem("categories", cat)}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg border text-sm transition-all",
                                  selected
                                    ? "border-primary bg-primary/10 text-primary font-medium"
                                    : "border-border hover:border-primary/30 text-muted-foreground"
                                )}
                              >
                                {cat}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium">Minimum Followers</label>
                          <span className="font-display font-bold text-primary">{formatFollowers(data.minFollowers)}</span>
                        </div>
                        <Slider
                          value={[data.minFollowers]}
                          onValueChange={([v]) => update("minFollowers", v)}
                          min={1000}
                          max={5000000}
                          step={1000}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-3 block">Audience Age Groups</label>
                        <div className="flex flex-wrap gap-2">
                          {AGE_RANGES.map((age) => {
                            const selected = data.ageRanges.includes(age);
                            return (
                              <button
                                key={age}
                                onClick={() => toggleArrayItem("ageRanges", age)}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg border text-sm transition-all",
                                  selected
                                    ? "border-primary bg-primary/10 text-primary font-medium"
                                    : "border-border hover:border-primary/30 text-muted-foreground"
                                )}
                              >
                                {age}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Gender</label>
                        <Select value={data.gender} onValueChange={(v) => update("gender", v)}>
                          <SelectTrigger className="h-10 w-48">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Genders</SelectItem>
                            <SelectItem value="male">Primarily Male</SelectItem>
                            <SelectItem value="female">Primarily Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-3 block">Target Locations</label>
                        <div className="flex flex-wrap gap-2">
                          {LOCATIONS.map((loc) => {
                            const selected = data.locations.includes(loc);
                            return (
                              <button
                                key={loc}
                                onClick={() => toggleArrayItem("locations", loc)}
                                className={cn(
                                  "px-3 py-1.5 rounded-lg border text-sm transition-all",
                                  selected
                                    ? "border-primary bg-primary/10 text-primary font-medium"
                                    : "border-border hover:border-primary/30 text-muted-foreground"
                                )}
                              >
                                {loc}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Content Requirements */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-1">Content Requirements</h2>
                        <p className="text-sm text-muted-foreground">Specify what kind of content you need from creators.</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-3 block">Content Types</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {CONTENT_TYPES.map((ct) => {
                            const selected = data.contentTypes.includes(ct.id);
                            return (
                              <button
                                key={ct.id}
                                onClick={() => toggleArrayItem("contentTypes", ct.id)}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-xl border text-left transition-all",
                                  selected
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/30"
                                )}
                              >
                                <Checkbox checked={selected} className="pointer-events-none" />
                                <div>
                                  <p className="text-sm font-medium">{ct.label}</p>
                                  <p className="text-xs text-muted-foreground">{ct.description}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Campaign Brief</label>
                        <Textarea
                          value={data.brief}
                          onChange={(e) => update("brief", e.target.value)}
                          placeholder="Describe what you want creators to communicate about your brand or product..."
                          className="min-h-[120px]"
                          maxLength={2000}
                        />
                        <p className="text-xs text-muted-foreground mt-1">{data.brief.length}/2000</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Do's</label>
                          <Textarea
                            value={data.dos}
                            onChange={(e) => update("dos", e.target.value)}
                            placeholder="Mention product name, use brand colors..."
                            className="min-h-[80px]"
                            maxLength={500}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Don'ts</label>
                          <Textarea
                            value={data.donts}
                            onChange={(e) => update("donts", e.target.value)}
                            placeholder="No competitor mentions, no political content..."
                            className="min-h-[80px]"
                            maxLength={500}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Required Hashtags</label>
                        <Input
                          value={data.hashtags}
                          onChange={(e) => update("hashtags", e.target.value)}
                          placeholder="#YourBrand #CampaignName"
                          maxLength={200}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Deliverables Summary</label>
                        <Textarea
                          value={data.deliverables}
                          onChange={(e) => update("deliverables", e.target.value)}
                          placeholder="e.g., 2 Reels + 3 Stories per creator, 1 YouTube integration..."
                          className="min-h-[80px]"
                          maxLength={500}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 6: Review */}
                  {step === 6 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-1">Review Campaign</h2>
                        <p className="text-sm text-muted-foreground">Review your campaign details before launching.</p>
                      </div>

                      <div className="space-y-4">
                        <ReviewSection title="Campaign" onEdit={() => setStep(1)}>
                          <ReviewRow label="Name" value={data.name} />
                          <ReviewRow label="Goals" value={data.goals.map((g) => CAMPAIGN_GOALS.find((cg) => cg.id === g)?.label).join(", ")} />
                        </ReviewSection>

                        <ReviewSection title="Budget" onEdit={() => setStep(2)}>
                          <ReviewRow label="Range" value={`${formatBudget(data.budgetMin, data.currency)} – ${formatBudget(data.budgetMax, data.currency)}`} />
                        </ReviewSection>

                        <ReviewSection title="Timeline" onEdit={() => setStep(3)}>
                          <ReviewRow label="Start" value={data.startDate ? format(data.startDate, "PPP") : "Not set"} />
                          <ReviewRow label="End" value={data.endDate ? format(data.endDate, "PPP") : "Open-ended"} />
                        </ReviewSection>

                        <ReviewSection title="Target Audience" onEdit={() => setStep(4)}>
                          <ReviewRow label="Platforms" value={data.platforms.map((p) => PLATFORMS.find((pl) => pl.id === p)?.label).join(", ") || "Any"} />
                          <ReviewRow label="Categories" value={data.categories.join(", ") || "Any"} />
                          <ReviewRow label="Min Followers" value={formatFollowers(data.minFollowers)} />
                          {data.locations.length > 0 && <ReviewRow label="Locations" value={data.locations.join(", ")} />}
                        </ReviewSection>

                        <ReviewSection title="Content" onEdit={() => setStep(5)}>
                          <ReviewRow label="Types" value={data.contentTypes.map((ct) => CONTENT_TYPES.find((c) => c.id === ct)?.label).join(", ")} />
                          {data.brief && <ReviewRow label="Brief" value={data.brief.length > 80 ? data.brief.slice(0, 80) + "…" : data.brief} />}
                          {data.hashtags && <ReviewRow label="Hashtags" value={data.hashtags} />}
                        </ReviewSection>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> {step === 1 ? "Cancel" : "Back"}
            </Button>

            {step < 6 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="gap-2 bg-primary hover:bg-primary/90">
                <Sparkles className="w-4 h-4" /> Launch Campaign
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ReviewSection = ({ title, onEdit, children }: { title: string; onEdit: () => void; children: React.ReactNode }) => (
  <div className="p-4 rounded-xl border border-border">
    <div className="flex justify-between items-center mb-3">
      <h3 className="font-display font-semibold">{title}</h3>
      <button onClick={onEdit} className="text-xs text-primary hover:underline">Edit</button>
    </div>
    <div className="space-y-1.5">{children}</div>
  </div>
);

const ReviewRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2 text-sm">
    <span className="text-muted-foreground shrink-0 w-28">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default CreateCampaign;
