import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
          Galería
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Documentación visual de nuestros proyectos, residencias y encuentros. Un archivo de imágenes que registran el proceso creativo colectivo.
        </p>

        {/* Masonry-style Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden bg-muted group cursor-pointer ${
                item.tall ? "md:row-span-2" : ""
              }`}
              style={{ aspectRatio: item.tall ? "3/4" : "4/3" }}
            >
              <ImageWithFallback
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Gallery Caption Section */}
        <div className="mt-16 py-12 border-t border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Memoria visual de un proceso colectivo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada imagen es un testimonio del trabajo compartido, de los encuentros que dieron forma a nuestros proyectos. La galería no es solo un registro del resultado, sino del proceso mismo: conversaciones, lecturas, revisiones, momentos de creación conjunta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aquí conviven fotografías de residencias poéticas, talleres, presentaciones de libros y espacios de trabajo. Todas ellas son parte de la memoria colectiva de Ruido Visual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1619320669563-92aeccfc4d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBwcmludGVkJTIwY2FyZHMlMjBwb2V0cnl8ZW58MXx8fHwxNzcyOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Taller de escritura colectiva",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1624954045119-097484c3db42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBwaG90b2dyYXBoeSUyMG5hdHVyZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Naturaleza y palabra",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1617380607001-2797ed957a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwcGFwZXIlMjBlZGl0b3JpYWwlMjBvYmplY3RzfGVufDF8fHx8MTc3MjkxMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Proceso editorial",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1650513973625-2abc0854814c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3MlMjBsaWJyYXJ5JTIwYXJjaGl2ZXxlbnwxfHx8fDE3NzI5MTA4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Archivo de publicaciones",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1713257510109-4cbfec05ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5hdHVyZSUyMG1pbmltYWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjkxMDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Texturas visuales",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1738441639602-f6f2ff69a814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjB3b3Jrc3BhY2UlMjB3cml0aW5nJTIwZGVza3xlbnwxfHx8fDE3NzI5MTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Espacio de trabajo",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1681684563154-798e01d10fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwY29udGVtcG9yYXJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NzI5MTA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Presentación de libro",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1598738865218-7809c17181c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmclMjBwb2V0cnl8ZW58MXx8fHwxNzcyOTEwODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Lectura compartida",
    tall: false,
  },
];
