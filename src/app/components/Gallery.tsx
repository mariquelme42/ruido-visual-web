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
    src: "/images/gallery/galeria-01.png",
    caption: "galeria-01",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-03.png",
    caption: "galeria-03",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-02.png",
    caption: "galeria-02",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-04.webp",
    caption: "galeria-04",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-09.webp",
    caption: "galeria-09",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-07.webp",
    caption: "galeria-07",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-06.webp",
    caption: "galeria-06",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-08.webp",
    caption: "galeria-08",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-05.webp",
    caption: "galeria-05",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-10.jpg",
    caption: "galeria-10",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-11.png",
    caption: "galeria-11",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-12.webp",
    caption: "galeria-12",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-13.webp",
    caption: "galeria-13",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-16.jpg",
    caption: "galeria-16",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-14.webp",
    caption: "galeria-14",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-15.jpg",
    caption: "galeria-15",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-17.jpg",
    caption: "galeria-17",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-18.jpg",
    caption: "galeria-18",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-23.jpg",
    caption: "galeria-23",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-20.jpg",
    caption: "galeria-20",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-21.jpg",
    caption: "galeria-21",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-22.jpg",
    caption: "galeria-22",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-19.jpg",
    caption: "galeria-19",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-24.jpg",
    caption: "galeria-24",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-25.jpg",
    caption: "galeria-25",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-26.webp",
    caption: "galeria-26",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-27.webp",
    caption: "galeria-27",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-28.webp",
    caption: "galeria-28",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-29.webp",
    caption: "galeria-29",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-30.webp",
    caption: "galeria-30",
    tall: false,
  },
   {
    src: "/images/gallery/galeria-31.webp",
    caption: "galeria-31",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-32.webp",
    caption: "galeria-32",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-33.webp",
    caption: "galeria-33",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-34.webp",
    caption: "galeria-34",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-35.webp",
    caption: "galeria-35",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-36.webp",
    caption: "galeria-36",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-37.webp",
    caption: "galeria-37",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-38.webp",
    caption: "galeria-38",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-39.webp",
    caption: "galeria-39",
    tall: true,
  },
  {
    src: "/images/gallery/galeria-43.jpeg",
    caption: "galeria-43",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-40.jpeg",
    caption: "galeria-40",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-41.jpeg",
    caption: "galeria-41",
    tall: false,
  },
  {
    src: "/images/gallery/galeria-42.jpeg",
    caption: "galeria-42",
    tall: false,
  },
];
