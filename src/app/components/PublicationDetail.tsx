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
              <a
                href={publication.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Leer / Descargar
              </a>
            </div>
          </div>
        </div>

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
    id: "el-bulbo-raquideo",
    title: "El bulbo raquídeo está indefinido en intelección",
    author: "Andrés Cañete",
    year: "202",
    type: "Poesía",
    collection: "Ruido Visual",
    cover: "/images/library/el-bulbo-raquideo.png",
    pdf: "/pdfs/el-bulbo-raquideo.pdf",
    description:
      "Un viaje a través de la búsqueda de la voz poética entre una infinidad de delirios, entre la realidad y el plano metafísico. Una visión absoluta y aterrizada en el plano concreto, representado en espacios urbanos como el parque Carlos Antonio López y la Facultad de Filosofía en Sajonia.",
    excerpt: [
      "",
    ],
  },
  {
    id: "croissant-tete",
    title: "Croissant/Teté con Pan",
    author: "Ale Canclini",
    year: "2025",
    type: "Poesía",
    collection: "Ruido Visual",
    cover: "/images/library/croissant-tete.png",
    pdf: "/pdfs/croissant-tete.pdf",
    description:
      "«Mi problema no es económico, es estructural y sistémico», a veces croissant, otras teté con pan. En nuestra contradictoria realidad, danzan dialécticos conceptos: el orden y el caos. Entre el quehacer y el trabajo, en medio de la elaboración y el cumplimiento de la lista de pendientes, sobrevive la poesía.",
    excerpt: [
      "",
    ],
  },
  {
    id: "atajame-un-ratito",
    title: "Atajame un ratito esta desaparición",
    author: "Miel",
    year: "2025",
    type: "Poesía",
    collection: "Ruido Visual",
    cover: "/images/library/atajame-un-ratito.png",
    pdf: "/pdfs/atajame-un-ratito.pdf",
    description:
      "Entre retratos de las sutiles y mágicas cotidianidades (la mística de las masitas, los graffitis furiosos, el extenso repertorio de valsecitos peruanos), el poemario, poema, verso de la hija del asfalto sobreviene al temor de que todo desaparezca.",
    excerpt: [
      "",
    ],
  },
  {
    id: "nunca-tuve-un-titulo",
    title: "Nunca tuve un título",
    author: "Ruido Visual",
    year: "2025",
    type: "Poesía",
    collection: "Ruido Visual",
    cover: "/images/library/nunca-tuve.png",
    pdf: "/pdfs/nunca-tuve.pdf",
    description:
      "Bajo la consigna de la ausencia surgen varios poemas. La palabra sirve para nombrar aquello que nunca tuvimos. La palabra, en el mejor de los casos, es lo que todavía nos queda, y lo que siempre tuvimos.",
    excerpt: [
      "",
    ],
  },
  {
    id: "1989",
    title: "1989",
    author: "Amigues ruidoses",
    year: "2025",
    type: "Cómic",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/1989.png",
    pdf: "/pdfs/amigues/1989.pdf",
    description:
      "Cómic de ficción histórica que muestra el viaje de introspección de Arami Romero, que le ayudará a entender tanto su pasado como el de la sociedad que la rodea. Ella, periodista, a través de sus investigaciones, descubre las historias de desaparecidos del Plan Cóndor, para revelar la atmósfera de terrorismo de Estado que envolvía a países como Paraguay, Argentina, Uruguay y otros en Latinoamérica. Las diferentes historias convergen en una serie de revelaciones sobre el impacto de crecer en sociedades que aún no han podido sanar su pasado reciente.",
    excerpt: [
      "",
    ],
  },
  {
    id: "aracnida",
    title: "Arácnida",
    author: "Ara Franco",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/aracnida.png",
    pdf: "/pdfs/amigues/aracnida.pdf",
    description:
      "La poesía se desarrolla en un plano bidimensional: la realidad se reinterpreta para hacerse símbolo; el símbolo, asimismo, se construye para entretejer nuevas realidades.",
    excerpt: [
      "",
    ],
  },
  {
    id: "consuelo-querido",
    title: "Consuelo, querido.",
    author: "Lucas Vega",
    year: "2026",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/consuelo-querido.png",
    pdf: "/pdfs/amigues/consuelo-querido.pdf",
    description:
      "Un poemario sobre la intimidad expuesta, la ternura insistente y el miedo a perder aquello que nos constituye. Un intento de consuelo. Guardar mensajes, amistades, cuerpos y domingos como quien guarda pruebas de haber sentido algo. Escribir es insistir, recordar, exponerse.",
    excerpt: [
      "",
    ],
  },
  {
    id: "decadance",
    title: "Decadance",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Fanzine",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/decadance.png",
    pdf: "/pdfs/amigues/decadance.pdf",
    description:
      "Las distintas tipografías, el género periodístico y los diversos géneros literarios danzan en este contrapunto de clases sociales, una realidad en decadencia con escenario en Paraguay. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "el-ultimo-tren",
    title: "El último Areguá",
    author: "Ara Franco",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/el-ultimo-tren.png",
    pdf: "/pdfs/amigues/el-ultimo-tren.pdf",
    description:
      "¿Qué es el tiempo? Esta y otras preguntas surgen en lo cotidiano, en el ir y venir en colectivo. Entre el cansancio del trabajo, las miradas extrañas, los amores pasajeros, se vislumbran posibles respuestas. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "esculturas-retoricas",
    title: "Esculturas retóricas",
    author: "Andrés Cañete",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/esculturas-retoricas.png",
    pdf: "/pdfs/amigues/esculturas-retoricas.pdf",
    description:
      "La contemporaneidad es versificada desde la reinterpretación de la tradición poética (Marina Tsvietáieva, Walter Scott, Nicolás Guillén, César Vallejo, Dylan Thomas, William Faulkner, Sor Juana, Arthur Rimbaud, Walt Whitman y un largo etcétera). De esta reinterpretación surgen nuevos versos, nuevas preguntas y respuestas. Versos bolañescos y baudelarianos construyen una nueva arte poética nacida en las meditaciones de lo urbano. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "jalea-real",
    title: "Jalea Real",
    author: "Luiz Brizuela",
    year: "2024",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/jalea-real.png",
    pdf: "/pdfs/amigues/jalea-real.pdf",
    description:
      "Elementos formales de la naturaleza, así como datos científicos, son llevados a un análisis concreto de la realidad extrapolado a la poesía. Son las abejas obreras las que lo producen todo, somos los trabajadores los que lo producimos todo, y nuestras historias están fotografiadas en estos poemas. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "kotydiano",
    title: "Kotydiano",
    author: "Ara Franco",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/kotydiano.png",
    pdf: "/pdfs/amigues/kotydiano.pdf",
    description:
      "Suma de los términos 'cotidiano' y 'koty' (guaraní. pieza, habitación), complementación entre lo que nace desde lo íntimo para ser expuesto hacia afuera. La poesía es incontenible y busca escaparse de lo secreto, busca expandirse.",
    excerpt: [
      "",
    ],
  },
  {
    id: "la-domesticacion",
    title: "La domesticación de los objetos salvajes",
    author: "Luiz Brizuela",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/la-domesticacion.png",
    pdf: "/pdfs/amigues/la-domesticacion.pdf",
    description:
      "«Los objetos salvajes deambulan hambrientos de nostalgia humana», allí asiste el ojo clínico, el ojo quirúrgico, para dar un nuevo nombre y una nueva descripción de lo existente, para traducir los objetos a la lengua de la poesía. «Posar la mirada es existir».",
    excerpt: [
      "",
    ],
  },
  {
    id: "lineas-de-expresion",
    title: "Líneas de expresión y otros fractales",
    author: "Luiz Brizuela",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/lineas-de-expresion.png",
    pdf: "/pdfs/amigues/lineas-de-expresion.pdf",
    description:
      "Contraposición o, más bien, contrapunto entre fotografía y poesía, entre la rigidez y premeditación de las estructuras métricas y los versos extendidos en libertad. Paisajes de la triple frontera Paraguay-Brasil-Argentina conversan con textos que diseccionan y analizan poéticamente la experiencia humana en sus diversas aristas. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "memorias-del-planeta",
    title: "Memorias del planeta extraño",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/memorias-del-planeta.png",
    pdf: "/pdfs/amigues/memorias-del-planeta.pdf",
    description:
      "Memorias del Planeta Extraño reúne poesía y narrativa para dar voz al Universo, la humanidad, y en medio de ellos, al individuo que se debate entre la voluntad y la naturaleza implacable. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "plegaria-para-palestina",
    title: "Plegaria para Palestina",
    author: "Miguel Gil Castro",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/plegaria-para-palestina.png",
    pdf: "/pdfs/amigues/plegaria-para-palestina.pdf",
    description:
      "Desde Lima hasta Asunción, en toda Abya Yala, en Asia Occidental (mal llamada “Medio Oriente”), en todo el sur, nos une una misma plegaria. ¡Palestina libre, desde el río hasta el mar!",
    excerpt: [
      "",
    ],
  },
  {
    id: "piririta",
    title: "Piririta - Antología Comunista Paraguaya",
    author: "Amigues ruidoses",
    year: "2024",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/piririta.png",
    pdf: "/pdfs/amigues/piririta.pdf",
    description:
      "Una conversación colectiva a través de la creación poética. La antología se concreta como la confección oficial de esa conversación, la puesta en escena de textos poéticos y políticos que hablan entre sí permanentemente y que confrontan la idea de la individualidad abstraída de lo colectivo. ",
    excerpt: [
      "",
    ],
  },
  {
    id: "tamucode",
    title: "Tamucode - Crónicas de un Genocidio",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Cómic",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/tamucode.png",
    pdf: "/pdfs/amigues/tamucode.pdf",
    description:
      "Este cómic de no ficción muestra cómo las diferentes instituciones del Estado paraguayo no tienen en cuenta la existencia de los grupos de Ayoreo en aislamiento al tiempo de legalizar la transformación del ecosistema chaqueño. Fue distinguido con el Premio Fundación Itaú de Periodismo Cultural 2025 otorgado en el marco del Roa Bastos Fest de El Otro País.",
    excerpt: [
      "",
    ],
  },
  {
    id: "un-tajo",
    title: "Un tajo bastará",
    author: "Lucas Vega",
    year: "2026",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/un-tajo.png",
    pdf: "/pdfs/amigues/un-tajo.pdf",
    description:
      "El cuerpo congestionado de poesía y cansancio se reconoce en la fragilidad. Del corte y la punción emanan los versos y el dolor. ¿Bastará la escritura para lograr la descongestión?",
    excerpt: [
      "",
    ],
  },
  {
    id: "veo-el-volcan",
    title: "Veo el volcán que siempre se aleja",
    author: "Norma Flores Allende",
    year: "2025",
    type: "Poesía",
    collection: "Amigues ruidoses",
    cover: "/images/library/amigues/veo-el-volcan.png",
    pdf: "/pdfs/amigues/veo-el-volcan.pdf",
    description:
      "Un poemario para ejercitar la memoria, reflexionar en qué mundo hemos nacido, recuperar la historia, lo que es urgente en un país como Paraguay, donde no existió un profundo proceso de Juicio y Castigo a los torturadores y saqueadores de la tiranía stronista.",
    excerpt: [
      "",
    ],
  },
];