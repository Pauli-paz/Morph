import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    quote: 'Trabajar con este equipo ha sido transformador para nuestro negocio. Sus perspectivas estratégicas y enfoque práctico nos ayudaron a navegar desafíos complejos y lograr un crecimiento sin precedentes.',
    author: 'Sarah Johnson',
    position: 'CEO, TechVentures Inc.',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_5.png',
    alt: 'retrato testimonial corporativo',
  },
  {
    quote: 'El nivel de profesionalismo y experiencia que aportan a cada compromiso es notable. Realmente entienden nuestra industria y entregan soluciones que crean valor duradero.',
    author: 'Michael Chen',
    position: 'CFO, Global Innovations',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_5.png',
    alt: 'retrato testimonial corporativo',
  },
  {
    quote: 'Su enfoque innovador y compromiso con la excelencia los distingue. Hemos visto mejoras medibles en todos los indicadores clave de rendimiento desde que nos asociamos con ellos.',
    author: 'Emily Rodriguez',
    position: 'COO, Enterprise Solutions',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_5.png',
    alt: 'retrato testimonial corporativo',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Testimonios de Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Escucha lo que nuestros clientes dicen sobre trabajar con nosotros
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card">
                <CardContent className="pt-8">
                  <QuoteIcon className="h-12 w-12 text-primary mb-6" strokeWidth={1.5} />
                  <p className="text-base text-card-foreground font-light leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium text-card-foreground text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground font-light">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
