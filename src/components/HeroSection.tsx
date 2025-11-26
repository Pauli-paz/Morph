import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.video
          alt="corporate office teamwork video"
          src="https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_1.mp4"
          poster="https://c.animaapp.com/mi6dyn0qsz0esz/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <motion.h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Construyendo el Éxito del Mañana Hoy
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empoderamos empresas con soluciones innovadoras, perspectivas estratégicas y un compromiso inquebrantable con la excelencia
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base px-8 py-6 transition-all duration-200"
            >
              Descubre Nuestra Visión
              <ArrowRightIcon className="ml-2 h-5 w-5" strokeWidth={1.5} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
