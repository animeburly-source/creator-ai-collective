import { Search, Users, Building2, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "500K+", label: "Creators" },
  { icon: Building2, value: "20K+", label: "Brands" },
  { icon: Megaphone, value: "2M+", label: "Campaigns" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground/80 text-sm mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            AI-Powered Influencer Marketing
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Find the Perfect{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Influencers
            </span>{" "}
            for Your Brand
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10">
            Discover, connect, and collaborate with creators across every platform.
            Let AI handle the matchmaking while you focus on growing your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-14">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by niche, platform, location..."
                className="pl-11 h-12 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 backdrop-blur-sm"
              />
            </div>
            <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Search Creators
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-display font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/50">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
