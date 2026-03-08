import { Search, Users, Building2, Megaphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";

const stats = [
  { icon: Users, value: "500K+", label: "Creators" },
  { icon: Building2, value: "20K+", label: "Brands" },
  { icon: Megaphone, value: "2M+", label: "Campaigns" },
];

const floatingTags = [
  { label: "Fashion", x: "8%", y: "20%", delay: 0 },
  { label: "Tech", x: "85%", y: "15%", delay: 0.3 },
  { label: "Fitness", x: "5%", y: "70%", delay: 0.6 },
  { label: "Food", x: "90%", y: "65%", delay: 0.9 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
      />

      {/* Floating tags */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1, y: [0, -10, 0] }}
          transition={{ delay: tag.delay + 1, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs text-primary-foreground/60"
          style={{ left: tag.x, top: tag.y }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {tag.label}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/70 text-sm mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
            AI-Powered Influencer Marketing
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6 text-balance">
            Find the Perfect{" "}
            <Highlight className="text-primary-foreground">
              Influencers
            </Highlight>{" "}
            for Your Brand
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Discover, connect, and collaborate with creators across every platform.
            Let AI handle the matchmaking while you focus on growing your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-16"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/30" />
              <Input
                placeholder="Search by niche, platform, location..."
                className="pl-11 h-13 bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 backdrop-blur-md rounded-xl focus-visible:ring-accent/50"
              />
            </div>
            <Button size="lg" className="h-13 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-glow group/btn">
              Search Creators
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.15, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="relative group/stat flex flex-col items-center gap-2 p-5 md:p-6 rounded-2xl bg-primary-foreground/[0.04] border border-primary-foreground/10 backdrop-blur-md cursor-default transition-all duration-300 hover:border-accent/40 hover:bg-primary-foreground/[0.08]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-1 group-hover/stat:shadow-[0_0_20px_-4px_hsl(var(--accent)/0.4)] transition-shadow duration-500">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="relative text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">{stat.value}</p>
                <p className="relative text-xs md:text-sm font-medium text-primary-foreground/50 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
