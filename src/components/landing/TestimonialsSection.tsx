import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "CreatorOS cut our campaign launch time by 80%. The AI matching is incredibly accurate — we found perfect creators in minutes.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ananya Desai",
    role: "Marketing Head, FreshBrew",
  },
  {
    text: "Finally a platform that pays on time and helps me price my work fairly. My income doubled in 3 months.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Carlos Martinez",
    role: "Fitness Creator, 1.2M followers",
  },
  {
    text: "Managing 50+ campaigns used to be chaos. Now our entire team runs everything from one dashboard.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Lisa Wong",
    role: "CEO, InfluenceAgency",
  },
  {
    text: "The analytics dashboard alone is worth the subscription. We can track ROI in real-time across all campaigns.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Chen",
    role: "Growth Lead, TechStart",
  },
  {
    text: "I went from 5 brand deals a year to 5 a month. The platform does the outreach so I can focus on creating.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Priya Sharma",
    role: "Fashion Creator, 2.1M followers",
  },
  {
    text: "The escrow payment system gave us peace of mind. No more chasing invoices or worrying about delivery.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sarah Kim",
    role: "Brand Manager, GlowUp",
  },
  {
    text: "Best influencer marketing tool we've used. The AI recommendations are spot-on every single time.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Okafor",
    role: "CMO, FreshFoods",
  },
  {
    text: "CreatorOS helped us scale our creator program from 10 to 200+ creators in just 3 months.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Maya Rodriguez",
    role: "Head of Partnerships, StyleCo",
  },
  {
    text: "The media kit feature is a game changer. Brands take me more seriously and I've doubled my rates.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Raj Patel",
    role: "Food Creator, 3.2M followers",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our community has to say about CreatorOS
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[750px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
