import { Anvil } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Anvil className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold">Herrería Industrial</span>
          </div>

          <div className="flex space-x-6">
            <a href="#home" className="hover:text-amber-500 transition-colors">Inicio</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Servicios</a>
            <a href="#gallery" className="hover:text-amber-500 transition-colors">Galería</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contacto</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Herrería Industrial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}