import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseIcon, UsersIcon, ShieldIcon, LightbulbIcon } from 'lucide-react';

const services = [
  {
    icon: BriefcaseIcon,
    title: 'Consultoría Estratégica',
    description: 'Orientación experta para navegar desafíos empresariales complejos e identificar oportunidades de crecimiento.',
  },
  {
    icon: UsersIcon,
    title: 'Gestión de Talento',
    description: 'Construye equipos de alto rendimiento con nuestras soluciones de reclutamiento y desarrollo.',
  },
  {
    icon: ShieldIcon,
    title: 'Gestión de Riesgos',
    description: 'Identifica, evalúa y mitiga riesgos para proteger los intereses de tu negocio.',
  },
  {
    icon: LightbulbIcon,
    title: 'Estrategia de Innovación',
    description: 'Fomenta la innovación y la transformación digital para mantenerte a la vanguardia.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Soluciones integrales diseñadas para impulsar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl font-heading text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
