import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseIcon, UsersIcon, ShieldIcon, LightbulbIcon, Zap, MonitorPlay } from 'lucide-react';
import corporateVideo from '../../assets/corporate_games.mp4';

const services = [
  {
    icon: BriefcaseIcon,
    title: 'Arquitectura de Procesos y Agilidad Organizacional',
    description: (
      <div className="space-y-4">
        <p>
          Transformamos la complejidad operativa en fluidez estratégica. No solo optimizamos procesos; rediseñamos el motor de tu organización para liberar el potencial del talento y maximizar el valor entregado, asegurando que cada acción esté conectada con la visión del negocio.
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm text-left">
          <li>
            <span className="font-semibold text-foreground">Diagnóstico de Madurez Operativa:</span> Identificación precisa de brechas y oportunidades de mejora.
          </li>
          <li>
            <span className="font-semibold text-foreground">Ingeniería de Procesos End-to-End:</span> Diseño de flujos centrados en la experiencia del usuario y resultados de negocio.
          </li>
          <li>
            <span className="font-semibold text-foreground">Gobernanza y Claridad Organizacional:</span> Estructuración de roles para eliminar la fricción y potenciar la autonomía.
          </li>
          <li>
            <span className="font-semibold text-foreground">Optimización de Flujos y Eliminación de Desperdicios:</span> Detección de cuellos de botella para una operación más esbelta (lean).
          </li>
          <li>
            <span className="font-semibold text-foreground">Estrategia de Impacto Inmediato:</span> Implementación de quick wins que validan la transformación desde el día uno.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: UsersIcon,
    title: 'Transformación Cultural y Gestión de la Adopción',
    description: (
      <div className="space-y-4">
        <p>
          El éxito de cualquier estrategia depende de la capacidad de las personas para abrazarla. Facilitamos la transición hacia nuevos paradigmas, asegurando que el cambio no sea solo un hito en el calendario, sino una evolución genuina en el ADN de la organización.
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm text-left">
          <li>
            <span className="font-semibold text-foreground">Arquitectura de Estrategias de Cambio:</span> Diseño de hojas de ruta globales para transformaciones complejas.
          </li>
          <li>
            <span className="font-semibold text-foreground">Psicología del Cambio y Mitigación de Fricciones:</span> Análisis proactivo de impactos para desarticular resistencias antes de que ocurran.
          </li>
          <li>
            <span className="font-semibold text-foreground">Ecosistemas de Comunicación Estratégica:</span> Planes multicanal diseñados para conectar con el propósito y movilizar a la acción.
          </li>
          <li>
            <span className="font-semibold text-foreground">Auditoría y Evolución de Cultura:</span> Diagnóstico profundo de hábitos y valores para alinear el comportamiento con la visión futura.
          </li>
          <li>
            <span className="font-semibold text-foreground">Sostenibilidad y Anclaje del Cambio:</span> Programas de refuerzo post-implementación para garantizar que los nuevos hábitos perduren.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: ShieldIcon,
    title: 'Liderazgo Evolutivo y Capacidades de Futuro',
    description: (
      <div className="space-y-4">
        <p>
          El liderazgo es el puente entre la estrategia y la ejecución. En Morph Global, no solo desarrollamos habilidades; construimos la mentalidad necesaria para liderar la ambigüedad y potenciar el talento colectivo, asegurando que la organización sea resiliente y esté siempre lista para el siguiente desafío.
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm text-left">
          <li>
            <span className="font-semibold text-foreground">Arquitectura de Liderazgo Consciente:</span> Desarrollo de líderes con propósito, capaces de inspirar y movilizar en entornos volátiles (VUCA/BANI).
          </li>
          <li>
            <span className="font-semibold text-foreground">Mentoring y Coaching de Alto Impacto:</span> Acompañamiento personalizado para la alta dirección, enfocado en el desbloqueo del potencial ejecutivo.
          </li>
          <li>
            <span className="font-semibold text-foreground">Upskilling & Reskilling Estratégico:</span> Programas diseñados para cerrar la brecha entre las capacidades actuales y las demandas del mercado.
          </li>
          <li>
            <span className="font-semibold text-foreground">Learning Experience Design (LXD):</span> Creación de ecosistemas de aprendizaje innovadores que garantizan la retención y la aplicación inmediata.
          </li>
          <li>
            <span className="font-semibold text-foreground">Redes de Agentes de Cambio (Change Agents):</span> Activación de nodos de influencia internos para capilarizar la transformación en toda la estructura.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: LightbulbIcon,
    title: 'Arquitectura de Flujos Digitales & Tecnología Aplicada',
    description: (
      <div className="space-y-4">
        <p>
          No solo implementamos herramientas; diseñamos y construimos flujos digitales donde la tecnología se integra de forma orgánica con la estrategia. Creamos ecosistemas donde la información circula sin fricciones, permitiendo que las personas se enfoquen en lo que realmente genera valor.
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm text-left">
          <li>
            <span className="font-semibold text-foreground">Roadmap de Evolución Tecnológica:</span> Diseño de estrategias de adopción alineadas al ciclo de vida del negocio.
          </li>
          <li>
            <span className="font-semibold text-foreground">Gestión del Cambio para Ecosistemas Digitales:</span> Especialistas en la adopción humana de plataformas críticas (ERP, CRM, HR Tech, BI).
          </li>
          <li>
            <span className="font-semibold text-foreground">Diseño de Experiencias Digitales (UX-Ops):</span> Construimos flujos pensados para el usuario final, eliminando la complejidad innecesaria.
          </li>
          <li>
            <span className="font-semibold text-foreground">Sincronización de Procesos y Stack Tecnológico:</span> Aseguramos que tus herramientas digitales hablen el mismo idioma que tus procesos de negocio.
          </li>
          <li>
            <span className="font-semibold text-foreground">Transferencia de Capacidades Digitales:</span> Mentoría y formación para que la organización domine y evolucione su propia tecnología.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Ejecución de Alto Impacto: BPO & Staffing Augmentation',
    description: (
      <div className="space-y-4">
        <p>
          Llevamos tu estrategia a la realidad operativa. No solo proveemos talento o servicios; actuamos como una extensión de tu propia organización, asegurando que la implementación de tus procesos sea impecable y que los resultados sean medibles desde el primer día. Escalamos tu capacidad operativa con agilidad y precisión.
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm text-left">
          <li>
            <span className="font-semibold text-foreground">Gestión Integral de Operaciones Tercerizadas (BPO):</span> Ejecución experta de procesos de negocio con foco en la excelencia y la rentabilidad.
          </li>
          <li>
            <span className="font-semibold text-foreground">Staffing Augmentation Estratégico:</span> Integración fluida de talento especializado que se adapta a tu cultura y necesidades técnicas.
          </li>
          <li>
            <span className="font-semibold text-foreground">Gobierno de Niveles de Servicio (SLAs & KPIs):</span> Monitoreo riguroso del desempeño basado en métricas críticas de éxito y calidad.
          </li>
          <li>
            <span className="font-semibold text-foreground">Blindaje Operativo:</span> Identificación proactiva de riesgos y planes de contingencia para garantizar la continuidad del negocio.
          </li>
          <li>
            <span className="font-semibold text-foreground">Evolución del Servicio:</span> Optimización basada en data real y mejora continua para elevar los estándares de la operación.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: MonitorPlay,
    title: 'Content Factory: Ingeniería de Contenidos & Learning Experience',
    description: (
      <div className="space-y-4">
        <p>
          Transformamos el conocimiento técnico en experiencias memorables. Nuestra Content Factory diseña y construye ecosistemas de aprendizaje y comunicación multimodal, asegurando que la información sea digerible, interactiva y, sobre todo, efectiva para habilitar la adopción de nuevas herramientas y procesos.
        </p>
        <ul className="list-disc pl-4 space-y-2 text-sm text-left">
          <li>
            <span className="font-semibold text-foreground">Estrategia Multimodal de Contenidos:</span> Diseño de piezas en múltiples formatos (Video, Motion Graphics, Podcast) para diversos estilos de aprendizaje.
          </li>
          <li>
            <span className="font-semibold text-foreground">Simuladores y Gamificación:</span> Creación de entornos virtuales y juegos serios (serious games) que permiten practicar en un entorno seguro antes de la implementación real.
          </li>
          <li>
            <span className="font-semibold text-foreground">Desarrollo de Objetos de Aprendizaje (SCORM/xAPI):</span> Contenidos interactivos compatibles con cualquier LMS, diseñados para el seguimiento de progreso y resultados.
          </li>
          <li>
            <span className="font-semibold text-foreground">Kits de Soporte para Implementación:</span> Materiales just-in-time (guías rápidas, tutoriales, micro-learning) para facilitar la adopción de sistemas (ERP, CRM, etc.).
          </li>
          <li>
            <span className="font-semibold text-foreground">Campañas de Comunicación Estratégica:</span> Piezas de comunicación interna.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block p-3 mb-4 rounded-full bg-primary/10">
            <LightbulbIcon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Diseñamos, implementamos y gestionamos:
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="w-full border shadow-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      {(() => {
                        const Icon = services[currentIndex].icon;
                        return <Icon className="w-8 h-8 text-primary" />;
                      })()}
                    </div>
                    <CardTitle className="text-2xl mb-2">{services[currentIndex].title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-base text-muted-foreground leading-relaxed">
                      {services[currentIndex].description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2 items-center">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Applied Technology Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto text-center"
        >
          <h3 className="font-heading text-2xl font-bold mb-8 text-primary">
            Tecnología Aplicada
          </h3>
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
