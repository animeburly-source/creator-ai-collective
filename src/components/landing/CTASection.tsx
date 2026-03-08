import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10">
            Join 20,000+ brands and 500,000+ creators already using CreatorOS
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 backdrop-blur-sm"
            />
            <Button size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 whitespace-nowrap">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              I'm a Brand
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              I'm a Creator
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
