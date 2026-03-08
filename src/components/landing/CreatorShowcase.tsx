import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter } from "lucide-react";

const creators = [
  { name: "Priya Sharma", category: "Fashion", followers: "2.1M", engagement: "4.8%", platforms: ["instagram", "youtube"], avatar: "PS" },
  { name: "Alex Chen", category: "Tech", followers: "890K", engagement: "6.2%", platforms: ["youtube", "twitter"], avatar: "AC" },
  { name: "Maya Rodriguez", category: "Fitness", followers: "1.5M", engagement: "5.1%", platforms: ["instagram"], avatar: "MR" },
  { name: "Raj Patel", category: "Food", followers: "3.2M", engagement: "7.3%", platforms: ["instagram", "youtube"], avatar: "RP" },
  { name: "Sarah Kim", category: "Beauty", followers: "1.8M", engagement: "5.9%", platforms: ["instagram", "youtube", "twitter"], avatar: "SK" },
  { name: "James Okafor", category: "Gaming", followers: "4.1M", engagement: "8.1%", platforms: ["youtube", "twitter"], avatar: "JO" },
];

const platformIcon = (p: string) => {
  switch (p) {
    case "instagram": return <Instagram className="w-3.5 h-3.5" />;
    case "youtube": return <Youtube className="w-3.5 h-3.5" />;
    case "twitter": return <Twitter className="w-3.5 h-3.5" />;
    default: return null;
  }
};

const CreatorShowcase = () => {
  return (
    <section className="py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Top-performing creators ready to amplify your brand
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-lg">
                  {c.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-card-foreground">{c.name}</p>
                  <Badge variant="secondary" className="text-xs mt-1">{c.category}</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xl font-display font-bold text-card-foreground">{c.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-display font-bold text-primary">{c.engagement}</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
              </div>
              <div className="flex gap-2">
                {c.platforms.map((p) => (
                  <div key={p} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                    {platformIcon(p)}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorShowcase;
