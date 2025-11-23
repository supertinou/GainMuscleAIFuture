import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 container mx-auto px-4 bg-zinc-950 border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl md:text-7xl font-heading font-black italic uppercase mb-6 text-white">
          SIMPLE <span className="text-primary">PRICING</span>
        </h2>
        <p className="text-gray-400 text-xl font-medium">
          One price. Unlimited transformations.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-zinc-900 border-2 border-primary p-8 flex flex-col relative shadow-[0_0_50px_-10px_rgba(250,204,21,0.2)] rounded-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-heading font-black italic uppercase px-6 py-2 skew-x-[-10deg] shadow-lg">
            <span className="block skew-x-[10deg]">Limited Time Offer</span>
          </div>
          
          <div className="mb-8 mt-6 text-center">
            <h3 className="font-heading font-black italic uppercase text-4xl text-white mb-2">Access Pass</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-heading font-black text-primary">$19</span>
              <span className="text-xl font-sans font-bold text-gray-500 line-through">$49</span>
            </div>
            <p className="text-gray-400 font-medium mt-2">One-time payment</p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Unlimited Body Transformations",
              "High Definition Results",
              "Instant Processing",
              "Private & Secure",
              "No Subscription Required"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Check size={14} strokeWidth={3}/>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Button className="w-full mt-auto bg-primary text-black hover:bg-white font-heading font-black italic uppercase h-16 text-2xl skew-x-[-10deg] shadow-lg shadow-primary/20">
             <span className="skew-x-[10deg]">Get Instant Access</span>
          </Button>
          
          <p className="text-center text-xs text-gray-500 mt-4 font-medium">
            30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
