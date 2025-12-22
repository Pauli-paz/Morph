import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MailIcon, MapPinIcon } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Contáctanos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Contanos tu idea y te ayudamos a realizarla
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base text-foreground font-normal mb-3 block">
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-base bg-background text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-base text-foreground font-normal mb-3 block">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 text-base bg-background text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-base text-foreground font-normal mb-3 block">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="text-base bg-background text-foreground border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base py-6 transition-all duration-200"
              >
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-8 text-foreground">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base mb-2">Email</p>
                    <a
                      href="mailto:info@morph-global.com"
                      className="text-muted-foreground text-base font-light hover:text-primary transition-colors"
                    >
                      info@morph-global.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base mb-2">Ubicación</p>
                    <p className="text-muted-foreground text-base font-light">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 pt-12 border-t border-border"
        >
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Suscríbete a nuestro Newsletter
              </h3>
              <p className="text-muted-foreground font-light">
                Recibe las últimas noticias y actualizaciones de Morph directamente en tu inbox.
              </p>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <form className="flex gap-4 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="h-12 bg-background border-border"
                  required
                />
                <Button type="submit" size="lg" className="h-12 px-8 font-normal">
                  Suscribirse
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
