import { Sparkles } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Creator Discovery", "Campaign Manager", "Analytics"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Help Center", "API Docs", "Community", "Case Studies"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-gradient">CreatorOS</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AI-powered platform connecting brands with creators worldwide.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CreatorOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
