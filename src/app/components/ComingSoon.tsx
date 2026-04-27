export function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-xl">

        <h1
          className="text-3xl md:text-5xl mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Colectivo Asunción Flores
        </h1>

        <p className="text-sm md:text-base text-muted-foreground mb-8">
          Sitio en construcción. Próximamente.
        </p>

        <a
          href="/ruido-visual"
          className="text-xs uppercase tracking-widest border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition"
        >
          Entrar a Ruido Visual
        </a>

      </div>
    </div>
  );
}