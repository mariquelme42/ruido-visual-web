import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Library } from "./components/Library";
import { PublicationDetail } from "./components/PublicationDetail";
import { Gallery } from "./components/Gallery";
import { Calls } from "./components/Calls";
import { NotFound } from "./components/NotFound";
import { ComingSoon } from "./components/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // 👇 NUEVO: página principal del dominio
      { index: true, Component: ComingSoon },

      // 👇 NUEVO: acceso a Ruido Visual
      { path: "ruido-visual", Component: Home },

      // 👇 TODO LO DEMÁS IGUAL
      { path: "acerca", Component: About },
      { path: "biblioteca", Component: Library },
      { path: "biblioteca/:id", Component: PublicationDetail },
      { path: "galeria", Component: Gallery },
      { path: "convocatorias", Component: Calls },
      { path: "*", Component: NotFound },
    ],
  },
]);
