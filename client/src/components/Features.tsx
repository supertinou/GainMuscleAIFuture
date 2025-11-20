import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Structural Analysis",
    description: "Lidar-based skeletal mapping determines insertion points and genetic leverage."
  },
  {
    id: "02",
    title: "Volume Projection",
    description: "Predictive hypertrophy modeling based on natural training limits."
  },
  {
    id: "03",
    title: "Definition Rendering",
    description: "Subcutaneous fat reduction simulation to reveal muscular detail."
  }
];

export function Features() {
  return (
    <section id="process" className="bg-white text-black">
      <div className="grid lg:grid-cols-3 border-b border-black">
        {/* Title Block */}
        <div className="p-12 border-b lg:border-b-0 lg:border-r border-black bg-secondary">
          <h2 className="font-heading font-black text-6xl uppercase leading-none tracking-tighter mb-6">
            The<br/>Method
          </h2>
          <p className="font-serif text-lg leading-relaxed">
            We don't guess. We calculate. Our algorithm deconstructs your physique into 450 distinct anatomical landmarks before reconstructing your target aesthetic.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-12 border-b sm:border-b-0 border-black flex flex-col justify-between hover:bg-primary hover:text-white transition-colors group h-full ${index === 0 ? 'sm:border-r' : ''} ${index === 2 ? 'sm:col-span-2 sm:border-t sm:border-r-0' : ''}`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-sm font-bold tracking-widest border border-black group-hover:border-white px-2 py-1 rounded-full">
                  {feature.id}
                </span>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="font-heading font-black text-3xl uppercase mb-4">{feature.title}</h3>
                <p className="font-sans font-medium leading-relaxed opacity-80 max-w-xs">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
