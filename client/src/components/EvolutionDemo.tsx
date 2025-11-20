import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";
import beforeImage from "@assets/generated_images/average_male_body_for_before_comparison.png";
import afterImage from "@assets/generated_images/muscular_male_body_for_after_comparison.png";

export function EvolutionDemo() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 select-none group">
      {/* Background (After Image) */}
      <img 
        src={afterImage} 
        alt="Muscular Physique" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-20">
        AFTER: 12 WEEKS
      </div>

      {/* Foreground (Before Image) - Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Starting Physique" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
          BEFORE
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm z-30 cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        ref={containerRef}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-primary -ml-[14px]">
          <ChevronsLeftRight size={16} />
        </div>
      </div>
      
      {/* Interactive Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        DRAG TO COMPARE
      </div>
    </div>
  );
}
