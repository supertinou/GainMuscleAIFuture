import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="plans" className="bg-white text-black border-b border-black">
      <div className="grid lg:grid-cols-3">
        <div className="p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between bg-secondary">
          <div>
            <h2 className="font-heading font-black text-5xl uppercase tracking-tighter mb-2">Plans</h2>
            <p className="font-mono text-sm uppercase tracking-widest text-gray-500">Select Your Tier</p>
          </div>
          <div className="mt-12">
            <p className="font-serif italic text-2xl leading-snug">
              "The body achieves what the mind believes. We just help the mind see it."
            </p>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col hover:bg-black hover:text-white transition-colors group">
          <div className="mb-auto">
            <div className="flex justify-between items-start mb-8">
              <span className="font-mono text-xs font-bold border border-black group-hover:border-white px-2 py-1 uppercase">One-Time</span>
              <span className="font-heading font-black text-5xl">$9</span>
            </div>
            <h3 className="font-heading font-black text-3xl uppercase mb-6">Single Scan</h3>
            <ul className="space-y-4 font-sans font-medium">
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 3 Variations</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> HD Export</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 24h Access</li>
            </ul>
          </div>
          <Button className="w-full mt-12 rounded-none h-14 bg-black text-white hover:bg-primary hover:text-white group-hover:bg-white group-hover:text-black font-heading font-black uppercase tracking-wider border border-transparent">
            Purchase
          </Button>
        </div>

        {/* Pro Plan */}
        <div className="p-12 flex flex-col bg-primary text-white relative overflow-hidden">
          <div className="absolute -right-4 -top-4 bg-black text-white px-8 py-2 rotate-12 font-mono text-xs font-bold uppercase z-10">Best Value</div>
          
          <div className="mb-auto">
            <div className="flex justify-between items-start mb-8">
              <span className="font-mono text-xs font-bold border border-white px-2 py-1 uppercase">Monthly</span>
              <span className="font-heading font-black text-5xl">$19</span>
            </div>
            <h3 className="font-heading font-black text-3xl uppercase mb-6">Pro Member</h3>
            <ul className="space-y-4 font-sans font-medium">
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Unlimited Scans</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 4K Ultra-HD</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Priority Render</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Video Morph</li>
            </ul>
          </div>
          <Button className="w-full mt-12 rounded-none h-14 bg-white text-black hover:bg-black hover:text-white font-heading font-black uppercase tracking-wider border border-transparent">
            Join Pro
          </Button>
        </div>
      </div>
    </section>
  );
}
