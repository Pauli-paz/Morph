import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl">
        <div ref={ref} className="flex flex-col gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Quiénes Somos
              </span>
            </motion.div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Sobre Nuestra Empresa
            </h2>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                Somos una empresa de experiencia global, ágil y de alto impacto, conformada por profesionales con una amplia trayectoria en proyectos multinacionales y una fuerte vocación por lograr transformaciones significativas y sostenibles en las personas, las organizaciones y la sociedad.
              </p>
              
              <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                Brindamos soluciones a la medida de cada organización, con una visión amplia, experimentada y orientada a la obtención de resultados. Nuestro enfoque de trabajo consiste en considerar las diferentes dimensiones de una organización al momento de diseñar la solución, acompañar en su implementación, gestionar la transformación resultante y brindar el seguimiento necesario para lograr una mejora continua.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-5xl mx-auto w-full"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-1"></div>
              <img
                src="https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_2.png"
                alt="corporate leadership meeting"
                className="relative w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
