import { Building2, Construction, Factory, Warehouse } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Acero Estructural",
      description: "Fabricación e instalación completa de acero estructural para edificios comerciales e industriales. Vigas, columnas y estructuras de acero."
    },
    {
      icon: <Construction className="h-8 w-8" />,
      title: "Techos y Revestimientos",
      description: "Sistemas profesionales de techos metálicos, paneles de pared y soluciones de revestimiento industrial. Servicios expertos de instalación y mantenimiento."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Fabricación Industrial",
      description: "Fabricación metálica personalizada para aplicaciones industriales. Plataformas, pasarelas, barandillas de seguridad y soportes especializados."
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Metales Arquitectónicos",
      description: "Trabajos metálicos arquitectónicos personalizados incluyendo escaleras, pasamanos, puertas de seguridad y elementos decorativos para espacios comerciales."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Servicios profesionales de fabricación metálica para proyectos comerciales, industriales y arquitectónicos. Artesanía de calidad y soluciones confiables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-amber-500 transition-colors"
            >
              <div className="text-amber-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}