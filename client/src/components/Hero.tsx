import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EvolutionDemo } from "./EvolutionDemo";
import heroBg from "@assets/generated_images/abstract_swiss_style_architectural_background.png";

export function Hero() {
  return (
    <section className="relative pt-20 min-h-screen flex flex-col border-b border-black">
      <div className="grid lg:grid-cols-2 flex-1">
        {/* Left Content */}
        <div className="relative p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black bg-white">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-mono text-xs font-bold tracking-widest uppercase mb-6 text-gray-500">
              01 — Morphological Projection Engine
            </span>
            
            <h1 className="text-7xl md:text-9xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-10">
              Sculpt<br />
              <span className="text-outline-black text-transparent stroke-black md:text-stroke-2">Your</span><br />
              Future
            </h1>
            
            <p className="text-xl md:text-2xl font-sans font-medium leading-tight max-w-md mb-12">
              Architectural visualization for the human form. We use predictive modeling to render your physical potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-0">
              <Button size="lg" className="h-16 px-10 text-lg font-heading font-black uppercase tracking-wider bg-black text-white hover:bg-primary hover:text-white rounded-none border border-black">
                Upload Physique
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-heading font-black uppercase tracking-wider rounded-none border border-black border-l-0 hover:bg-secondary">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Demo */}
        <div className="relative bg-secondary min-h-[500px] lg:min-h-auto overflow-hidden">
          <div className="absolute inset-4 md:inset-12 border border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <EvolutionDemo />
          </div>
        </div>
      </div>
      
      {/* Ticker Tape */}
      <div className="h-16 border-t border-black bg-primary flex items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-16 text-white font-heading font-black uppercase text-2xl tracking-widest px-4">
          <span>• 98.4% Predictive Accuracy</span>
          <span>• Instant Rendering</span>
          <span>• Muscular Hypertrophy</span>
          <span>• Adipose Reduction</span>
          <span>• 98.4% Predictive Accuracy</span>
          <span>• Instant Rendering</span>
          <span>• Muscular Hypertrophy</span>
          <span>• Adipose Reduction</span>
        </div>
      </div>
    </section>
  );
}
