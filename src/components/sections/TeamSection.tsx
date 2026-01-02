import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { LinkedinIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Diego Erazo',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/diego_erazo_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Diego Román',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/diego_roman_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Isabela Bermúdez',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/isabela_bermudez_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Juan Galo Martínez',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/juan_galo_martinez_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Nicolás Campos',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/nicolas_campos_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Gonzalo Quesada',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/morph-web_1.jpeg',
    linkedin: '#',
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds interval

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nuestro Equipo
            </span>
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Conoce a Nuestros Expertos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Profesionales apasionados comprometidos con tu éxito
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[450px] md:h-[500px] flex items-center justify-center max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 z-30 bg-white/50 hover:bg-white backdrop-blur-sm rounded-full w-12 h-12 shadow-lg hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-30 bg-white/50 hover:bg-white backdrop-blur-sm rounded-full w-12 h-12 shadow-lg hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </Button>

          {/* Cards */}
          <div
            className="relative w-full h-full flex justify-center items-center perspective-1000"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {teamMembers.map((member, index) => {
              const total = teamMembers.length;

              // Circular distance logic
              let offset = (index - activeIndex);
              while (offset > total / 2) offset -= total;
              while (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const absOffset = Math.abs(offset);

              // Filter confusing visual items (keep it clean)
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={member.name}
                  className="absolute top-1/2 left-1/2 origin-center"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${offset * 105}%)`, // Increased spacing from 60 to 105
                    scale: isActive ? 1.2 : 1 - (absOffset * 0.1),
                    opacity: isActive ? 1 : 0.6,
                    zIndex: 10 - absOffset,
                    rotateY: offset * 5, // Subtle rotation
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100, // Reduced from 300 for slower movement
                    damping: 20,    // Adjusted for smoother settlement
                    mass: 1.2       // Added mass for 'heavier' feel
                  }}
                  style={{
                    width: '280px',
                    height: '400px',
                    marginTop: '-200px',
                  }}
                >
                  <div
                    className={`group w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden relative transition-all duration-300 cursor-pointer ${isActive ? 'shadow-2xl ring-2 ring-primary/20' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay: Visible if active */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      <p className="text-white font-bold text-xl mb-3">{member.name}</p>

                      <div className="flex">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkedinIcon className="h-5 w-5 text-white" strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
