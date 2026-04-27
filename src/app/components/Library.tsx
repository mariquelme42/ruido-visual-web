import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Search, SlidersHorizontal, X } from "lucide-react";

export function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "all" || book.year === selectedYear;
    const matchesAuthor = selectedAuthor === "all" || book.author === selectedAuthor;
    const matchesType = selectedType === "all" || book.type === selectedType;

    return matchesSearch && matchesYear && matchesAuthor && matchesType;
  });

  const years = ["all", ...Array.from(new Set(books.map((b) => b.year)))];
  const authors = ["all", ...Array.from(new Set(books.map((b) => b.author)))];
  const types = ["all", ...Array.from(new Set(books.map((b) => b.type)))];

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedAuthor("all");
    setSelectedType("all");
    setSearchTerm("");
  };

  const hasActiveFilters =
    selectedYear !== "all" ||
    selectedAuthor !== "all" ||
    selectedType !== "all" ||
    searchTerm !== "";

  return (
    <div className="px-6 md:px-12 py-12 md:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Biblioteca
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Nuestra propuesta principal es poner en conversación obras actuales de literatura de Paraguay con la gente, por eso, este espacio está dedicado a la difusión de literatura contemporánea paraguaya de lo que no encaja en el modelo productivo hegemónico de literatura. Los libros son gratis, accesibles, y cada vez tendremos más, descargá sin culpa.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por título o autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border-2 border-border focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-4 border-2 border-border hover:border-foreground hover:bg-secondary/50 transition-all duration-300 flex items-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden md:inline">Filtros</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-2 border-border p-6 bg-card"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                  Filtrar por
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Limpiar filtros
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Año
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="all">Todos los años</option>
                    {years.slice(1).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Autor
                  </label>
                  <select
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="all">Todos los autores</option>
                    {authors.slice(1).map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    Tipo
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="all">Todos los tipos</option>
                    {types.slice(1).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm text-muted-foreground">Filtros activos:</span>
              {searchTerm && (
                <span className="px-3 py-1 bg-foreground text-background text-sm">
                  "{searchTerm}"
                </span>
              )}
              {selectedYear !== "all" && (
                <span className="px-3 py-1 bg-foreground text-background text-sm">
                  {selectedYear}
                </span>
              )}
              {selectedAuthor !== "all" && (
                <span className="px-3 py-1 bg-foreground text-background text-sm">
                  {selectedAuthor}
                </span>
              )}
              {selectedType !== "all" && (
                <span className="px-3 py-1 bg-foreground text-background text-sm">
                  {selectedType}
                </span>
              )}
            </div>
          )}
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-wider text-muted-foreground mb-10"
        >
          {filteredBooks.length}{" "}
          {filteredBooks.length === 1 ? "publicación encontrada" : "publicaciones encontradas"}
        </motion.p>

        {/* Books Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/biblioteca/${book.id}`} className="group block">
                <div className="relative overflow-hidden mb-5 bg-muted">
                  <div className="aspect-[3/4]">
                    <ImageWithFallback
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground transition-all duration-300" />
                </div>
                <div className="space-y-1">
                  <h3
                    className="text-lg md:text-xl leading-tight group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground pt-2">
                    <span>{book.year}</span>
                    <span>•</span>
                    <span>{book.type}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-xl text-muted-foreground mb-6">
              No se encontraron publicaciones con los filtros seleccionados.
            </p>
            <button
              onClick={clearFilters}
              className="inline-block px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const books = [
  {
    id: "nunca-tuve-un-titulo",
    title: "Nunca tuve un título",
    author: "Ruido Visual",
    year: "2025",
    type: "Fanzine",
    cover: "/images/library/nunca-tuve.png",
    pdf: "/pdfs/nunca-tuve.pdf",
  },
  {
    id: "croissant-tete",
    title: "Croissant/Teté con Pan",
    author: "Ale Canclini",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/croissant-tete.png",
    pdf: "/pdfs/croissant-tete.pdf",
  },
  {
    id: "atajame-un-ratito",
    title: "Atajame un ratito esta desaparición",
    author: "Miel",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/atajame-un-ratito.png",
    pdf: "/pdfs/atajame-un-ratito.pdf",
  },
  {
    id: "el-bulbo-raquideo",
    title: "El bulbo raquídeo está indefinido en intelección",
    author: "Andrés Cañete",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/el-bulbo-raquideo.png",
    pdf: "/pdfs/el-bulbo-raquideo.pdf",
  },
  {
    id: "1989",
    title: "1989",
    author: "Amigues ruidoses",
    year: "2025",
    type: "Cómic",
    cover: "/images/library/amigues/1989.png",
    pdf: "/pdfs/amigues/1989.pdf",
  },
  {
    id: "aracnida",
    title: "Arácnida",
    author: "Ara Franco",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/aracnida.png",
    pdf: "/pdfs/amigues/aracnida.pdf",
  },
  {
    id: "consuelo-querido",
    title: "Consuelo, querido.",
    author: "Lucas Vega",
    year: "2026",
    type: "Poesía",
    cover: "/images/library/amigues/consuelo-querido.png",
    pdf: "/pdfs/amigues/consuelo-querido.pdf",
  },
  {
    id: "decadance",
    title: "Decadance",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Fanzine",
    cover: "/images/library/amigues/decadance.png",
    pdf: "/pdfs/amigues/decadance.pdf",
  },
  {
    id: "el-ultimo-tren",
    title: "El último Areguá",
    author: "Ara Franco",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/el-ultimo-tren.png",
    pdf: "/pdfs/amigues/el-ultimo-tren.pdf",
  },
  {
    id: "esculturas-retoricas",
    title: "Esculturas retóricas",
    author: "Andrés Cañete",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/esculturas-retoricas.png",
    pdf: "/pdfs/amigues/esculturas-retoricas.pdf",
  },
  {
    id: "jalea-real",
    title: "Jalea Real",
    author: "Luiz Brizuela",
    year: "2024",
    type: "Poesía",
    cover: "/images/library/amigues/jalea-real.png",
    pdf: "/pdfs/amigues/jalea-real.pdf",
  },
  {
    id: "kotydiano",
    title: "Kotydiano",
    author: "Ara Franco",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/kotydiano.png",
    pdf: "/pdfs/amigues/kotydiano.pdf",
  },
  {
    id: "la-domesticacion",
    title: "La domesticación de los objetos salvajes",
    author: "Luiz Brizuela",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/la-domesticacion.png",
    pdf: "/pdfs/amigues/la-domesticacion.pdf",
  },
  {
    id: "lineas-de-expresion",
    title: "Líneas de expresión y otros fractales",
    author: "Luiz Brizuela",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/lineas-de-expresion.png",
    pdf: "/pdfs/amigues/lineas-de-expresion.pdf",
  },
  {
    id: "memorias-del-planeta",
    title: "Memorias del planeta extraño",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/memorias-del-planeta.png",
    pdf: "/pdfs/amigues/memorias-del-planeta.pdf",
  },
  {
    id: "plegaria-para-palestina",
    title: "Plegaria para Palestina",
    author: "Miguel Gil Castro",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/plegaria-para-palestina.png",
    pdf: "/pdfs/amigues/plegaria-para-palestina.pdf",
  },
  {
    id: "piririta",
    title: "Piririta - Antología Comunista Paraguaya",
    author: "Amigues ruidoses",
    year: "2024",
    type: "Poesía",
    cover: "/images/library/amigues/piririta.png",
    pdf: "/pdfs/amigues/piririta.pdf",
  },
  {
    id: "tamucode",
    title: "Tamucode - Crónicas de un Genocidio",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Cómic",
    cover: "/images/library/amigues/tamucode.png",
    pdf: "/pdfs/amigues/tamucode.pdf",
  },
  {
    id: "un-tajo",
    title: "Un tajo bastará",
    author: "Lucas Vega",
    year: "2026",
    type: "Poesía",
    cover: "/images/library/amigues/un-tajo.png",
    pdf: "/pdfs/amigues/un-tajo.pdf",
  },
  {
    id: "veo-el-volcan",
    title: "Veo el volcán que siempre se aleja",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Poesía",
    cover: "/images/library/amigues/veo-el-volcan.png",
    pdf: "/pdfs/amigues/veo-el-volcan.pdf",
  },
];