// App.tsx
import { useState, useEffect, useCallback } from "react";
import "./styles/global.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Engineering from "./pages/Engineering";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { PageKey, NAV_ITEMS } from "./data/projects";

export function pageFromPath(pathname: string): PageKey {
  const segment = pathname.replace(/^\/+/, "").split("/")[0]?.toUpperCase();
  const match = NAV_ITEMS.find((n) => n.key === segment);
  return (match?.key as PageKey) ?? "HOME";
}

export function pathFromPage(page: PageKey): string {
  if (page === "HOME") return "/";
  return `/${page.toLowerCase()}`;
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(() =>
    pageFromPath(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setActivePage(pageFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((page: PageKey) => {
    setActivePage(page);
    window.history.pushState({}, "", pathFromPage(page));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar activePage={activePage} onNavigate={navigate} />

      {activePage === "HOME"         && <Home />}
      {activePage === "ENGINEERING"  && <Engineering />}
      {activePage === "DESIGN"       && <Portfolio />}
      {activePage === "ABOUT"        && <About />}

      <Footer />
    </>
  );
}