import { Mail, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";

const avatars = [
  { initials: "JD", color: "bg-primary" },
  { initials: "AS", color: "bg-accent" },
  { initials: "MK", color: "bg-primary/80" },
];

const trustedLogos = ["Amazon", "Spotify", "Nike", "Google", "Swiggy"];

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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/70 text-sm mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
              v2.0 is now live
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6 text-balance">
              Launch Influencer Campaigns With{" "}
              <Highlight className="text-primary-foreground">
                AI Agents
              </Highlight>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/50 max-w-xl mb-10 leading-relaxed"
            >
              The ultimate AI-powered marketing platform. Automate discovery, outreach, and management with precision. Scaling from $0 to $1M monthly ad spend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mb-8"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/30" />
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  className="pl-11 h-13 bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 backdrop-blur-md rounded-xl focus-visible:ring-accent/50"
                />
              </div>
              <Button size="lg" className="h-13 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-glow group/btn">
                Start Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            </motion.div>

            {/* Avatar group */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${a.color} border-2 border-background/20 flex items-center justify-center text-xs font-bold text-primary-foreground`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-primary-foreground/50">
                Joined by <span className="text-primary-foreground/80 font-medium">2,400+</span> growth marketers
              </span>
            </motion.div>
          </motion.div>

          {/* Right side - ROI card + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            {/* ROI Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full max-w-sm p-8 rounded-3xl bg-primary-foreground/[0.04] border border-primary-foreground/10 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-60" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground/50">Campaign ROI</p>
                  </div>
                </div>
                <p className="text-5xl font-extrabold text-primary-foreground tracking-tight mb-2">+142.8%</p>
                <p className="text-sm text-primary-foreground/40">Average return on influencer spend</p>
              </div>
            </motion.div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { value: "500K+", label: "Creators" },
                { value: "2M+", label: "Campaigns" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.15 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-5 rounded-2xl bg-primary-foreground/[0.04] border border-primary-foreground/10 backdrop-blur-md text-center"
                >
                  <p className="text-2xl font-extrabold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trusted by logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-medium text-primary-foreground/30 uppercase tracking-[0.2em] mb-6">Trusted by global leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustedLogos.map((logo) => (
              <span key={logo} className="text-lg md:text-xl font-bold text-primary-foreground/20 tracking-wider uppercase">
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
