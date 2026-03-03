import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "/places", label: "Места" },
  { href: "/routes", label: "Маршруты" },
  { href: "/timeline", label: "Хронология" },
  { href: "/media", label: "Медиатека" },
  { href: "/news", label: "Новости" },
  { href: "/researchers", label: "Исследователям" },
  { href: "/about", label: "О проекте" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold uppercase tracking-widest text-neutral-900">
          Сургут · История
        </Link>
        <nav className="hidden lg:flex gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-xs uppercase tracking-wide transition-colors ${
                location.pathname === l.href
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-wide ${
                location.pathname === l.href ? "text-neutral-900 font-semibold" : "text-neutral-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
