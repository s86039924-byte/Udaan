import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./layout.css";

type CommonNavbarProps = {
  activePath?: string;
};

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/fees", label: "Fees" },
  { href: "/admission", label: "Admission" },
  { href: "/why-udaan", label: "Why Udaan" },
  { href: "/contact", label: "Contact" },
];

const CommonNavbar = ({ activePath }: CommonNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="common-nav">
      <div className="common-nav__inner">
        <Link className="common-nav__brand" to="/home" aria-label="Udaan home">
          <span className="common-nav__logo-slot">Logo</span>
          <span className="common-nav__brand-text">UDAAN Institute</span>
        </Link>

        <nav className="common-nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={activePath === item.href ? "active" : ""}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="common-nav__actions" />

        <button
          type="button"
          className="common-nav__menu-btn"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      <div
        className={`common-nav__overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside className={`common-nav__drawer ${isMenuOpen ? "open" : ""}`} aria-label="Mobile menu">
        <div className="common-nav__drawer-head">
          <span>Menu</span>
          <button type="button" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav className="common-nav__drawer-links">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={activePath === item.href ? "active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default CommonNavbar;
