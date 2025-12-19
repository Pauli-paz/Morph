import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import corporateVideo from '../../assets/Juegos Corporativos.mp4';

const projects = [
  {
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_3.png',
    alt: 'equipo trabajando en tecnología',
    title: 'Iniciativa de Transformación Digital',
    description: 'Lideramos una transformación digital integral para una empresa Fortune 500, resultando en una mejora del 40% en eficiencia operativa y $50M en ahorro de costos.',
    outcome: '40% aumento en eficiencia',
  },
  {
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_4.png',
    alt: 'presentación corporativa exitosa',
    title: 'Estrategia de Expansión Global',
    description: 'Desarrollamos y ejecutamos una estrategia de entrada al mercado para expansión internacional, lanzando exitosamente operaciones en 12 nuevos mercados en 18 meses.',
    outcome: '12 nuevos mercados',
  },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-20 md:py-32 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestro Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Entregando resultados medibles a través de la excelencia estratégica
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="font-heading text-3xl font-bold mb-6 text-foreground">
                  {project.title}
                </h3>
                <p className="text-lg mb-6 text-foreground font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg">
                  <p className="text-primary font-medium text-base">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Games Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video
              src={corporateVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
