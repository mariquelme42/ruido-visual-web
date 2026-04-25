import { useState } from "react";
import { Download } from "lucide-react";

export function Calls() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
  };

  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
          Convocatorias
        </h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Invitamos a escritoras, escritores y artistas a participar en nuestros proyectos editoriales colaborativos. Todas nuestras convocatorias son abiertas, horizontales y sin fines de lucro.
        </p>

        {/* Active Calls */}
        <div className="space-y-12 mb-16">
          {activeCalls.map((call) => (
            <div key={call.id} className="border border-border p-8 bg-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {call.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fecha límite: {call.deadline}
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm">
                  Abierta
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <p className="leading-relaxed text-muted-foreground">{call.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="font-medium">Buscamos:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {call.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">Condiciones:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {call.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="#"
                  download
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Descargar bases completas (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form - Únete a nuestra red */}
        <div className="border border-border p-8 bg-card">
          <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Únete a nuestra red
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Si te identificas con nuestra visión y quieres formar parte de este proyecto colectivo, escríbenos. Responderemos a tu mensaje en un plazo máximo de 2 semanas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Cuéntanos sobre ti y tu interés en Ruido Visual *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Cuéntanos sobre tu práctica artística, tus intereses y por qué quieres unirte a Ruido Visual..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Enviar mensaje
              </button>
            </div>

            <p className="text-sm text-muted-foreground">
              * Campos obligatorios. Al enviar tu mensaje, aceptas que sea revisado por el colectivo editorial de Ruido Visual.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-2">¿Tienes dudas sobre las convocatorias?</p>
          <a
            href="mailto:convocatorias@ruidovisual.org"
            className="text-primary hover:underline"
          >
            convocatorias@ruidovisual.org
          </a>
        </div>
      </div>
    </div>
  );
}

const activeCalls = [
  {
    id: "convocatoria-publicacion-abierta",
    title: "Convocatoria de Publicación Abierta",
    deadline: "Abierta todo el año",
    description:
      "Ruido Visual es una editorial independiente, colectiva y autogestionada que surge en el contexto de pocas oportunidades para la difusión de literatura paraguaya. Tomamos el compromiso de intentar publicar al menos un material cada año que no provenga de los integrantes de la editorial, en nuestro esfuerzo por difundir obras contemporáneas de Paraguay.",
    requirements: [
      "Obras literarias de autoras y autores contemporáneos de Paraguay",
      "Textos que respondan a un formato económico de publicación",
      "Disposición a trabajar en proceso editorial colaborativo",
      "Compromiso con la difusión del arte y la literatura paraguaya",
    ],
    conditions: [
      "Publicación de una tirada entre 50 y 70 ejemplares",
      "Costo de venta entre 30.000 y 70.000 guaraníes",
      "Impresión mayormente en blanco y negro (algunas impresiones a color según presupuesto)",
      "Libro presillado, sin solapas, con portadas y contraportadas de cartulinas",
      "Sin registro ISBN de momento",
      "60% de lo recaudado destinado a la editorial para sostener el proyecto",
      "40% de lo recaudado para la autora o el autor, una vez cubierto el 60% de la editorial",
      "5 ejemplares extra divididos entre la autora/autor y el archivo de Ruido Visual",
      "Al menos dos reuniones entre autora/autor y editorial previo al inicio del proceso",
      "La editorial se encarga de ilustrar, diagramar, materializar y presentar la obra",
      "Comunicación constante con la autora/autor para decisiones importantes",
    ],
  },
];