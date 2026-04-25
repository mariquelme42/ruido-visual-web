import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="px-6 md:px-12 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          404
        </h1>
        <p className="text-2xl mb-8 text-muted-foreground">
          Página no encontrada
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La página que buscas no existe o ha sido movida. Como un texto perdido en el archivo, ha desaparecido en el silencio digital.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
