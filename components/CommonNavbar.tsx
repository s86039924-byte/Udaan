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
  return (
    <header className="common-nav">
      <div className="common-nav__inner">
        <a className="common-nav__brand" href="/home">
          UDAAN Institute
        </a>

        <nav className="common-nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activePath === item.href ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default CommonNavbar;
