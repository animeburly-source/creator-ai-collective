import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Features", "Pricing", "Creator Discovery", "Campaign Manager", "Analytics"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Help Center", "API Docs", "Community", "Case Studies"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                <Sparkles className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <span className="text-gradient font-bold text-xl tracking-tight">CreatorOS</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AI-powered platform connecting brands with creators worldwide.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground mb-4 text-sm tracking-wide uppercase">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 3 }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CreatorOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
