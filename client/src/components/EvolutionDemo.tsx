import { useState, useRef, useEffect, useCallback } from "react";
import { GripVertical } from "lucide-react";
import beforeImage from "@assets/generated_images/stage_1:_overweight_man_(uploaded_photo).png";
import afterImage from "@assets/generated_images/stage_3:_athletic_physique.png";

export function EvolutionDemo() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);

  const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  // Auto-slide animation
  useEffect(() => {
    if (isDragging || isHovering) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      
      // Smooth sine wave motion
      // Period of 4 seconds (0.0015 * time)
      const t = time * 0.0015;
      const newPosition = 50 + Math.sin(t) * 35; // Oscillate between 15% and 85%
      
      setSliderPosition(newPosition);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, isHovering]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-xl border-4 border-zinc-800 shadow-2xl select-none group bg-zinc-900 cursor-ew-resize"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Background (After Image) */}
      <img 
        src={afterImage} 
        alt="Athletic Goal" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      <div className="absolute top-6 right-6 bg-primary text-black font-heading font-black text-xl italic px-4 py-1 skew-x-[-10deg] z-20 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)]">
        <span className="block skew-x-[10deg]">GOAL: ATHLETIC</span>
      </div>

      {/* Foreground (Before Image) - Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Uploaded Photo" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-6 left-6 bg-black/80 text-white font-heading font-black text-xl italic px-4 py-1 skew-x-[-10deg] border border-white/20">
          <span className="block skew-x-[10deg]">UPLOADED PHOTO</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary z-30 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)]"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        ref={containerRef}
      >
        <div className="w-12 h-12 bg-primary skew-x-[-10deg] flex items-center justify-center border-2 border-white shadow-lg transition-transform -ml-[22px] group-hover:scale-110">
          <GripVertical className="text-black skew-x-[10deg]" />
        </div>
      </div>
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000_120%)] pointer-events-none opacity-60"></div>
    </div>
  );
}
