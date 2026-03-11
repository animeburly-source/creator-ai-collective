import { Sparkles, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "Features", href: "#categories" },
    { label: "Pricing", href: "#pricing" },
    { label: "Creator Discovery", href: "/discover" },
    { label: "Campaign Manager", href: "/campaign/create" },
    { label: "Analytics", href: "#analytics" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Community", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                <Sparkles className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <span className="text-gradient font-bold text-xl tracking-tight">CreatorOS</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The AI-powered platform connecting brands with creators worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground mb-4 text-sm tracking-wide uppercase">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const isRoute = link.href.startsWith("/");
                  const El = isRoute ? Link : "a";
                  const props = isRoute ? { to: link.href } : { href: link.href };
                  return (
                    <li key={link.label}>
                      <motion.div whileHover={{ x: 3 }}>
                        <El
                          {...(props as any)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                        >
                          {link.label}
                        </El>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CreatorOS. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Built with AI, designed for scale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
