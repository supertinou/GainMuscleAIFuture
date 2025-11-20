import { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
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
    <div className="relative w-full h-full overflow-hidden rounded-xl border-4 border-zinc-800 shadow-2xl select-none group bg-zinc-900">
      
      {/* Background (After Image) */}
      <img 
        src={afterImage} 
        alt="Muscular Physique" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      <div className="absolute top-6 right-6 bg-primary text-black font-heading font-black text-xl italic px-4 py-1 skew-x-[-10deg] z-20 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)]">
        <span className="block skew-x-[10deg]">GOAL: LEAN MASS</span>
      </div>

      {/* Foreground (Before Image) - Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Starting Physique" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-6 left-6 bg-black/80 text-white font-heading font-black text-xl italic px-4 py-1 skew-x-[-10deg] border border-white/20">
          <span className="block skew-x-[10deg]">STARTING POINT</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary z-30 cursor-ew-resize flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)]"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        ref={containerRef}
      >
        <div className="w-12 h-12 bg-primary skew-x-[-10deg] flex items-center justify-center border-2 border-white shadow-lg hover:scale-110 transition-transform -ml-[22px]">
          <GripVertical className="text-black skew-x-[10deg]" />
        </div>
      </div>
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000_120%)] pointer-events-none opacity-60"></div>
    </div>
  );
}
