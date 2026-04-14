import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import lsiLogo from "@/assets/lsi-logo.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Roadmap", to: "/#roadmap" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/lsi.initiative", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919999999999", label: "WhatsApp" },
  { icon: Mail, href: "mailto:lsi.initiative@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={lsiLogo} alt="LSI" className="h-10 w-auto" />
            <div>
              <span className="font-display text-lg font-bold text-foreground">LSI Initiative</span>
              <span className="block text-xs text-muted-foreground">Living Standard of India</span>
            </div>
          </Link>

          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-faint text-sm italic">
            "Data changes lives. Start with visibility."
          </p>
          <p className="text-text-faint text-xs">
            © 2025 LSI Initiative. All rights reserved. Made with purpose by students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
