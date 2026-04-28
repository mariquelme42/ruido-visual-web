import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Users, Sparkles } from "lucide-react";
import { useEffect } from "react";

export function Home() {
    useEffect(() => {
    document.title = "Ruido Visual";

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon-ruido.png";
    }
  }, []);
  return (
    <div className="relative">
      {/* Hero Section with Noise Effect */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 lg:py-40 overflow-hidden">
        {/* Subtle noise background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-9xl mb-8 md:mb-12 tracking-tighter"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ruido
              <br />
              <span className="italic">Visual</span>
            </motion.h1>
          </motion.div>

          <motion.div
            className="max-w-3xl space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-accent)' }}>
              Somos una red editorial colectiva, independiente y autogestionada.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Ruido visual es un espacio de creación compartida, apoyo mutuo y publicación colectiva, que busca abrir caminos para escritoras y escritores contemporáneos de Paraguay que no encuentran espacio en estructuras editoriales tradicionales.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/biblioteca"
              className="group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explorar biblioteca</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/*}
            <Link
              to="/convocatorias"
              className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              <span>Convocatorias</span>
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* Stats / Features Section */}
      <section className="px-6 md:px-12 py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 inline-block p-4 bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image with Overlay Text */}
      <section className="relative px-6 md:px-12 py-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative h-[60vh] md:h-[70vh] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ImageWithFallback
              src="/images/home/home-01.jpg"
              alt="Libro abierto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
              <p
                className="text-3xl md:text-5xl text-background leading-tight max-w-3xl"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                El proceso editorial es colaborativo, horizontal y sostenido por la confianza, la
                amistad y el compromiso artístico.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Library Section - Card Style */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-baseline justify-between mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Publicaciones recientes
              </h2>
              <p className="text-muted-foreground">Explorá nuestra colección editorial</p>
            </div>
            <Link
              to="/biblioteca"
              className="hidden md:inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
            >
              Ver todo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/biblioteca/${book.id}`} className="group block">
                  <div className="relative overflow-hidden mb-6 bg-muted">
                    <div className="aspect-[3/4]">
                      <ImageWithFallback
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground">{book.author}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {book.year}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/biblioteca"
              className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
            >
              Ver biblioteca completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview - Asymmetric Layout */}
      <section className="px-6 md:px-12 py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Galería visual
            </h2>
            <p className="text-background/70 max-w-2xl">
              Documentación visual de nuestros proyectos, residencias y encuentros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-6">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/galeria" className="block group relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="/images/gallery/galeria-03.png"
                  alt="galeria-03"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
              </Link>
            </motion.div>
            <motion.div
              className="md:col-span-5 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link to="/galeria" className="block group relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="/images/gallery/galeria-26.webp"
                  alt="galeria-26"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-background hover:gap-3 transition-all duration-300 border-b border-background/30 hover:border-background pb-1"
            >
              Explorar galería completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Open Calls Section - Card Style */}
      {/*
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="border-2 border-foreground p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Convocatorias abiertas
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground mb-10 max-w-2xl mx-auto">
              Invitamos a escritoras, escritores y artistas a participar en nuestros proyectos editoriales
              colaborativos.
            </p>
            <Link
              to="/convocatorias"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-lg"
            >
              <Sparkles className="w-5 h-5" />
              <span>Ver convocatorias</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      */}
    </div>
  );
}

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Colaborativa",
    description:
      "Trabajamos juntos, sin jerarquías. Cada proyecto es un esfuerzo compartido donde las decisiones se toman colectivamente.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Autogestionada e Independiente",
    description:
      "Como acto político y forma de existencia y resistencia. El lucro no es el fin de esta editorial.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Experimental",
    description:
      "Un laboratorio donde convergen la experimentación literaria, la amistad creativa y el compromiso artístico.",
  },
];

const featuredBooks = [
  {
    id: "nunca-tuve-un-titulo",
    title: "Nunca tuve un título",
    author: "Ruido Visual",
    year: "2025",
    cover: "/images/library/nunca-tuve.png",
    pdf: "/pdfs/nunca-tuve.pdf",
  },
  {
    id: "croissant-tete",
    title: "Croissant/Teté con Pan",
    author: "Ale Canclini",
    year: "2025",
    cover: "/images/library/croissant-tete.png",
    pdf: "/pdfs/croissant-tete.pdf",
  },
  {
    id: "atajame-un-ratito",
    title: "Atajame un ratito esta desaparición",
    author: "Miel",
    year: "2025",
    cover: "/images/library/atajame-un-ratito.png",
    pdf: "/pdfs/atajame-un-ratito.pdf",
  },
];