import { useEffect } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl font-serif tracking-wide">Ruido Visual</div>

        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>

        <p className="text-sm text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}