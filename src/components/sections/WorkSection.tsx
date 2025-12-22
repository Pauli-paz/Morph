import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, HelpCircle, Puzzle, Trophy, CheckCircle2 } from 'lucide-react';
import logoC48 from '../../assets/C48.svg';

const cases = [
  {
    id: 'bgr',
    client: 'BGR',
    clientName: 'Banco General Rumiñahui',
    logoFallback: 'BGR', // We can replace this with an img tag if we get the logo later
    problem: {
      title: 'EL PROBLEMA',
      description: 'El personal del Banco General Rumiñahui afrontaba serios problemas relacionados con la realización de reuniones: las veían como demasiado largas, redundantes, sin objetivos definidos, poco claras e improductivas, por lo cual sentían molestia al ser convocados a ellas, al punto de denominar esta situación como una "reunionitis" generalizada.',
      icon: HelpCircle
    },
    solution: {
      title: 'LA SOLUCIÓN',
      steps: [
        'Puesta en marcha de un programa de Gamificación dual -2 audiencias en simultáneo: líderes y colaboradores- diseñado para funcionar de manera coordinada con el programa de Capacitación.',
        'Diseño e implementación de un plan de Comunicación que incluyó contenido instructivo ("tips" para lograr Reuniones Efectivas).',
        'Seguimiento permanente, de manera conjunta con el liderazgo del área de Recursos Humanos.',
        'Realización de evento de premiación y cierre, con un juego final, entrega de premios y diplomas.'
      ],
      icon: Puzzle
    },
    results: {
      title: 'Lo que logramos en 2 meses',
      metrics: [
        { value: '+510', label: 'personas participaron de los programas de gamificación.' },
        { value: '2', label: 'audiencias (líderes y colaboradores) participando de desafíos interrelacionados.' },
        { value: '8', label: 'desafíos planteados + 2 eventos de cierre y premiación.' },
        { value: '89%', label: 'de participación activa (promedio).' },
        { value: '85%', label: 'de efectividad percibida por los participantes y los stakeholders.' }
      ],
      icon: Trophy
    }
  }
];

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="work" className="py-20 md:py-32 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Transformaciones reales con resultados medibles
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl"
            >
              {/* Content - Single Card Focused on Results */}
              <div className="max-w-4xl mx-auto">
                <div className="h-full border border-primary/10 rounded-2xl p-8 md:p-12 bg-white shadow-2xl relative overflow-hidden">
                  {/* Decorative background accent */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Logo - Natural flow */}
                    <div className="bg-white p-4 rounded-full border border-primary/10 shadow-lg mb-8">
                      <img
                        src={logoC48}
                        alt={currentCase.clientName}
                        className="h-16 w-auto object-contain"
                      />
                    </div>

                    <h3 className="hidden">
                      {currentCase.clientName}
                    </h3>

                    {/* Tree Icon Header Element (as per user image) */}
                    <div className="w-20 h-20 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center mb-6 shadow-sm">
                      <div className="text-yellow-600">
                        {/* Simple tree/growth icon using lucide */}
                        <Trophy className="w-10 h-10" />
                      </div>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
                      {currentCase.results.title}
                    </h4>

                    {/* Vertical List */}
                    <div className="w-full max-w-2xl mx-auto space-y-4">
                      {currentCase.results.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                          viewport={{ once: true }}
                          className="flex gap-4 items-start p-2"
                        >
                          <div className="mt-1 shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                          </div>
                          <p className="text-lg text-gray-700 font-light leading-snug text-left">
                            <span className="font-bold text-cyan-600 text-xl">{metric.value}</span> {metric.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls (Hidden if only 1 case) */}
          {cases.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-white/10"
                aria-label="Previous case"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-white/10"
                aria-label="Next case"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
