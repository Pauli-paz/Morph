import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const clients = [
  { name: 'YPF', logo: 'https://logo.clearbit.com/ypf.com' },
  { name: 'Mercado Libre', logo: 'https://logo.clearbit.com/mercadolibre.com.ar' },
  { name: 'Banco Galicia', logo: 'https://logo.clearbit.com/bancogalicia.com' },
  { name: 'Techint', logo: 'https://logo.clearbit.com/techint.com' },
  { name: 'Arcor', logo: 'https://logo.clearbit.com/arcor.com' },
  { name: 'Telecom', logo: 'https://logo.clearbit.com/telecom.com.ar' },
  { name: 'Globant', logo: 'https://logo.clearbit.com/globant.com' },
  { name: 'Despegar', logo: 'https://logo.clearbit.com/despegar.com' },
  { name: 'Banco Macro', logo: 'https://logo.clearbit.com/macro.com.ar' },
  { name: 'Molinos Río de la Plata', logo: 'https://logo.clearbit.com/molinos.com.ar' },
  { name: 'Grupo Clarín', logo: 'https://logo.clearbit.com/grupoclarin.com' },
  { name: 'Cencosud', logo: 'https://logo.clearbit.com/cencosud.com' },
  { name: 'Farmacity', logo: 'https://logo.clearbit.com/farmacity.com' },
  { name: 'Havanna', logo: 'https://logo.clearbit.com/havanna.com' },
  { name: 'La Serenísima', logo: 'https://logo.clearbit.com/laserenisima.com.ar' },
  { name: 'Quilmes', logo: 'https://logo.clearbit.com/quilmes.com.ar' },
  { name: 'Banco Santander Río', logo: 'https://logo.clearbit.com/santander.com.ar' },
  { name: 'BBVA Argentina', logo: 'https://logo.clearbit.com/bbva.com.ar' },
  { name: 'Banco Supervielle', logo: 'https://logo.clearbit.com/supervielle.com.ar' },
  { name: 'Banco Patagonia', logo: 'https://logo.clearbit.com/bancopatagonia.com.ar' },
  { name: 'Grupo Peñaflor', logo: 'https://logo.clearbit.com/grupopeñaflor.com' },
  { name: 'Mastellone', logo: 'https://logo.clearbit.com/mastellone.com.ar' },
  { name: 'Ledesma', logo: 'https://logo.clearbit.com/ledesma.com.ar' },
  { name: 'Bodegas Norton', logo: 'https://logo.clearbit.com/norton.com.ar' },
  { name: 'Grupo Newsan', logo: 'https://logo.clearbit.com/newsan.com.ar' },
  { name: 'Garbarino', logo: 'https://logo.clearbit.com/garbarino.com' },
  { name: 'Frávega', logo: 'https://logo.clearbit.com/fravega.com' },
  { name: 'Musimundo', logo: 'https://logo.clearbit.com/musimundo.com' },
  { name: 'Carrefour Argentina', logo: 'https://logo.clearbit.com/carrefour.com.ar' },
  { name: 'Walmart Argentina', logo: 'https://logo.clearbit.com/walmart.com.ar' },
  { name: 'Día Argentina', logo: 'https://logo.clearbit.com/dia.com.ar' },
  { name: 'Coto', logo: 'https://logo.clearbit.com/coto.com.ar' },
  { name: 'Jumbo', logo: 'https://logo.clearbit.com/jumbo.com.ar' },
  { name: 'Disco', logo: 'https://logo.clearbit.com/disco.com.ar' },
  { name: 'Vea', logo: 'https://logo.clearbit.com/vea.com.ar' },
  { name: 'La Anónima', logo: 'https://logo.clearbit.com/laanonima.com.ar' },
  { name: 'Freddo', logo: 'https://logo.clearbit.com/freddo.com.ar' },
  { name: 'Grido', logo: 'https://logo.clearbit.com/grido.com' },
  { name: 'Mostaza', logo: 'https://logo.clearbit.com/mostaza.com.ar' },
  { name: 'Burger King Argentina', logo: 'https://logo.clearbit.com/burgerking.com.ar' },
  { name: 'McDonald\'s Argentina', logo: 'https://logo.clearbit.com/mcdonalds.com.ar' },
  { name: 'Starbucks Argentina', logo: 'https://logo.clearbit.com/starbucks.com.ar' },
  { name: 'Aerolíneas Argentinas', logo: 'https://logo.clearbit.com/aerolineas.com.ar' },
  { name: 'LATAM Argentina', logo: 'https://logo.clearbit.com/latam.com' },
  { name: 'Flybondi', logo: 'https://logo.clearbit.com/flybondi.com' },
  { name: 'JetSmart', logo: 'https://logo.clearbit.com/jetsmart.com' },
];

// Duplicate clients for seamless loop
const allClients = [...clients, ...clients];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="investors" className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-3"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nuestros Clientes
            </span>
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Confían en Nosotros
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Más de 40 empresas líderes en Argentina confían en nuestros servicios
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel - Row 1 */}
        <div className="relative mb-4 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {allClients.map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 flex items-center justify-center group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const textDiv = document.createElement('div');
                        textDiv.className = 'text-xs font-semibold text-gray-600 group-hover:text-primary transition-colors duration-300 text-center px-1';
                        textDiv.textContent = client.name;
                        parent.appendChild(textDiv);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Infinite Scrolling Carousel - Row 2 (Reverse) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [-2400, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {allClients.map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 flex items-center justify-center group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const textDiv = document.createElement('div');
                        textDiv.className = 'text-xs font-semibold text-gray-600 group-hover:text-primary transition-colors duration-300 text-center px-1';
                        textDiv.textContent = client.name;
                        parent.appendChild(textDiv);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                40+
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Empresas Clientes
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Satisfacción
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                15+
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Años de Experiencia
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Proyectos Completados
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
