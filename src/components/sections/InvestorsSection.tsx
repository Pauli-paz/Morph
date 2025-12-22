import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUpIcon, AwardIcon, GlobeIcon, LeafIcon } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUpIcon,
    value: '25%',
    label: 'Tasa de Crecimiento Anual',
  },
  {
    icon: AwardIcon,
    value: '98%',
    label: 'Satisfacción del Cliente',
  },
  {
    icon: GlobeIcon,
    value: '40+',
    label: 'Países Atendidos',
  },
  {
    icon: LeafIcon,
    value: 'Carbono Neutral',
    label: 'Desde 2020',
  },
];

export default function InvestorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="investors" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Inversores y Responsabilidad Corporativa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Construyendo valor sostenible para todas las partes interesadas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <metric.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <p className="font-heading text-4xl font-bold mb-3 text-foreground">
                {metric.value}
              </p>
              <p className="text-base text-muted-foreground font-light">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-neutral rounded-lg p-12">
            <h3 className="font-heading text-3xl font-bold mb-6 text-foreground">
              Nuestro Compromiso con la Sostenibilidad
            </h3>
            <p className="text-lg mb-6 text-foreground font-light leading-relaxed">
              Creemos que el éxito a largo plazo requiere un compromiso con la gestión ambiental y la responsabilidad social. Nuestras iniciativas de sostenibilidad se centran en reducir nuestra huella de carbono, promover la diversidad e inclusión, y apoyar a las comunidades donde operamos.
            </p>
            <p className="text-lg text-foreground font-light leading-relaxed">
              A través de informes transparentes y objetivos medibles, nos responsabilizamos ante nuestras partes interesadas y nos esforzamos continuamente por crear un impacto positivo más allá de los retornos financieros.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
