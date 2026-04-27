import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/acerca", label: "Acerca" },
    { path: "/biblioteca", label: "Biblioteca" },
    { path: "/galeria", label: "Galería" },
    /*{ path: "/convocatorias", label: "Convocatorias" },*/
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b-2 border-foreground py-4 md:py-5 px-6 md:px-12 bg-background sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <Link
            to="/"
            className="group flex-shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="relative flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo.svg"
                alt="Ruido Visual"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />

              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative group">
                <span
                  className={`text-sm tracking-wide transition-colors ${
                    isActive(item.path)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>

                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  animate={{ width: isActive(item.path) ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l-2 border-foreground z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-secondary transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-4 transition-all duration-300 ${
                          isActive(item.path)
                            ? "bg-foreground text-background"
                            : "hover:bg-secondary"
                        }`}
                      >
                        <span
                          className="text-lg"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-border"
                >
                  <h3 className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">
                    Contacto
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:contacto@ruidovisual.org"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      contacto@ruidovisual.org
                    </a>

                    <a
                      href="mailto:convocatorias@ruidovisual.org"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      convocatorias@ruidovisual.org
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}