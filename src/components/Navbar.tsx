import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import lsiLogo from "@/assets/lsi-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Our Impact", to: "/#map" },
  { label: "Roadmap", to: "/#roadmap" },
  { label: "Team", to: "/#team" },
  { label: "Contact", to: "/contact" },
];

const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID_HERE";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNav = (to: string) => {
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = to;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={lsiLogo} alt="LSI Logo" className="h-14 sm:h-16 w-auto" />
          <div className="hidden sm:block">
            <span className="font-display text-xl font-bold text-foreground leading-none">LSI</span>
            <span className="block text-[10px] text-muted-foreground leading-tight tracking-wider uppercase">Initiative</span>
          </div>
        </Link>

        {/* Always visible horizontal menu */}
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-wrap justify-end">
          {navLinks.map((l) => (
            <li key={l.to}>
              {l.to.startsWith("/#") ? (
                <button
                  onClick={() => handleNav(l.to)}
                  className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {l.label}
                </button>
              ) : (
                <Link
                  to={l.to}
                  className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
            >
              Join Us <ExternalLink size={14} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
