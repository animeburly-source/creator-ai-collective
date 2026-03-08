import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const brandBenefits = [
  "AI-powered creator discovery & matching",
  "Automated outreach & negotiation",
  "Campaign performance dashboards",
  "Secure escrow-based payments",
  "Fraud detection & fake follower analysis",
];

const creatorBenefits = [
  "Professional media kit & portfolio",
  "Receive campaign invites automatically",
  "Fair pricing powered by AI insights",
  "Secure & timely payments via escrow",
  "Collaborate with other creators",
];

const ForBrandsCreators = () => {
  return (
    <section id="for-brands" className="py-28 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* For Brands */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-card p-8 md:p-10 hover:shadow-premium transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                For Brands
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">
                Scale your influencer marketing
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Find authentic creators, launch campaigns, and measure ROI — all on autopilot.
              </p>
              <ul className="space-y-3.5 mb-8">
                {brandBenefits.map((b) => (
                  <motion.li
                    key={b}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-card-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 shadow-glow group/btn gap-2 rounded-xl">
                Start as a Brand
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>

          {/* For Creators */}
          <motion.div
            id="for-creators"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-card border-accent/10 p-8 md:p-10 hover:shadow-premium transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                For Creators
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">
                Get paid for your influence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Build your professional profile, land brand deals, and grow your career with confidence.
              </p>
              <ul className="space-y-3.5 mb-8">
                {creatorBenefits.map((b) => (
                  <motion.li
                    key={b}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm text-card-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group/btn gap-2 rounded-xl">
                Join as a Creator
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForBrandsCreators;
