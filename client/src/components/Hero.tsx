import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EvolutionDemo } from "./EvolutionDemo";
import heroBg from "@assets/generated_images/dark_tech_geometric_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold tracking-wide uppercase">AI-Powered Body Visualization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[0.9] tracking-tight text-foreground">
            SEE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              DREAM PHYSIQUE
            </span>
            <br />
            IN SECONDS
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Upload a photo and let our advanced AI engine generate a photorealistic evolution of your body. From weight loss to muscle gain—visualize your potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg font-heading font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              GENERATE MY EVOLUTION
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-heading font-semibold border-2">
              VIEW DEMO GALLERY
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>98% Realistic Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Private & Secure</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Demo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-[2rem] blur-2xl -z-10"></div>
          <EvolutionDemo />
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 -left-8 bg-card border border-border p-4 rounded-xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase">Goal Reached</p>
                <p className="font-heading font-bold text-lg">12% Body Fat</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
