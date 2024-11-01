
export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
      title: "Instalación de Estructura de Acero"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      title: "Sistema de Techo Metálico"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      title: "Escalera Industrial"
    },
    {
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
      title: "Trabajo Metálico Comercial"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Proyectos</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore nuestro portafolio de proyectos industriales y comerciales completados, que muestran nuestra experiencia en fabricación e instalación metálica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}