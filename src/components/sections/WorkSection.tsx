import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, HelpCircle, Puzzle, Trophy, CheckCircle2 } from 'lucide-react';

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
              {/* Client Header */}
              <div className="flex flex-col items-center mb-12">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 text-neutral-900 font-bold text-xl border-4 border-primary/20">
                  {currentCase.logoFallback}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  {currentCase.clientName}
                </h3>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

                {/* Problem Column */}
                <div className="space-y-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 border border-white/10">
                      <currentCase.problem.icon className="w-8 h-8 text-white/70" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground/80 uppercase tracking-widest mb-4">
                      {currentCase.problem.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {currentCase.problem.description}
                    </p>
                  </div>
                </div>

                {/* Solution Column */}
                <div className="space-y-6 relative">
                  {/* Divider for mobile */}
                  <div className="lg:hidden w-full h-px bg-white/10 my-8"></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4 border border-white/10">
                      <currentCase.solution.icon className="w-8 h-8 text-white/70" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground/80 uppercase tracking-widest mb-4">
                      {currentCase.solution.title}
                    </h4>
                    <ol className="text-left space-y-4 text-muted-foreground font-light text-sm md:text-base">
                      {currentCase.solution.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="font-bold text-primary/50 min-w-[1.5rem]">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Results Column - Highlighted */}
                <div className="space-y-6 relative">
                  {/* Divider for mobile */}
                  <div className="lg:hidden w-full h-px bg-white/10 my-8"></div>

                  <div className="h-full border-2 border-dashed border-primary/50 rounded-2xl p-6 md:p-8 bg-primary/5 relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral p-2 rounded-full border border-primary/20">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <currentCase.results.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-foreground text-center mt-6 mb-8">
                      {currentCase.results.title}
                    </h4>

                    <ul className="space-y-4">
                      {currentCase.results.metrics.map((metric, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm md:text-base text-foreground/90 font-light">
                            <span className="font-bold text-primary">{metric.value}</span> {metric.label}
                          </p>
                        </li>
                      ))}
                    </ul>
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
