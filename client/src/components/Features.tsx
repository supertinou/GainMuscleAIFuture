import { motion } from "framer-motion";
import { Activity, Cpu, Target, Shield, Zap, Smartphone } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Hypertrophy Engine",
    description: "We calculate max muscle potential based on wrist/ankle circumference and bone density."
  },
  {
    icon: Cpu,
    title: "Body Fat Stripping",
    description: "Visualize 8%, 10%, and 12% body fat levels while maintaining your current muscle mass."
  },
  {
    icon: Target,
    title: "Weak Point Training",
    description: "Identify lagging muscle groups. See what happens if you focus purely on shoulders or legs."
  },
  {
    icon: Shield,
    title: "Private Processing",
    description: "Military-grade encryption. Your photos are processed on secure servers and instantly wiped."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Don't wait. Get high-res renderings in under 30 seconds. Motivation on demand."
  },
  {
    icon: Smartphone,
    title: "Coach Mode",
    description: "For trainers: Show clients their potential during consultation to close more deals."
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-zinc-900 relative overflow-hidden clip-slant">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/50 skew-x-12 transform translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Technology</span>
          <h2 className="text-6xl md:text-8xl font-heading font-black italic uppercase leading-none text-white mb-6">
            ENGINEERED FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">GROWTH</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            This isn't a filter. It's a physiological prediction model trained on 5 million body transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-zinc-950 p-8 border-l-4 border-zinc-800 hover:border-primary transition-all group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-3xl font-heading font-black italic uppercase text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
