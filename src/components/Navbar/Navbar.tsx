import { useState } from 'react';
import { Factory, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-zinc-900/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Factory className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold">Herrería Industrial</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-amber-500 transition-colors">Inicio</a>
              <a href="#services" className="hover:text-amber-500 transition-colors">Servicios</a>
              <a href="#gallery" className="hover:text-amber-500 transition-colors">Proyectos</a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">Cotización</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-zinc-800">
            <a href="#home" className="block px-3 py-2 hover:text-amber-500 transition-colors">Inicio</a>
            <a href="#services" className="block px-3 py-2 hover:text-amber-500 transition-colors">Servicios</a>
            <a href="#gallery" className="block px-3 py-2 hover:text-amber-500 transition-colors">Proyectos</a>
            <a href="#contact" className="block px-3 py-2 hover:text-amber-500 transition-colors">Cotización</a>
          </div>
        </div>
      )}
    </nav>
  );
}