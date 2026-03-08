import { CheckCircle2 } from "lucide-react";
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
    <section id="for-brands" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Brands */}
          <motion.div
            id="for-brands"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              For Brands
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-3">
              Scale your influencer marketing
            </h3>
            <p className="text-muted-foreground mb-6">
              Find authentic creators, launch campaigns, and measure ROI — all on autopilot.
            </p>
            <ul className="space-y-3 mb-8">
              {brandBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-card-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90">Start as a Brand</Button>
          </motion.div>

          {/* For Creators */}
          <motion.div
            id="for-creators"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-accent/20 bg-card p-8 md:p-10 shadow-card"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              For Creators
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-3">
              Get paid for your influence
            </h3>
            <p className="text-muted-foreground mb-6">
              Build your professional profile, land brand deals, and grow your career with confidence.
            </p>
            <ul className="space-y-3 mb-8">
              {creatorBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-card-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Join as a Creator</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForBrandsCreators;
