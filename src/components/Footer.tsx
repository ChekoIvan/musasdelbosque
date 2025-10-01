'use client';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-green-100 mb-4">
              Musas del Bosque
            </h3>
            <div className="space-y-2 text-green-200">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                (951) 593-6884
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-green-100 mb-4">
              Ubicación
            </h4>
            <div className="space-y-2 text-green-200">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Av. Montoya 514
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Lázaro Cárdenas
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                68140 Oaxaca de Juárez, Oax.
              </p>
            </div>
          </div>

          {/* Social Media & Maps */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-green-100 mb-4">
              Síguenos
            </h4>
            <div className="space-y-4">
              {/* Social Media */}
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="https://instagram.com/musas.del.bosque" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-800 hover:bg-green-700 text-green-100 p-3 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                  </svg>
                </a>
              </div>

              {/* Google Maps Link */}
              <a 
                href="https://maps.google.com/?q=Av.+Montoya+514,+Lázaro+Cárdenas,+68140+Oaxaca+de+Juárez,+Oax." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-700 text-green-100 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-300">
            © 2024 Musas del Bosque. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
