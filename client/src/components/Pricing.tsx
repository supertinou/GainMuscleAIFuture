import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          SIMPLE <span className="text-primary">PRICING</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Start visualizing your future today. Upgrade for higher resolution and more body archetypes.
        </p>
      </div>

      <Tabs defaultValue="consumer" className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
            <TabsTrigger value="consumer" className="font-heading text-lg">Personal</TabsTrigger>
            <TabsTrigger value="business" className="font-heading text-lg">Business</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="consumer" className="grid md:grid-cols-2 gap-8 animate-in fade-in-50 slide-in-from-bottom-4">
          <Card className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <CardTitle className="font-heading text-3xl">One-Time</CardTitle>
              <CardDescription>Perfect for a single motivation boost.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/ scan</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check size={12}/></div>
                3 Evolution Variations
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check size={12}/></div>
                Standard HD Resolution
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check size={12}/></div>
                No Watermark
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-heading" size="lg" variant="outline">GET STARTED</Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-primary shadow-lg scale-105 bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-3xl text-primary">Pro Access</CardTitle>
              <CardDescription>For those serious about tracking progress.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0"><Check size={12}/></div>
                Unlimited Generations
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0"><Check size={12}/></div>
                4K Ultra-HD Resolution
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0"><Check size={12}/></div>
                All Body Archetypes (Bulky, Lean, etc)
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0"><Check size={12}/></div>
                Video Morph Generation (Coming Soon)
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-heading bg-primary hover:bg-primary/90" size="lg">START FREE TRIAL</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="grid md:grid-cols-2 gap-8 animate-in fade-in-50 slide-in-from-bottom-4">
           <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-heading text-3xl">Coach</CardTitle>
              <CardDescription>For independent personal trainers.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check size={12}/></div>
                Up to 20 Client Profiles
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check size={12}/></div>
                Shareable Comparison Links
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check size={12}/></div>
                Client Dashboard
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-heading" size="lg" variant="outline">START TRIAL</Button>
            </CardFooter>
          </Card>
           <Card className="border-2 bg-zinc-950 text-white border-zinc-800">
            <CardHeader>
              <CardTitle className="font-heading text-3xl">Enterprise</CardTitle>
              <CardDescription className="text-zinc-400">For gym chains and franchises.</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0"><Check size={12}/></div>
                Unlimited Client Profiles
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0"><Check size={12}/></div>
                API Access
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0"><Check size={12}/></div>
                White-label Branding
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-heading bg-white text-black hover:bg-gray-200" size="lg">CONTACT SALES</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
