import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-28 bg-gradient-hero relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/70 text-sm mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Ready to scale?
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 text-balance">
            Join the brands leading social commerce
          </h2>
          <p className="text-primary-foreground/50 text-lg mb-10 leading-relaxed">
            Join 20,000+ brands and 500,000+ creators already using CreatorOS
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="h-13 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 rounded-xl shadow-glow group/btn">
              Get Started Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/5 rounded-xl backdrop-blur-sm">
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
