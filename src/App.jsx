import { useMemo, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { siteContent } from "./content/siteContent";
import { useSmoothScroll } from "./lib/motion/useSmoothScroll";
import { usePageMotion } from "./lib/motion/usePageMotion";
import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";
import BackToTop from "./components/BackToTop";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CareerSection from "./sections/CareerSection";
import TextFillSection from "./sections/TextFillSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import BlogPostPage from "./pages/BlogPostPage";

function MainPage({ content, theme, toggleTheme, loaded, setLoaded }) {
  useSmoothScroll();
  usePageMotion(loaded);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <BackToTop />
      <div
        className="page-shell"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}
      >
        <NavBar links={content.nav} theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <HeroSection     hero={content.hero} theme={theme} onToggleTheme={toggleTheme} loaded={loaded} />
          <AboutSection    about={content.about} />
          <CareerSection   career={content.career} />
          <TextFillSection textFill={content.textFill} />
          <BlogSection     blog={content.blog} />
          <ContactSection  contact={content.contact} />
        </main>
        <FooterSection />
      </div>
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("rz-theme") || "dark"
  );
  const content = useMemo(() => siteContent.en, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("rz-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              content={content}
              theme={theme}
              toggleTheme={toggleTheme}
              loaded={loaded}
              setLoaded={setLoaded}
            />
          }
        />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </>
  );
}
