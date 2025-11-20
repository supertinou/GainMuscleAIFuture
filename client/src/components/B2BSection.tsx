import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function B2BSection() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        <div className="p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/20">
          <span className="font-mono text-primary text-sm font-bold uppercase tracking-widest mb-6">Enterprise Division</span>
          
          <h2 className="font-heading font-black text-6xl md:text-8xl uppercase leading-none tracking-tighter mb-10">
            Scale<br/>Your<br/>Impact
          </h2>
          
          <p className="font-sans text-xl text-gray-400 max-w-md mb-12 leading-relaxed">
            Equip your fitness facility with visual persuasion technology. Proven to increase membership conversion by 3X.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-sm font-mono uppercase tracking-wider text-gray-500">
              <span>Gym Franchises</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span>Personal Trainers</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span>Online Coaches</span>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="p-12 border-b border-white/20 hover:bg-white hover:text-black transition-colors group cursor-pointer flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading font-black text-4xl uppercase">Request Demo</h3>
              <ArrowRight className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
            <p className="font-sans text-lg opacity-60 group-hover:opacity-100">For enterprise deployments {">"} 5 locations.</p>
          </div>
          
          <div className="p-12 hover:bg-primary hover:text-white transition-colors group cursor-pointer flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading font-black text-4xl uppercase">Coach Access</h3>
              <ArrowRight className="w-8 h-8 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
            <p className="font-sans text-lg opacity-60 group-hover:opacity-100">For independent contractors and online coaches.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
