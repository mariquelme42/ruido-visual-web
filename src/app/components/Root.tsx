import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LoadingScreen } from "./LoadingScreen";
import { ScrollToTop } from "./ScrollToTop";

export function Root() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if we've already shown the loading screen
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    return !hasLoaded;
  });

  useEffect(() => {
    if (!isLoading) {
      sessionStorage.setItem("hasLoadedBefore", "true");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
