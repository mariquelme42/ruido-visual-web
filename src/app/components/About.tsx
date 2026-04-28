import { motion } from "motion/react";
import { Heart, Users, BookHeart, Sparkles } from "lucide-react";

export function About() {
  return (
    <div className="px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Acerca de
            <br />
            <span className="italic">Ruido Visual</span>
          </h1>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {/* What is Ruido Visual */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                 Somos una red editorial colectiva, independiente y autogestionada.
              </p>
              <p className="text-muted-foreground">
                Ruido visual es un espacio de creación compartida, apoyo mutuo y publicación colectiva, que busca abrir caminos para escritoras y escritores contemporáneos de Paraguay que no encuentran espacio en estructuras editoriales tradicionales.
              </p>
              <p className="text-muted-foreground">
                Este es un archivo de voces, un espacio de memoria y un lugar para obras
                futuras. Es un laboratorio donde convergen la experimentación literaria, la amistad
                creativa y el compromiso artístico.
              </p>
            </div>
          </motion.section>

          {/* Quote Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 px-8 md:px-16 bg-foreground text-background"
          >
            <blockquote
              className="text-3xl md:text-4xl leading-relaxed"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Nuestro proceso editorial es colaborativo, horizontal y sostenido por la confianza,
              la amistad y el compromiso artístico.
            </blockquote>
          </motion.section>

          {/* Principles Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl mb-12 tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Nuestros principios
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl mb-3"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t-2 border-foreground pt-16"
          >
            <h2
              className="text-3xl md:text-4xl mb-8 tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Filosofía editorial
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Creemos en la literatura como acto político, como forma de resistencia, como
                construcción de memorias alternativas. Cada publicación es el resultado de un
                diálogo colectivo, donde todas las voces tienen el mismo peso.
              </p>
              <p className="text-muted-foreground">
                No buscamos el éxito comercial ni la validación de las instituciones
                tradicionales. Buscamos crear espacios donde la palabra sea una forma de habitar el mundo juntos.
              </p>
            </div>
          </motion.section>

          {/* Vision Quote */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-16 text-center"
          >
            <blockquote
              className="text-3xl md:text-5xl leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Un espacio donde la palabra se convierte en acto de resistencia, donde la escritura
              es una forma de habitar el mundo juntos.
            </blockquote>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-2 border-foreground p-12 md:p-16 text-center"
          >
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Sumate a nuestra red
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Si te identificás con nuestra visión y querés formar parte de este proyecto
              colectivo, escribinos.
            </p>
            <a
              href="mailto:contacto@ruidovisual.org"
              className="inline-block px-10 py-5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-lg"
            >
              Contacto
            </a>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

const principles = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Colaboración",
    description:
      "Trabajamos juntos, sin jerarquías. Cada proyecto es un esfuerzo compartido donde las decisiones se toman colectivamente.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Respeto",
    description:
      "Valoramos cada voz, cada historia, cada perspectiva. El respeto mutuo es la base de nuestra comunidad editorial.",
  },
  {
    icon: <BookHeart className="w-6 h-6" />,
    title: "Creación colectiva",
    description:
      "Creemos en la potencia de crear juntos. Los textos se enriquecen en el diálogo, en la edición compartida, en la construcción común.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Libertad de expresión",
    description:
      "Defendemos el derecho a la expresión libre, a la experimentación formal, a la exploración temática sin límites comerciales.",
  },
];