import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Library } from "./components/Library";
import { PublicationDetail } from "./components/PublicationDetail";
import { Gallery } from "./components/Gallery";
import { Calls } from "./components/Calls";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "acerca", Component: About },
      { path: "biblioteca", Component: Library },
      { path: "biblioteca/:id", Component: PublicationDetail },
      { path: "galeria", Component: Gallery },
      { path: "convocatorias", Component: Calls },
      { path: "*", Component: NotFound },
    ],
  },
]);
