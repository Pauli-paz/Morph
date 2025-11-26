import { LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary text-tertiary-foreground py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://c.animaapp.com/mi6dyn0qsz0esz/img/morph.svg" 
                alt="Morph Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-tertiary-foreground/80 font-light leading-relaxed">
              Construyendo el éxito del mañana a través de la innovación, integridad y excelencia.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-medium mb-6 text-tertiary-foreground">
              Empresa
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Nuestro Trabajo
                </a>
              </li>
              <li>
                <a href="#investors" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Inversores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-medium mb-6 text-tertiary-foreground">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-tertiary-foreground/80 hover:text-tertiary-foreground transition-colors duration-200 font-light">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-medium mb-6 text-tertiary-foreground">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-tertiary-foreground/10 flex items-center justify-center hover:bg-tertiary-foreground/20 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5 text-tertiary-foreground" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-tertiary-foreground/10 flex items-center justify-center hover:bg-tertiary-foreground/20 transition-colors duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5 text-tertiary-foreground" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-tertiary-foreground/10 flex items-center justify-center hover:bg-tertiary-foreground/20 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5 text-tertiary-foreground" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-tertiary-foreground/60 font-light">
            © {currentYear} Morph. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
