import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  {
    icon: "MapPin",
    title: "Исторические места",
    desc: "Каталог объектов с фильтрами по эпохе, типу и району. Фотогалереи, координаты и исторические справки.",
    href: "/places",
  },
  {
    icon: "Navigation",
    title: "Тематические маршруты",
    desc: "«Сургут XVII века», «Советский период», «Архитектурное наследие» — с картой, аудиогидом и рекомендациями.",
    href: "/routes",
  },
  {
    icon: "Clock",
    title: "Хронология",
    desc: "Интерактивная лента времени с ключевыми событиями истории Сургута, привязанными к местам на карте.",
    href: "/timeline",
  },
  {
    icon: "Image",
    title: "Медиатека",
    desc: "Архивные фотографии, документы, видеоинтервью с историками и аудиозаписи краеведов.",
    href: "/media",
  },
];

export default function Featured() {
  return (
    <div id="places" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-500">Разделы проекта</h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight max-w-2xl">
            Четыре века истории —<br />в одном цифровом пространстве
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group border border-neutral-200 p-8 hover:border-neutral-900 transition-colors duration-300 cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-neutral-200 group-hover:border-neutral-900 transition-colors shrink-0">
                  <Icon name={s.icon} size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">{s.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-6 pt-8 border-t border-neutral-200">
          <div className="flex-1">
            <p className="text-neutral-500 text-sm">
              Актуальное событие — <span className="text-neutral-900 font-medium">Выставка «Сургут в годы войны»</span>, городской музей, март 2026
            </p>
          </div>
          <Link to="/news">
            <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
              Все события →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}