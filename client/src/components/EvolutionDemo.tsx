import { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
import beforeImage from "@assets/generated_images/stage_1:_overweight_man_(uploaded_photo).png";
import afterImage from "@assets/generated_images/stage_3:_athletic_physique.png";

export function EvolutionDemo() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const animationRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);

  // Auto-slide animation
  useEffect(() => {
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
  }, []);

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-xl border-4 border-zinc-800 shadow-2xl select-none group bg-zinc-900"
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
      >
        <div className="w-12 h-12 bg-primary skew-x-[-10deg] flex items-center justify-center border-2 border-white shadow-lg transition-transform -ml-[22px]">
          <GripVertical className="text-black skew-x-[10deg]" />
        </div>
      </div>
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000_120%)] pointer-events-none opacity-60"></div>
    </div>
  );
}
