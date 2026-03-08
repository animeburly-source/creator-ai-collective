import { Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AnalyticsSection = () => {
  return (
    <section className="py-28 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl glass-card p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">AI Agent Active</span>
                  <span className="ml-auto px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">MATCH 98%</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                    <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-1">4.2x</p>
                    <p className="text-sm text-muted-foreground">Average ROI</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                    <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-1">10M+</p>
                    <p className="text-sm text-muted-foreground">Creators Scanned</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Deep Analytics
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">
              Decisions Driven by <span className="text-gradient">Deep Data</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every influencer partnership is measured against your bottom line. Track EMV, CAC, and LTV with granular precision across all social channels.
            </p>
            <Button className="bg-primary hover:bg-primary/90 shadow-glow group/btn gap-2 rounded-xl">
              Explore Analytics
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
