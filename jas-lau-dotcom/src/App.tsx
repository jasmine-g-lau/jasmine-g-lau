import { useState, useEffect } from "react";
import "./styles/global.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import GitHub from "./pages/GitHub";
import Design from "./pages/Design";
import About from "./pages/About";
import { PageKey } from "./data/projects";

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>("HOME");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = (page: PageKey) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <NavBar activePage={activePage} onNavigate={navigate} />

      {activePage === "HOME"   && <Home scrollProgress={scrollProgress} />}
      {activePage === "RESUME" && <Resume />}
      {activePage === "GITHUB" && <GitHub />}
      {activePage === "DESIGN" && <Design />}
      {activePage === "ABOUT"  && <About />}

      <Footer />
    </>
  );
}