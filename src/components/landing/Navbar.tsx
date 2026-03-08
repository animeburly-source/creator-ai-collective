import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Discover", href: "/discover", isRoute: true },
  { label: "For Brands", href: "#for-brands", isRoute: false },
  { label: "For Creators", href: "#for-creators", isRoute: false },
  { label: "Pricing", href: "#pricing", isRoute: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-glow"
          >
            <Sparkles className="w-4.5 h-4.5 text-primary-foreground" />
          </motion.div>
          <span className="text-gradient font-bold text-xl tracking-tight">CreatorOS</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const El = link.isRoute ? Link : "a";
            const props = link.isRoute ? { to: link.href } : { href: link.href };
            return (
              <El
                key={link.label}
                {...(props as any)}
                className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </El>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log In
          </Button>
          <Link to="/campaign/create">
            <Button size="sm" className="bg-primary hover:bg-primary/90 gap-1.5 group/btn shadow-glow">
              Start Campaign
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-border/50 glass-nav"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const El = link.isRoute ? Link : "a";
                const props = link.isRoute ? { to: link.href } : { href: link.href };
                return (
                  <El
                    key={link.label}
                    {...(props as any)}
                    className="text-sm text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </El>
                );
              })}
              <div className="flex gap-3 pt-3 mt-2 border-t border-border/50">
                <Button variant="ghost" size="sm" className="flex-1">Log In</Button>
                <Link to="/campaign/create" className="flex-1">
                  <Button size="sm" className="w-full bg-primary shadow-glow">Start Campaign</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
