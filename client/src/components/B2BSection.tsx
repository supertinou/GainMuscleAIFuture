import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Users, BarChart3, Check } from "lucide-react";

export function B2BSection() {
  return (
    <section id="b2b" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-full mb-6 border border-blue-500/20">
              ENTERPRISE SOLUTIONS
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              SUPERCHARGE YOUR <br />
              <span className="text-blue-500">GYM CONVERSIONS</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Show potential clients exactly what they can achieve with your coaching. Gyms using GainMuscleAI visualization in sales consultations see a <strong>3X increase</strong> in signup rates.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "White-label integration for your branded app",
                "Bulk generation API for entire client rosters",
                "Progressive timeline generation (Month 1-12)",
                "Dedicated account manager & priority support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200 font-heading font-bold h-14 px-8">
                REQUEST A DEMO
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white font-heading font-bold h-14 px-8">
                CONTACT SALES
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm"
            >
              <Building2 className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">For Gym Chains</h3>
              <p className="text-zinc-500 text-sm">Deploy kiosks in your lobby where leads can scan a QR code, upload a selfie, and see their potential future self instantly.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm"
            >
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">For Online Coaches</h3>
              <p className="text-zinc-500 text-sm">Send personalized "What if?" visualizations in your cold outreach DMs. Stop selling workouts, start selling the result.</p>
            </motion.div>

             <motion.div 
              whileHover={{ y: -5 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm"
            >
              <BarChart3 className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-heading font-bold mb-2">Retention Tool</h3>
              <p className="text-zinc-500 text-sm">Show current members their next milestone. "You're here now, stick with us for 3 more months to look like this."</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
