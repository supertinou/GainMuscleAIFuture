import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";
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
    <div className="relative w-full h-full bg-secondary border border-black select-none group">
      
      {/* Background (After Image) */}
      <img 
        src={afterImage} 
        alt="Muscular Physique" 
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
      />
      
      {/* Foreground (Before Image) - Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Starting Physique" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-black z-30 cursor-ew-resize flex items-center justify-center hover:w-1 transition-all"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        ref={containerRef}
      >
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white border border-black -ml-[24px]">
          <ArrowLeftRight size={20} />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-6 left-6 bg-white px-3 py-1 border border-black font-mono text-xs font-bold uppercase tracking-widest z-20">
        Figure 01: Current
      </div>
      <div className="absolute bottom-6 right-6 bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest z-20">
        Figure 02: Projected
      </div>
    </div>
  );
}
