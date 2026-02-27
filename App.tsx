import { Suspense, createContext, lazy, useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
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
import Home from "./home/home";

const Courses = lazy(() => import("./courses/course"));
const DirectorPage = lazy(() => import("./director/director"));
const Fees = lazy(() => import("./fees/fees"));
const Admission = lazy(() => import("./Admission/admission"));
const WhyUdaan = lazy(() => import("./Why_udan'/why"));
const Testimonial = lazy(() => import("./tetimonila/testimonila"));
const Contact = lazy(() => import("./contact/contact"));
const DostPage = lazy(() => import("./dost/page"));

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

  useEffect(() => {
    const isDostPage = location.pathname.startsWith("/dost");

    document.documentElement.classList.toggle("dost-page", isDostPage);
    document.body.classList.toggle("dost-page", isDostPage);

    return () => {
      document.documentElement.classList.remove("dost-page");
      document.body.classList.remove("dost-page");
    };
  }, [location.pathname]);

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
            <img className="call-float__icon-image" src="/call.png" alt="" loading="eager" decoding="async" />
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
            <img className="whatsapp-float__icon-image" src="/wp.png" alt="" loading="eager" decoding="async" />
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

const PageLoader = () => (
  <main className="page">
    <section className="hero">
      <h1>Loading...</h1>
    </section>
  </main>
);

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
            <Route path="/courses" element={<Suspense fallback={<PageLoader />}><Courses /></Suspense>} />
            <Route path="/our-director" element={<Suspense fallback={<PageLoader />}><DirectorPage /></Suspense>} />
            <Route path="/fees" element={<Suspense fallback={<PageLoader />}><Fees /></Suspense>} />
            <Route path="/admission" element={<Suspense fallback={<PageLoader />}><Admission /></Suspense>} />
            <Route path="/why-udaan" element={<Suspense fallback={<PageLoader />}><WhyUdaan /></Suspense>} />
            <Route path="/testimonial" element={<Suspense fallback={<PageLoader />}><Testimonial /></Suspense>} />
            <Route path="/tetimonila" element={<Navigate to="/testimonial" replace />} />
            <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
            <Route path="/dost" element={<Suspense fallback={<PageLoader />}><DostPage /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
