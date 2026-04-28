type DonationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  if (!isOpen) return null;

  const subject = encodeURIComponent("Comprobante de donación");
  const body = encodeURIComponent(
    "Hola, adjunto el comprobante de mi donación a Ruido Visual."
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-background text-foreground border border-foreground/20 px-6 py-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-lg leading-none text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="space-y-7">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Donación
            </p>

            <h2 className="text-xl font-normal tracking-tight">
              Apoyar a Ruido Visual
            </h2>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between gap-6 border-b border-foreground/10 pb-3">
              <span className="text-muted-foreground">Entidad</span>
              <span className="text-right">Eko</span>
            </div>

            <div className="flex justify-between gap-6 border-b border-foreground/10 pb-3">
              <span className="text-muted-foreground">Titular</span>
              <span className="text-right">
                Miriam Alejandra Canclini Gonzalez
              </span>
            </div>

            <div className="flex justify-between gap-6 border-b border-foreground/10 pb-3">
              <span className="text-muted-foreground">Cédula</span>
              <span className="text-right">4928746</span>
            </div>

            <div className="flex justify-between gap-6 border-b border-foreground/10 pb-3">
              <span className="text-muted-foreground">Cuenta</span>
              <span className="text-right tracking-wide">814590293</span>
            </div>
          </div>

          <a
            href={`mailto:ruidovisual25@gmail.com?subject=${subject}&body=${body}`}
            className="inline-flex w-full items-center justify-center border border-foreground px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Envianos tu comprobante acá
          </a>

          <p className="text-[11px] leading-relaxed text-muted-foreground text-center">
           ♥ gracias ♥
          </p>
        </div>
      </div>
    </div>
  );
}