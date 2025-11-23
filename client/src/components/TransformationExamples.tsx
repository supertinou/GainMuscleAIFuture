import { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
import beforeImage1 from "@assets/generated_images/average_male_body_for_before_comparison.png";
import afterImage1 from "@assets/generated_images/muscular_male_body_for_after_comparison.png";
import beforeImage2 from "@assets/generated_images/skinny_man_before_fitness_transformation.png";
import afterImage2 from "@assets/generated_images/muscular_man_after_fitness_transformation.png";

function CompareSlider({ before, after, label }: { before: string, after: string, label: string }) {
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
  }, [isDragging]);

  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border-4 border-zinc-800 shadow-2xl select-none group bg-zinc-900">
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt="After Transformation" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      <div className="absolute top-6 right-6 bg-primary text-black font-heading font-black text-sm md:text-lg italic px-3 py-1 skew-x-[-10deg] z-20 shadow-lg">
        <span className="block skew-x-[10deg]">FUTURE YOU</span>
      </div>

      {/* Before Image (Foreground) - Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={before} 
          alt="Before Transformation" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-6 left-6 bg-black/80 text-white font-heading font-black text-sm md:text-lg italic px-3 py-1 skew-x-[-10deg] border border-white/20">
          <span className="block skew-x-[10deg]">NOW</span>
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
        <div className="w-10 h-10 bg-primary skew-x-[-10deg] flex items-center justify-center border-2 border-white shadow-lg hover:scale-110 transition-transform -ml-[20px]">
          <GripVertical className="text-black w-5 h-5 skew-x-[10deg]" />
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-40">
         <span className="inline-block bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full text-white/80 text-xs font-bold uppercase tracking-widest border border-white/10">
            {label}
         </span>
      </div>
    </div>
  );
}

export function TransformationExamples() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black italic uppercase mb-6 text-white">
            REAL <span className="text-primary">RESULTS</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            See what's possible. From any starting point.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <CompareSlider 
            before={beforeImage1} 
            after={afterImage1} 
            label="Average to Athletic" 
          />
          <CompareSlider 
            before={beforeImage2} 
            after={afterImage2} 
            label="Skinny to Muscular" 
          />
        </div>
      </div>
    </section>
  );
}
