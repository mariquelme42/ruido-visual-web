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
    id: "voces-del-silencio",
    title: "Voces del silencio",
    author: "María Rodríguez",
    year: "2025",
    type: "Poesía",
    cover:
      "https://images.unsplash.com/photo-1650513973625-2abc0854814c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3MlMjBsaWJyYXJ5JTIwYXJjaGl2ZXxlbnwxfHx8fDE3NzI5MTA4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "fragmentos-urbanos",
    title: "Fragmentos urbanos",
    author: "Carlos Mendoza",
    year: "2025",
    type: "Narrativa",
    cover:
      "https://images.unsplash.com/photo-1617380607001-2797ed957a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwcGFwZXIlMjBlZGl0b3JpYWwlMjBvYmplY3RzfGVufDF8fHx8MTc3MjkxMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "memoria-liquida",
    title: "Memoria líquida",
    author: "Ana López",
    year: "2024",
    type: "Ensayo",
    cover:
      "https://images.unsplash.com/photo-1713257510109-4cbfec05ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5hdHVyZSUyMG1pbmltYWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjkxMDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "cartografia-intima",
    title: "Cartografía íntima",
    author: "Laura Jiménez",
    year: "2024",
    type: "Poesía",
    cover:
      "https://images.unsplash.com/photo-1619320669563-92aeccfc4d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBwcmludGVkJTIwY2FyZHMlMjBwb2V0cnl8ZW58MXx8fHwxNzcyOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "territorios-rotos",
    title: "Territorios rotos",
    author: "Jorge Sánchez",
    year: "2024",
    type: "Narrativa",
    cover:
      "https://images.unsplash.com/photo-1624954045119-097484c3db42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBwaG90b2dyYXBoeSUyMG5hdHVyZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "resonancias",
    title: "Resonancias",
    author: "Patricia Vega",
    year: "2023",
    type: "Poesía",
    cover:
      "https://images.unsplash.com/photo-1738441639602-f6f2ff69a814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjB3b3Jrc3BhY2UlMjB3cml0aW5nJTIwZGVza3xlbnwxfHx8fDE3NzI5MTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "tiempo-suspendido",
    title: "Tiempo suspendido",
    author: "Roberto Martínez",
    year: "2023",
    type: "Ensayo",
    cover:
      "https://images.unsplash.com/photo-1681684563154-798e01d10fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwY29udGVtcG9yYXJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NzI5MTA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "palabras-migrantes",
    title: "Palabras migrantes",
    author: "Carmen Ruiz",
    year: "2023",
    type: "Narrativa",
    cover:
      "https://images.unsplash.com/photo-1598738865218-7809c17181c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmclMjBwb2V0cnl8ZW58MXx8fHwxNzcyOTEwODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];