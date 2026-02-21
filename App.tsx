import { createContext, useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import CommonFooter from "./components/CommonFooter";
import CommonNavbar from "./components/CommonNavbar";
import Admission from "./Admission/admission";
import Contact from "./contact/contact";
import Courses from "./courses/course";
import DirectorPage from "./director/director";
import Fees from "./fees/fees";
import Home from "./home/home";
import Testimonial from "./tetimonila/testimonila";
import WhyUdaan from "./Why_udan'/why";
import DostPage from "./dost/page";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (nextTheme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const AppLayout = () => {
  const location = useLocation();
  const hideNavigationAndFooter = location.pathname.startsWith("/dost");

  return (
    <>
      <ScrollToTop />
      {!hideNavigationAndFooter && <CommonNavbar activePath={location.pathname} />}
      <div className={`app-content${hideNavigationAndFooter ? " app-content--no-nav" : ""}`}>
        <Outlet />
      </div>
      {!hideNavigationAndFooter && (
        <a
          className="call-float"
          href="tel:+918793154040"
          aria-label="Call +91 87931 54040"
        >
          <span className="call-float__icon" aria-hidden="true">
            <img className="call-float__icon-image" src="/call.png" alt="" />
          </span>
          <span className="call-float__text">
            <strong>Call Now</strong>
            <small>+91 87931 54040</small>
          </span>
        </a>
      )}
      {!hideNavigationAndFooter && (
        <a
          className="whatsapp-float"
          href="https://wa.me/918793154040"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp at +91 87931 54040"
        >
          <span className="whatsapp-float__icon" aria-hidden="true">
            <img className="whatsapp-float__icon-image" src="/wp.png" alt="" />
          </span>
          <span className="whatsapp-float__text">
            <strong>WhatsApp</strong>
            <small>+91 87931 54040</small>
          </span>
        </a>
      )}
      {!hideNavigationAndFooter && <CommonFooter />}
    </>
  );
};

const NotFound = () => {
  return (
    <main className="page">
      <section className="hero">
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
      </section>
    </main>
  );
};

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/our-director" element={<DirectorPage />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/why-udaan" element={<WhyUdaan />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/tetimonila" element={<Navigate to="/testimonial" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dost" element={<DostPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
