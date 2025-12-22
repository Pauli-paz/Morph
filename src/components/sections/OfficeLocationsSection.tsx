import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const locations = [
    "Buenos Aires · Argentina",
    "Asunción · Paraguay",
    "Quito · Ecuador",
    "Montevideo · Uruguay",
    "Bogotá · Colombia",
    "Santo Domingo · Rep. Dominicana",
    "Santiago · Chile",
    "Madrid · España",
    "Miami · EEUU",
    "Ciudad de México · México"
];

export default function OfficeLocationsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="py-20 bg-[#8c52ff] relative overflow-hidden">
            {/* Background World Map Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-cover pointer-events-none mix-blend-overlay"></div>

            <div className="container mx-auto px-6 md:px-10 relative z-10 text-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Tenemos oficinas y equipo en:
                    </h2>
                    <p className="text-lg md:text-xl font-light mb-12 max-w-4xl mx-auto opacity-90 text-white">
                        Hoy tenemos fuerte presencia LATAM y hemos dado nuestros primeros pasos en Estados Unidos y España
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-base md:text-lg font-medium tracking-wide leading-relaxed max-w-6xl mx-auto">
                        {locations.map((loc, index) => (
                            <span key={loc} className="flex items-center text-white">
                                {loc}
                                {index < locations.length - 1 && (
                                    <span className="ml-4 text-white hidden md:inline-block">|</span>
                                )}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
