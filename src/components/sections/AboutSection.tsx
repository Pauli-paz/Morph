import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import officeVideo from '../../assets/Lanzamiento_Transformación (1).mp4';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl">
        <div ref={ref} className="flex flex-col gap-6">
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

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-5xl mx-auto w-full"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-1 z-0"></div>
              <video
                src={officeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="relative w-full h-[500px] object-cover z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
