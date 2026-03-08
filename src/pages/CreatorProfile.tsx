import { useParams, Link } from "react-router-dom";
import { getCreatorById } from "@/data/mockCreators";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  Instagram, Youtube, Twitter, MapPin, ArrowLeft, Mail, Eye, Heart,
  MessageSquare, Calendar, TrendingUp, DollarSign, Image, Video, Smartphone,
  Users, Globe, BarChart3,
} from "lucide-react";

const platformIcon = (p: string) => {
  switch (p) {
    case "instagram": return <Instagram className="w-4 h-4" />;
    case "youtube": return <Youtube className="w-4 h-4" />;
    case "twitter": return <Twitter className="w-4 h-4" />;
    default: return null;
  }
};

const mediaTypeIcon = (type: string) => {
  switch (type) {
    case "video": return <Video className="w-5 h-5" />;
    case "image": return <Image className="w-5 h-5" />;
    case "story": return <Smartphone className="w-5 h-5" />;
    default: return <Image className="w-5 h-5" />;
  }
};

const CreatorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const creator = getCreatorById(id || "");

  if (!creator) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Creator Not Found</h1>
          <p className="text-muted-foreground mb-8">The creator you're looking for doesn't exist.</p>
          <Link to="/">
            <Button><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const maxCountryPercentage = Math.max(...creator.audienceDemographics.countries.map(c => c.percentage));
  const maxAgePercentage = Math.max(...creator.audienceDemographics.ageGroups.map(a => a.percentage));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-16">
        <div className="h-48 md:h-64 bg-gradient-hero" />
        <div className="container mx-auto px-4 lg:px-8 relative -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Avatar */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-primary/10 border-4 border-background flex items-center justify-center font-display font-bold text-primary text-4xl md:text-5xl shadow-glow">
              {creator.avatar}
            </div>

            {/* Info */}
            <div className="flex-1 pt-2 md:pt-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="font-display text-3xl md:text-4xl font-bold">{creator.name}</h1>
                <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">{creator.category}</Badge>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{creator.location}</span>
              </div>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">{creator.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {creator.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-2 md:pt-8 w-full sm:w-auto">
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" /> Contact Creator
              </Button>
              <Button variant="outline">
                <DollarSign className="w-4 h-4 mr-2" /> View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content grid */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats overview */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" /> Performance Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { icon: Eye, label: "Avg Views", value: creator.stats.avgViews },
                      { icon: Heart, label: "Avg Likes", value: creator.stats.avgLikes },
                      { icon: MessageSquare, label: "Avg Comments", value: creator.stats.avgComments },
                      { icon: Calendar, label: "Posts/Week", value: creator.stats.postsPerWeek.toString() },
                    ].map(stat => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                        <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <p className="font-display text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Audience Demographics */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" /> Audience Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Gender split */}
                  <div>
                    <p className="text-sm font-medium mb-3">Gender Split</p>
                    <div className="flex h-4 rounded-full overflow-hidden">
                      <div className="bg-primary" style={{ width: `${creator.audienceDemographics.genderSplit.male}%` }} />
                      <div className="bg-accent" style={{ width: `${creator.audienceDemographics.genderSplit.female}%` }} />
                      <div className="bg-muted-foreground/30" style={{ width: `${creator.audienceDemographics.genderSplit.other}%` }} />
                    </div>
                    <div className="flex gap-6 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary" /> Male {creator.audienceDemographics.genderSplit.male}%</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-accent" /> Female {creator.audienceDemographics.genderSplit.female}%</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" /> Other {creator.audienceDemographics.genderSplit.other}%</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Countries */}
                  <div>
                    <p className="text-sm font-medium mb-3 flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Top Countries</p>
                    <div className="space-y-3">
                      {creator.audienceDemographics.countries.map(country => (
                        <div key={country.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{country.name}</span>
                            <span className="text-muted-foreground">{country.percentage}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary/70 rounded-full transition-all" style={{ width: `${(country.percentage / maxCountryPercentage) * 100}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Age groups */}
                  <div>
                    <p className="text-sm font-medium mb-3">Age Distribution</p>
                    <div className="flex items-end gap-3 h-32">
                      {creator.audienceDemographics.ageGroups.map(age => (
                        <div key={age.range} className="flex-1 flex flex-col items-center gap-1">
                          <span className="text-xs font-medium text-primary">{age.percentage}%</span>
                          <div className="w-full bg-secondary rounded-t-lg overflow-hidden" style={{ height: `${(age.percentage / maxAgePercentage) * 100}%` }}>
                            <div className="w-full h-full bg-primary/60" />
                          </div>
                          <span className="text-[10px] text-muted-foreground">{age.range}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Past Campaigns */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" /> Past Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {creator.pastCampaigns.map((campaign, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors gap-3">
                        <div>
                          <p className="font-semibold">{campaign.title}</p>
                          <p className="text-sm text-muted-foreground">with {campaign.brand} • {campaign.date}</p>
                        </div>
                        <div className="flex gap-6 text-sm">
                          <div className="text-center">
                            <p className="font-display font-bold text-primary">{campaign.reach}</p>
                            <p className="text-xs text-muted-foreground">Reach</p>
                          </div>
                          <div className="text-center">
                            <p className="font-display font-bold text-accent">{campaign.engagement}</p>
                            <p className="text-xs text-muted-foreground">Engagement</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Media Kit */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <Image className="w-5 h-5 text-primary" /> Media Kit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {creator.mediaKit.map((item, i) => (
                      <div key={i} className="group relative aspect-video rounded-xl bg-secondary/50 border border-border flex flex-col items-center justify-center gap-2 hover:border-primary/30 hover:bg-secondary transition-all cursor-pointer">
                        <span className="text-3xl">{item.thumbnail}</span>
                        <p className="text-xs font-medium text-center px-2">{item.title}</p>
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-background/80 flex items-center justify-center text-muted-foreground">
                          {mediaTypeIcon(item.type)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-8">
            {/* Platform stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {creator.platforms.map(p => (
                    <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {platformIcon(p.name)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{p.handle}</p>
                        <p className="text-xs text-muted-foreground">{p.followers} followers</p>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Followers</span>
                    <span className="font-display font-bold text-lg">{creator.followers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg Engagement</span>
                    <span className="font-display font-bold text-lg text-primary">{creator.engagement}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pricing */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <Card className="border-border shadow-card" id="pricing">
                <CardHeader>
                  <CardTitle className="font-display text-lg flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" /> Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {creator.pricing.map((p, i) => (
                    <div key={i} className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-sm">{p.type}</p>
                        <span className="font-display font-bold text-primary">{p.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{p.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Card className="border-primary/20 shadow-glow bg-gradient-card">
                <CardContent className="pt-6 text-center space-y-4">
                  <p className="font-display font-semibold text-lg">Ready to Collaborate?</p>
                  <p className="text-sm text-muted-foreground">Send a campaign proposal to {creator.name} and start creating amazing content together.</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Mail className="w-4 h-4 mr-2" /> Send Proposal
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreatorProfile;
