import { useParams, Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, BookOpen, ArrowLeft } from "lucide-react";

export function PublicationDetail() {
  const { id } = useParams();
  const publication = publications.find((p) => p.id === id);

  if (!publication) {
    return (
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl mb-4">Publicación no encontrada</h1>
          <Link to="/biblioteca" className="text-primary hover:underline">
            Volver a la biblioteca
          </Link>
        </div>
      </div>
    );
  }

  const relatedPublications = publications
    .filter((p) => p.id !== id && (p.author === publication.author || p.type === publication.type))
    .slice(0, 3);

  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/biblioteca"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la biblioteca
        </Link>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Cover */}
          <div className="aspect-[3/4] bg-muted overflow-hidden">
            <ImageWithFallback
              src={publication.cover}
              alt={publication.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                {publication.title}
              </h1>
              <p className="text-xl text-muted-foreground">{publication.author}</p>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">Año:</span> {publication.year}
              </p>
              <p>
                <span className="text-muted-foreground">Tipo:</span> {publication.type}
              </p>
              <p>
                <span className="text-muted-foreground">Colección:</span> {publication.collection}
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <h2 className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Descripción
              </h2>
              <p className="text-muted-foreground leading-relaxed">{publication.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <BookOpen className="w-4 h-4" />
                Leer en línea
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary/50 transition-colors">
                <Download className="w-4 h-4" />
                Descargar PDF
              </button>
            </div>
          </div>
        </div>

        {/* Reading Section */}
        <section className="max-w-3xl mx-auto mb-16 py-12 border-t border-border">
          <h2 className="text-2xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
            Fragmento
          </h2>
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
            {publication.excerpt.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Related Publications */}
        {relatedPublications.length > 0 && (
          <section className="py-12 border-t border-border">
            <h2 className="text-2xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              Publicaciones relacionadas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPublications.map((book) => (
                <Link key={book.id} to={`/biblioteca/${book.id}`} className="group">
                  <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden">
                    <ImageWithFallback
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                  <p className="text-sm text-muted-foreground">{book.year}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

const publications = [
  {
    id: "voces-del-silencio",
    title: "Voces del silencio",
    author: "María Rodríguez",
    year: "2025",
    type: "Poesía",
    collection: "Resonancias Urbanas",
    cover:
      "https://images.unsplash.com/photo-1650513973625-2abc0854814c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3MlMjBsaWJyYXJ5JTIwYXJjaGl2ZXxlbnwxfHx8fDE3NzI5MTA4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Una exploración poética del silencio urbano, de las voces que habitan los espacios vacíos de la ciudad. Este libro es un mapa de ausencias, un registro de lo que permanece cuando todo ha terminado.",
    excerpt: [
      "El silencio tiene voces propias. Hablan en las esquinas vacías, en los parques al amanecer, en las calles que el olvido ha reclamado como suyas.",
      "He aprendido a escuchar lo que no se dice, a leer los gestos que quedan suspendidos en el aire como preguntas sin respuesta.",
      "La ciudad es un palimpsesto de silencios. Cada capa oculta historias que esperan ser descubiertas, voces que se niegan a desaparecer completamente.",
    ],
  },
  {
    id: "fragmentos-urbanos",
    title: "Fragmentos urbanos",
    author: "Carlos Mendoza",
    year: "2025",
    type: "Narrativa",
    collection: "Territorios",
    cover:
      "https://images.unsplash.com/photo-1617380607001-2797ed957a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwcGFwZXIlMjBlZGl0b3JpYWwlMjBvYmplY3RzfGVufDF8fHx8MTc3MjkxMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Relatos breves que capturan momentos fugaces de la vida urbana contemporánea. Una colección de fragmentos que, juntos, forman un retrato colectivo de nuestro tiempo.",
    excerpt: [
      "La ciudad se construye en fragmentos. Nadie la conoce completa. Cada quien habita su propia versión, su propio recorrido, su mapa personal de calles y memorias.",
      "En el metro, los cuerpos se tocan sin mirarse. Es una coreografía involuntaria, un ballet de desconocidos que comparten espacio pero nunca historia.",
      "Me pregunto cuántas versiones de esta ciudad existen. Tantas como habitantes, supongo. Y todas son reales, todas son verdaderas.",
    ],
  },
  {
    id: "memoria-liquida",
    title: "Memoria líquida",
    author: "Ana López",
    year: "2024",
    type: "Ensayo",
    collection: "Pensamientos",
    cover:
      "https://images.unsplash.com/photo-1713257510109-4cbfec05ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5hdHVyZSUyMG1pbmltYWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjkxMDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Un ensayo sobre la naturaleza fluida de la memoria en la era digital. ¿Qué significa recordar cuando todo está disponible pero nada permanece?",
    excerpt: [
      "La memoria ya no es sólida. Se ha vuelto líquida, fluida, adaptable. Se transforma con cada evocación, se reconstruye en cada acto de recordar.",
      "Vivimos en la paradoja de tener acceso a toda la información y al mismo tiempo olvidar más rápido que nunca. Los archivos digitales prometen permanencia, pero la atención se ha vuelto efímera.",
      "¿Qué recordaremos de este tiempo? No lo que guardamos, sino lo que sentimos. La memoria emocional resiste donde la información se disuelve.",
    ],
  },
  {
    id: "cartografia-intima",
    title: "Cartografía íntima",
    author: "Laura Jiménez",
    year: "2024",
    type: "Poesía",
    collection: "Resonancias Urbanas",
    cover:
      "https://images.unsplash.com/photo-1619320669563-92aeccfc4d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBwcmludGVkJTIwY2FyZHMlMjBwb2V0cnl8ZW58MXx8fHwxNzcyOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Poemas que trazan mapas del territorio emocional. Cada texto es una coordenada en el paisaje del afecto, el deseo y la pérdida.",
    excerpt: [
      "Trazar mapas del cuerpo es una forma de habitar el mundo. Cada marca, cada cicatriz, es una ruta que conduce a algún lugar del pasado.",
      "Hay geografías que solo existen en la memoria. Lugares que habitamos juntos y que desaparecieron cuando nos separamos.",
      "El mapa íntimo no sigue las reglas de la cartografía convencional. Aquí, las distancias se miden en latidos, en suspiros, en palabras no dichas.",
    ],
  },
  {
    id: "territorios-rotos",
    title: "Territorios rotos",
    author: "Jorge Sánchez",
    year: "2024",
    type: "Narrativa",
    collection: "Territorios",
    cover:
      "https://images.unsplash.com/photo-1624954045119-097484c3db42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBwaG90b2dyYXBoeSUyMG5hdHVyZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyOTEwODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Historias de desplazamiento, migración y pertenencia. Narrativas que exploran qué significa habitar un territorio que ya no te reconoce.",
    excerpt: [
      "El territorio roto no se repara con mapas nuevos. La fractura permanece, visible o invisible, recordándonos que algo se perdió en el camino.",
      "Cruzar la frontera no es solo un acto físico. Es dejar atrás una versión de ti mismo y no saber quién serás del otro lado.",
      "Los territorios rotos generan nuevas formas de habitar el mundo. En las grietas crecen otras posibilidades, otras formas de ser.",
    ],
  },
  {
    id: "resonancias",
    title: "Resonancias",
    author: "Patricia Vega",
    year: "2023",
    type: "Poesía",
    collection: "Resonancias Urbanas",
    cover:
      "https://images.unsplash.com/photo-1738441639602-f6f2ff69a814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjB3b3Jrc3BhY2UlMjB3cml0aW5nJTIwZGVza3xlbnwxfHx8fDE3NzI5MTA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Poesía que explora las resonancias entre el sonido y el silencio, entre la palabra dicha y la que permanece suspendida.",
    excerpt: [
      "Las palabras resuenan mucho después de ser pronunciadas. Vibran en el aire, en la memoria, en el espacio entre nosotros.",
      "Hay silencios que hablan más fuerte que cualquier discurso. Son resonancias invertidas, ecos de lo que nunca se dijo.",
      "Escribir es crear resonancias. Palabras que vibran juntas, que se responden unas a otras a través del tiempo y el espacio.",
    ],
  },
  {
    id: "tiempo-suspendido",
    title: "Tiempo suspendido",
    author: "Roberto Martínez",
    year: "2023",
    type: "Ensayo",
    collection: "Pensamientos",
    cover:
      "https://images.unsplash.com/photo-1681684563154-798e01d10fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwY29udGVtcG9yYXJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NzI5MTA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Reflexiones sobre la experiencia del tiempo en momentos de crisis. ¿Qué ocurre cuando el tiempo se detiene y todo parece suspendido?",
    excerpt: [
      "El tiempo suspendido no es la ausencia de tiempo. Es otra temporalidad, una forma diferente de experimentar el presente.",
      "En la suspensión, todo se vuelve posible y nada se concreta. Vivimos en el umbral, en el espacio entre lo que fue y lo que podría ser.",
      "Aprendimos a habitar el tiempo suspendido. Ya no esperamos que las cosas vuelvan a la normalidad. Esta es la nueva forma de estar en el mundo.",
    ],
  },
  {
    id: "palabras-migrantes",
    title: "Palabras migrantes",
    author: "Carmen Ruiz",
    year: "2023",
    type: "Narrativa",
    collection: "Territorios",
    cover:
      "https://images.unsplash.com/photo-1598738865218-7809c17181c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmclMjBwb2V0cnl8ZW58MXx8fHwxNzcyOTEwODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Historias de personas cuyas vidas están definidas por el movimiento, por la imposibilidad de permanecer. Palabras que viajan con ellas.",
    excerpt: [
      "Las palabras también migran. Cruzan fronteras, cambian de significado, se adaptan a nuevos contextos. Como nosotros.",
      "Hay palabras que solo existen en ciertos lugares. Cuando te vas, las llevas contigo, pero suenan diferente en otros oídos.",
      "Ser migrante es habitar varios idiomas a la vez. No solo lenguas diferentes, sino formas distintas de nombrar el mundo.",
    ],
  },
];
