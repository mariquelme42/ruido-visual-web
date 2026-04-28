import { useEffect } from "react";
export function ComingSoon() {
    useEffect(() => {
    document.title = "Colectivo Asunción Flores";

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon-colectivo.png";
    }
  }, []);
  return (
    <main className="min-h-screen flex flex-col justify-between bg-background text-foreground px-6 py-10">
      
      {/* TOP */}
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Un espacio en proceso...
      </div>

      {/* CENTRO */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
        
        <h1
          className="text-4xl md:text-6xl leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Colectivo Asunción Flores
        </h1>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Estamos construyendo un sitio de creación colectiva.
        </p>

        <a
          href="/ruido-visual"
          className="mt-4 inline-block border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300 text-sm tracking-wide"
        >
          Entrar a Ruido Visual
        </a>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-muted-foreground tracking-wide">
        Asunción · Paraguay
      </div>
    </main>
  );
}