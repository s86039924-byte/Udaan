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
import Fees from "./fees/fees";
import Home from "./home/home";
import WhyUdaan from "./Why_udan'/why";

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
  const hideNavigationAndFooter = location.pathname === "/dost";

  return (
    <>
      <ScrollToTop />
      {!hideNavigationAndFooter && <CommonNavbar activePath={location.pathname} />}
      <Outlet />
      {!hideNavigationAndFooter && <CommonFooter />}
    </>
  );
};

const Dost = () => {
  return (
    <main className="page">
      <section className="hero">
        <h1>Dost</h1>
        <p>This route intentionally hides the common navigation and footer.</p>
      </section>
    </main>
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
            <Route path="/fees" element={<Fees />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/why-udaan" element={<WhyUdaan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dost" element={<Dost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
