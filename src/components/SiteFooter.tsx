import { Link } from "react-router-dom";

const cols = [
  {
    title: "Исследовать",
    links: [
      { href: "/places", label: "Исторические места" },
      { href: "/routes", label: "Маршруты" },
      { href: "/timeline", label: "Хронология" },
      { href: "/media", label: "Медиатека" },
    ],
  },
  {
    title: "Сообщество",
    links: [
      { href: "/news", label: "Новости и события" },
      { href: "/researchers", label: "Для исследователей" },
      { href: "/about", label: "О проекте" },
      { href: "/about#contact", label: "Контакты" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-12 mb-12">
          {cols.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <h3 className="uppercase text-neutral-400 text-xs tracking-widest mb-2">{col.title}</h3>
              {col.links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-white hover:text-neutral-400 transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <h2 className="text-[10vw] sm:text-[8vw] leading-none text-white font-bold tracking-tight">
            СУРГУТ<br />ИСТОРИЯ
          </h2>
          <p className="text-neutral-500 text-sm">{new Date().getFullYear()} · Проект сохранения истории города</p>
        </div>
      </div>
    </footer>
  );
}
