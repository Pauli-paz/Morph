import { LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import logo from '../../assets/Group.svg';
import popitLogo from '../../assets/popit logo.png';

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-tertiary text-tertiary-foreground py-8 md:py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-10 flex flex-col gap-8">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Left Side: Logo & Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-lg">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Morph Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <img
                src={popitLogo}
                alt="PopIT Logo"
                className="h-14 w-auto ml-[280px] brightness-0 invert"
              />
            </div>
            <p className="text-xs text-tertiary-foreground/80 font-light leading-relaxed">
              Construyendo el éxito del mañana a través de la innovación, integridad y excelencia.
            </p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-tertiary-foreground/10 flex items-center justify-center hover:bg-tertiary-foreground/20 transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4 text-tertiary-foreground" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-tertiary-foreground/10 flex items-center justify-center hover:bg-tertiary-foreground/20 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4 text-tertiary-foreground" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-tertiary-foreground/10 flex items-center justify-center hover:bg-tertiary-foreground/20 transition-colors duration-200"
              aria-label="Youtube"
            >
              <YoutubeIcon className="h-4 w-4 text-tertiary-foreground" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 w-full">
          <p className="text-sm text-center text-tertiary-foreground/60 font-light">
            © {currentYear} Morph. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
