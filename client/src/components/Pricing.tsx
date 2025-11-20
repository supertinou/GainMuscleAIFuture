import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 container mx-auto px-4 bg-zinc-950">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-6xl md:text-8xl font-heading font-black italic uppercase mb-4 text-white">
          SELECT YOUR <span className="text-primary">PROGRAM</span>
        </h2>
        <p className="text-gray-400 text-xl font-medium">
          Invest in your vision. No hidden fees. Cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col relative group hover:border-primary/50 transition-colors">
          <div className="mb-8">
            <h3 className="font-heading font-black italic uppercase text-3xl text-white mb-2">Starter</h3>
            <div className="text-5xl font-heading font-black text-gray-500">$9<span className="text-lg font-sans font-bold text-gray-600">/scan</span></div>
          </div>
          <ul className="space-y-4 mb-12">
            {["3 Render Variations", "1080p HD Quality", "Standard Processing"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400 font-bold">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-primary"><Check size={14}/></div>
                {item}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-auto bg-zinc-800 text-white hover:bg-white hover:text-black font-heading font-black italic uppercase h-14 text-xl skew-x-[-10deg]">
             <span className="skew-x-[10deg]">One-Time Buy</span>
          </Button>
        </div>

        {/* Pro - Featured */}
        <div className="bg-zinc-900 border-2 border-primary p-8 flex flex-col relative transform md:-translate-y-8 shadow-[0_0_50px_-10px_rgba(250,204,21,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-heading font-black italic uppercase px-6 py-2 skew-x-[-10deg] shadow-lg">
            <span className="block skew-x-[10deg]">Most Popular</span>
          </div>
          
          <div className="mb-8 mt-4">
            <h3 className="font-heading font-black italic uppercase text-4xl text-primary mb-2">Pro Athlete</h3>
            <div className="text-6xl font-heading font-black text-white">$19<span className="text-lg font-sans font-bold text-gray-500">/mo</span></div>
          </div>
          <ul className="space-y-4 mb-12">
            {["Unlimited Renders", "4K Ultra-HD", "All Body Types", "Priority Queue", "No Watermark"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black"><Check size={14} strokeWidth={4}/></div>
                {item}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-auto bg-primary text-black hover:bg-white font-heading font-black italic uppercase h-16 text-2xl skew-x-[-10deg]">
             <span className="skew-x-[10deg]">Start Free Trial</span>
          </Button>
        </div>

        {/* Business */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col relative group hover:border-primary/50 transition-colors">
           <div className="mb-8">
            <h3 className="font-heading font-black italic uppercase text-3xl text-white mb-2">Coach</h3>
            <div className="text-5xl font-heading font-black text-gray-500">$49<span className="text-lg font-sans font-bold text-gray-600">/mo</span></div>
          </div>
          <ul className="space-y-4 mb-12">
            {["20 Client Profiles", "White-label Reports", "Comparison Links", "Admin Dashboard"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400 font-bold">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-primary"><Check size={14}/></div>
                {item}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-auto bg-zinc-800 text-white hover:bg-white hover:text-black font-heading font-black italic uppercase h-14 text-xl skew-x-[-10deg]">
             <span className="skew-x-[10deg]">Join Partner Program</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
