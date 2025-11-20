import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black">
      <div className="container mx-auto px-0 flex items-stretch justify-between h-20">
        <Link href="/">
          <a className="flex items-center px-6 md:px-10 border-r border-black hover:bg-black hover:text-white transition-colors group cursor-pointer">
            <span className="font-heading font-black text-2xl tracking-tighter uppercase">
              GainMuscle<span className="text-primary">AI</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-stretch flex-1 justify-end">
          {["Philosophy", "Process", "Plans", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="flex items-center px-8 font-sans font-medium text-sm uppercase tracking-wider hover:bg-secondary transition-colors border-l border-black"
            >
              {item}
            </a>
          ))}
          <a 
            href="#" 
            className="flex items-center px-10 bg-black text-white font-heading font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
          >
            Start Now <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden px-6 border-l border-black hover:bg-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-black flex flex-col">
          {["Philosophy", "Process", "Plans", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="py-6 px-6 border-b border-black font-heading font-black text-2xl uppercase hover:bg-primary hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="rounded-none py-8 font-heading font-black uppercase text-xl bg-black text-white hover:bg-primary">
            Start Transformation
          </Button>
        </div>
      )}
    </nav>
  );
}
