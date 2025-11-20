import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/40 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Dumbbell className="h-6 w-6" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tighter text-foreground">
              GAINMUSCLE<span className="text-primary">AI</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#b2b" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            For Gyms
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-semibold">
            Log In
          </Button>
          <Button className="font-heading font-semibold tracking-wide bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary))]">
            START EVOLUTION <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#features" className="text-lg font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-lg font-medium p-2" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
          <a href="#pricing" className="text-lg font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#b2b" className="text-lg font-medium p-2" onClick={() => setMobileMenuOpen(false)}>For Gyms</a>
          <div className="h-px bg-border my-2" />
          <Button className="w-full font-heading" size="lg">START EVOLUTION</Button>
        </div>
      )}
    </nav>
  );
}
