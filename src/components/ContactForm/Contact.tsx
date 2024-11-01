import { Mail, Phone, MapPin, Building } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Solicitar Cotización</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Contáctenos para sus necesidades de trabajo en metal industrial. Proporcionamos cotizaciones detalladas y consultas para todo tipo de proyectos de fabricación en acero.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-amber-500" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-amber-500" />
              <span>info@herreraindustrial.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-amber-500" />
              <span>Distrito Industrial, Calle Acero 123, Ciudad Metal, CM 12345</span>
            </div>
            <div className="flex items-center space-x-4">
              <Building className="h-6 w-6 text-amber-500" />
              <span>Lun-Vie: 7:00 AM - 5:00 PM</span>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Su Nombre"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Nombre de la Empresa"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Número de Teléfono"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none"
            />
            <textarea
              rows={4}
              placeholder="Detalles del Proyecto (Tipo de trabajo, dimensiones, cronograma, etc.)"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}