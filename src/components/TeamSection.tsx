import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LinkedinIcon } from 'lucide-react';

const teamMembers = [
  {
    name: 'Diego Erazo',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/diego_erazo_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Diego Román',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/diego_roman_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Isabela Bermúdez',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/isabela_bermudez_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Juan Galo Martínez',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/juan_galo_martinez_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Nicolás Campos',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/nicolas_campos_1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Morph Web',
    image: 'https://c.animaapp.com/mi6dyn0qsz0esz/img/morph-web_1.jpeg',
    linkedin: '#',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nuestro Equipo
            </span>
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Conoce a Nuestros Expertos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Profesionales apasionados comprometidos con tu éxito
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  {/* Decorative border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* LinkedIn button */}
                  <a
                    href={member.linkedin}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary/90 hover:scale-110 shadow-lg"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <LinkedinIcon className="h-5 w-5 text-white" strokeWidth={2} />
                  </a>
                  
                  {/* Name overlay on hover */}
                  <div className="absolute bottom-4 left-4 right-16 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white font-heading font-bold text-sm md:text-base drop-shadow-lg">
                      {member.name}
                    </p>
                  </div>
                </div>
                
                {/* Name below image */}
                <h3 className="font-heading text-sm md:text-base font-semibold text-center text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
