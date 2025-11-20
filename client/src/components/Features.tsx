import { motion } from "framer-motion";
import { Zap, Lock, ScanFace, TrendingUp, Layers, Smartphone } from "lucide-react";

const features = [
  {
    icon: ScanFace,
    title: "Photorealistic Mapping",
    description: "Our AI maps muscle insertion points precisely to your unique bone structure for credible results."
  },
  {
    icon: TrendingUp,
    title: "Progressive Evolution",
    description: "Don't just see the end goal. Generate 4, 8, and 12-week progression stages based on training intensity."
  },
  {
    icon: Layers,
    title: "Multiple Archetypes",
    description: "Choose your target look: Lean Shredded, Mass Monster, Athletic Function, or Powerlifter."
  },
  {
    icon: Lock,
    title: "100% Private Processing",
    description: "Your photos are processed ephemerally and deleted immediately after generation. No storage."
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "No waiting hours for a render. Get high-resolution transformations in under 15 seconds."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Take a selfie, upload, and transform directly from your phone browser. No app download needed."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            SCIENCE-BACKED <span className="text-primary">VISUALIZATION</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just paste abs on a photo. GainMuscleAI analyzes anatomy, lighting, and skin texture to predict exactly how YOU would look.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
