import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, HelpCircle, Puzzle, Trophy, CheckCircle2, Sprout } from 'lucide-react';
import logoC48 from '../../assets/C48.svg';
import logoC21 from '../../assets/C21.svg';
import logoC32 from '../../assets/C32.svg';
import logoC36 from '../../assets/C36.svg';
import logoC59 from '../../assets/C59.svg';

const cases = [
  {
    id: 'bgr',
    client: 'BGR',
    clientName: 'Banco General Rumiñahui',
    logo: logoC48,
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
      icon: Sprout
    }
  },
  {
    id: 'c21',
    client: 'C21',
    clientName: 'Assist Card',
    logoFallback: 'C21',
    brandingColor: 'text-cyan-600',
    logo: logoC21,
    problem: {
      title: 'EL PROBLEMA',
      description: 'ASSIST CARD necesitaba realizar una revisión de los procesos dentro del área de administración y finanzas.',
      icon: HelpCircle
    },
    solution: {
      title: 'LA SOLUCIÓN',
      steps: [
        'Elaborar una matriz de oportunidades de mejora.',
        'Mapeo de alto nivel del proceso integral del área.',
        'Identificación de oportunidades de mejora según definición de impacto (alto, medio y bajo).',
        'Trabajo focalizado en las oportunidades de mejora clasificadas en alto impacto.',
        'Análisis de estimación de esfuerzo sobre Quick Win´s para RPA.'
      ],
      icon: Puzzle
    },
    results: {
      title: 'Lo que logramos en 7 meses',
      metrics: [
        { value: '+120', label: 'Oportunidades de mejora identificadas.' },
        { value: '40', label: 'Personas entrevistadas.' },
        { value: '7', label: 'Países intervinientes: Argentina, Brasil, Chile, Colombia, México, Perú y Uruguay.' },
        { value: '+50', label: 'Oportunidades mapeadas dentro de la cartera de necesidades para ser ejecutadas.' },
        { value: '1', label: 'video storytelling del camino recorrido en el proyecto.' }
      ],
      icon: Sprout
    }
  },
  {
    id: 'c32',
    client: 'C32',
    clientName: 'Supervielle',
    logoFallback: 'C32',
    logo: logoC32,
    problem: {
      title: 'EL PROBLEMA',
      description: 'Supervielle buscaba desarrollar dentro de su organización una mentalidad de trabajo ágil que permita, más allá de las prácticas, generar vínculos y relaciones positivas para el desarrollo de productos y servicios desde el ingreso de las personas a la compañía.',
      icon: HelpCircle
    },
    solution: {
      title: 'LA SOLUCIÓN',
      steps: [
        'Se desarrolló un programa de onboarding a la agilidad.',
        'El nivel 1 del programa de onboarding a la agilidad incorporó teoría mediante videos utilizando Motion Graphics de manera a introducir la mentalidad ágil.',
        'Se logró la práctica de principios ágiles a través del desarrollo de un videojuego 100% a medida del banco.',
        'Actualmente desarrollando el nivel 2 del programa de onboarding a la agilidad con el desarrollo de materiales para su plataforma de e-learning de manera a expandir las prácticas ágiles en la organización.'
      ],
      icon: Puzzle
    },
    results: {
      title: 'Lo que logramos en 4 meses',
      metrics: [
        { value: '1', label: 'Videojuego desarrollado a medida para el Banco.' },
        { value: '1', label: 'Línea de marca (estética, personajes y narrativa) generadas para el cliente.' },
        { value: '8', label: 'Videos de alto impacto con contenido educativo para el programa de onboarding a la agilidad.' },
        { value: '+90%', label: 'De la organización realizó el proceso de onboarding a la agilidad (nivel 1).' },
        { value: '+90%', label: 'De índice de satisfacción con los materiales educativos entregados.' }
      ],
      icon: Sprout
    }
  },
  {
    id: 'c36',
    client: 'C36',
    clientName: 'Tecpetrol',
    logoFallback: 'C36',
    logo: logoC36,
    problem: {
      title: 'EL PROBLEMA',
      description: 'Tecpetrol necesitaba de nuestro apoyo para mejorar las dinámicas de trabajo claves y acompañar relaciones entre las personas en el entorno virtual forzado por la pandemia. Adicionalmente las diferencias generadas por la diversidad de individuos de diferentes generaciones que forman parte de la empresa requerían de una estrategia para amalgamar equipos tras resultados; de manera a mejorar a su vez el rendimiento y establecer una cultura que permita la apertura y la adaptación al cambio. A su vez también necesitaban potenciar nuevos comportamientos de trabajo para mejorar el desempeño de las personas en entornos de trabajo complejos – sobre todo en pozo.',
      icon: HelpCircle
    },
    solution: {
      title: 'LA SOLUCIÓN',
      steps: [
        'Se realizó un análisis de la diversidad generacional de personas que forman parte de la empresa (Baby boomer, Gen X, Millenials, Centenials).',
        'Se desarrollaron itinerarios de capacitación en un programa "New way of working".',
        'Se creó un programa formación integral práctico/ vivencial sincrónico en talleres y asincrónico.',
        'Se acompañó y potenció el aprendizaje a través de un programa de gamificación orientado a líderes.',
        'Se trabajó en coaching de equipos virtuales orientados a resultados bajo prácticas ágilies.'
      ],
      icon: Puzzle
    },
    results: {
      title: 'Lo que logramos en 8 meses',
      metrics: [
        { value: '+ 20', label: 'píldoras de aprendizaje genérico y técnico.' },
        { value: '+ 100', label: 'líderes preparados para liderar equipos remotos.' },
        { value: '+ 500', label: 'miembros rompiendo barreras generacionales en esquemas gamificados.' },
        { value: '8', label: 'proyectos estratégicos aplicando metodologías híbridas.' },
        { value: '92%', label: 'satisfacción NPS' }
      ],
      icon: Sprout
    }
  },
  {
    id: 'c59',
    client: 'C59',
    clientName: 'Aeropuertos Uruguay',
    logoFallback: 'C59',
    logo: logoC59,
    problem: {
      title: 'EL PROBLEMA',
      description: 'Aeropuertos Uruguay necesitaba asegurar un cambio cultural que iniciaba con medir la viabilidad de la implementación de agilidad en proyectos clave de la corporación y en la organización de manera integral. La visión de cambio y su interrelación con la estrategia de negocio debía ser parte del alcance (a los fines de asegurar un modelo alineado a la estrategia).',
      icon: HelpCircle
    },
    solution: {
      title: 'LA SOLUCIÓN',
      steps: [
        'Realizar un relevamiento y análisis del nivel de madurez y adaptabilidad a la agilidad en distintos sectores de la empresa.',
        'Comprender y contrastar aspectos culturales de manera a identificar las brechas y generar propuestas adecuadas para el cambio que buscaba la corporación.',
        'Realizar un análisis de nuevos proyectos y proyectos en marcha para la implementación de marcos ágiles dentro de estos.',
        'Instalar coaches ágiles para trabajar en los diferentes equipos de la corporación.',
        'Diseñar y ejecutar un plan de gestión de cambio orientado a objetivos estratégicos.'
      ],
      icon: Puzzle
    },
    results: {
      title: 'Lo que logramos en 5 meses',
      metrics: [
        { value: '+ 80', label: 'Personas capacitadas en mentalidad y marcos de trabajo ágil (Directores, Gerentes y mandos medios).' },
        { value: '+ 60', label: 'embajadores de cambio de agilidad apalancando el cambio cultural.' },
        { value: '7', label: 'Células de trabajo activas y acompañadas bajo metodologías ágiles.' },
        { value: '1', label: 'Tablero OKR alineado a la evolución y targets de negocio.' },
        { value: '+ 20', label: 'líderes preparados para asegurar contextos ágiles orientados al negocio.' }
      ],
      icon: Sprout
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // Slower interval for more reading time

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentCase = cases[currentIndex];
  const isDetailedView = currentCase.problem && currentCase.problem.title !== '';

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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className={`backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden bg-white/40 border border-white/20 lg:min-h-[600px] flex flex-col justify-center`}
            >
              <div className="relative z-10">
                {/* Logo Section */}
                <div className="flex justify-end mb-8 md:mb-12">
                  <img
                    src={currentCase.logo}
                    alt={currentCase.clientName}
                    className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
                  />
                </div>

                {isDetailedView ? (
                  // 3-Column Detailed Layout
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 text-left">

                    {/* Problem Column */}
                    <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
                      <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-lg border-4 border-slate-100 border-dashed">
                        <HelpCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg uppercase tracking-widest text-slate-500 font-medium mb-6">
                        {currentCase.problem.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base text-center">
                        {currentCase.problem.description}
                      </p>
                    </div>

                    {/* Solution Column */}
                    <div className="flex flex-col items-center text-center lg:items-center lg:text-center">
                      <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-6 shadow-lg border-4 border-slate-100 border-dashed">
                        <Puzzle className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg uppercase tracking-widest text-slate-500 font-medium mb-6">
                        {currentCase.solution.title}
                      </h3>
                      <ol className="text-gray-700 leading-relaxed text-sm md:text-base text-justify list-decimal pl-4 space-y-3">
                        {currentCase.solution.steps.map((step, idx) => (
                          <li key={idx} className="pl-2">{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Results Column */}
                    <div className="relative mt-8 lg:mt-0">
                      <div className="absolute inset-0 border-2 border-yellow-400 border-dashed rounded-3xl -m-4 pointer-events-none" />
                      <div className="flex flex-col items-center text-center lg:items-center">
                        <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg relative z-10">
                          {(() => {
                            const IconComp = currentCase.results.icon;
                            return <IconComp className="w-12 h-12 text-slate-900" strokeWidth={1.5} />;
                          })()}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 max-w-xs leading-tight">
                          {currentCase.results.title}
                        </h3>
                        <div className="space-y-3 w-full text-left">
                          {currentCase.results.metrics.map((metric, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-1 shrink-0" />
                              <div className="text-slate-700 text-sm md:text-base leading-snug">
                                <span className="font-bold text-cyan-600 text-lg mr-1">{metric.value}</span>
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  // Fallback: Results Focused Layout (Original style for other cases)
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <Trophy className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
                        {currentCase.results.title}
                      </h4>
                      <div className="w-full max-w-2xl mx-auto space-y-4 text-left">
                        {currentCase.results.metrics.map((metric, idx) => (
                          <div key={idx} className="flex gap-4 items-start p-2">
                            <CheckCircle2 className="w-6 h-6 text-cyan-500 mt-1 shrink-0" />
                            <p className="text-lg text-gray-700 font-light leading-snug">
                              <span className="font-bold text-cyan-600 text-xl">{metric.value}</span> {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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
