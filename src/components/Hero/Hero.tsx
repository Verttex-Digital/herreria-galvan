import { Factory } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
          alt="Fabricación industrial en acero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex items-center space-x-4 mb-8">
          <Factory className="h-12 w-12 text-amber-500" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Herrería Industrial
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-8">
          Servicios profesionales de fabricación en acero y metalurgia. Especialistas en acero estructural, techos metálicos, escaleras y elementos arquitectónicos personalizados.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors duration-300 text-lg font-semibold rounded-lg"
        >
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
}