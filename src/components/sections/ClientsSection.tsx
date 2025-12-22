import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Dynamically import all C*.svg files from assets
const logoModules = import.meta.glob('../../assets/C*.svg', { eager: true, as: 'url' });

// Convert the imported modules object into an array of client objects
// Sorting numerically by filename (C1, C2, C10...) 
const allLoadedClients = Object.entries(logoModules)
  .map(([path, url]) => {
    const name = path.split('/').pop()?.replace('.svg', '') || 'Client';
    const numberMatch = name.match(/C(\d+)/);
    const number = numberMatch ? parseInt(numberMatch[1], 10) : 0;
    return {
      name,
      logo: url,
      number
    };
  })
  .sort((a, b) => a.number - b.number);

// Split clients into 4 rows for better density
const quarterPoint = Math.ceil(allLoadedClients.length / 4);
const row1Clients = allLoadedClients.slice(0, quarterPoint);
const row2Clients = allLoadedClients.slice(quarterPoint, quarterPoint * 2);
const row3Clients = allLoadedClients.slice(quarterPoint * 2, quarterPoint * 3);
const row4Clients = allLoadedClients.slice(quarterPoint * 3);

// Duplicate for seamless loop - ensuring enough items for smooth scroll
const row1Display = [...row1Clients, ...row1Clients, ...row1Clients, ...row1Clients, ...row1Clients];
const row2Display = [...row2Clients, ...row2Clients, ...row2Clients, ...row2Clients, ...row2Clients];
const row3Display = [...row3Clients, ...row3Clients, ...row3Clients, ...row3Clients, ...row3Clients];
const row4Display = [...row4Clients, ...row4Clients, ...row4Clients, ...row4Clients, ...row4Clients];

// Helper to render a generic logo row
const LogoRow = ({ clients, direction = 'left', duration = 30 }: { clients: typeof row1Clients, direction?: 'left' | 'right', duration?: number }) => (
  <div className="relative mb-4 overflow-hidden">
    <motion.div
      className="flex gap-4"
      animate={{
        x: direction === 'left' ? [0, -1500] : [-1500, 0],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      }}
    >
      {clients.map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-primary/20 flex items-center justify-center group"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const CountingNumber = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setDisplayValue(Math.floor(ease * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    } else {
      setDisplayValue(0);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="investors" className="py-20 md:py-32 bg-background relative overflow-hidden">
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
          {/* Removed Title as requested */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Más de 140 empresas confían en nosotros en la región.
          </p>
        </motion.div>

        {/* 4 Lines of Rotating Logos */}
        <LogoRow clients={row1Display} direction="left" duration={35} />
        <LogoRow clients={row2Display} direction="right" duration={38} />
        <LogoRow clients={row3Display} direction="left" duration={42} />
        <LogoRow clients={row4Display} direction="right" duration={32} />



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
                <CountingNumber value={140} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Empresas Clientes
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountingNumber value={98} suffix="%" />
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Satisfacción
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountingNumber value={15} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Años de Experiencia
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                <CountingNumber value={500} suffix="+" />
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
