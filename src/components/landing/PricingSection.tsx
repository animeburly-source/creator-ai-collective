import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small brands testing influencer marketing.",
    features: [
      "Up to 10 creator searches/month",
      "AI-powered matching",
      "Basic analytics dashboard",
      "Email outreach templates",
      "1 active campaign",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "For growing brands scaling their creator programs.",
    features: [
      "Unlimited creator searches",
      "AI agents (Discovery + Outreach)",
      "Advanced analytics & ROI tracking",
      "Automated outreach & follow-ups",
      "10 active campaigns",
      "Custom branded proposals",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For agencies and enterprise brands at scale.",
    features: [
      "Everything in Growth",
      "Unlimited active campaigns",
      "Dedicated account manager",
      "Custom AI agent training",
      "API access & integrations",
      "Whitelabel reporting",
      "SSO & team management",
      "SLA & premium support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-28 relative">
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
            Pricing
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                plan.popular
                  ? "glass-card border-primary/30 shadow-premium"
                  : "glass-card hover:shadow-premium"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              )}

              <div className="relative z-10">
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4"
                  >
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </motion.div>
                )}

                <h3 className="text-xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-card-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>

                <Button
                  className={`w-full rounded-xl gap-2 group/btn mb-6 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 shadow-glow"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-sm text-card-foreground">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-primary" : "text-accent"}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
