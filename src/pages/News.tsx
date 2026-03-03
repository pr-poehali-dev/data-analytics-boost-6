import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/ui/icon";

const upcoming = [
  {
    date: "15 марта 2026",
    title: "Выставка «Сургут в годы Великой Отечественной войны»",
    type: "Выставка",
    place: "Краеведческий музей",
    desc: "Экспозиция, посвящённая жизни горожан в 1941–1945 годах. Архивные фотографии, личные письма и предметы быта военного времени.",
  },
  {
    date: "22 марта 2026",
    title: "Лекция «Сургутский острог: мифы и реальность»",
    type: "Лекция",
    place: "Библиотека им. Лескова",
    desc: "Историк А.В. Сидоров расскажет о достоверных фактах основания города и развенчает популярные заблуждения.",
  },
  {
    date: "5 апреля 2026",
    title: "Экскурсия «Деревянный Сургут»",
    type: "Экскурсия",
    place: "Сбор у ДК «Нефтяник»",
    desc: "Пешеходная экскурсия по сохранившимся деревянным домам XIX–XX веков. Маршрут «Архитектурное наследие».",
  },
  {
    date: "19 апреля 2026",
    title: "Конференция «430 лет Сургуту»",
    type: "Конференция",
    place: "СурГУ, корпус 2",
    desc: "Научно-практическая конференция к юбилею города. Доклады историков, краеведов и архивистов.",
  },
];

const past = [
  {
    date: "10 февраля 2026",
    title: "Открытие онлайн-архива исторических фотографий",
    type: "Публикация",
    desc: "На портале опубликованы первые 200 оцифрованных фотографий из фонда краеведческого музея.",
  },
  {
    date: "28 января 2026",
    title: "Лекция «Нефтяной бум: город за 20 лет»",
    type: "Лекция",
    desc: "Более 150 человек посетили лекцию о стремительном росте Сургута в 1960–1980-е годы.",
  },
  {
    date: "15 декабря 2025",
    title: "Экскурсия для школьников «Мой город в XVII веке»",
    type: "Экскурсия",
    desc: "Более 300 учеников городских школ посетили историческую прогулку по местам основания Сургута.",
  },
];

const typeColors: Record<string, string> = {
  Выставка: "bg-purple-100 text-purple-800",
  Лекция: "bg-blue-100 text-blue-800",
  Экскурсия: "bg-green-100 text-green-800",
  Конференция: "bg-amber-100 text-amber-800",
  Публикация: "bg-neutral-100 text-neutral-800",
};

export default function News() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">Афиша</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Новости и события</h1>
          <p className="text-neutral-500 max-w-2xl">Анонсы лекций, выставок и экскурсий, а также отчёты о прошедших мероприятиях.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-neutral-900 mb-5 flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              Предстоящие события
            </h2>
            <div className="space-y-4 mb-12">
              {upcoming.map((item, i) => (
                <div key={i} className="bg-white border border-neutral-200 hover:border-neutral-400 transition-colors p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs uppercase tracking-wide px-2 py-1 ${typeColors[item.type] || "bg-neutral-100 text-neutral-800"}`}>{item.type}</span>
                      <span className="text-sm font-medium text-neutral-900">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Icon name="MapPin" size={12} />
                      {item.place}
                    </div>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-bold text-neutral-900 mb-5 flex items-center gap-2">
              <Icon name="Clock" size={18} />
              Прошедшие мероприятия
            </h2>
            <div className="space-y-3">
              {past.map((item, i) => (
                <div key={i} className="bg-white border border-neutral-100 p-5 opacity-80">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs uppercase tracking-wide px-2 py-1 ${typeColors[item.type] || "bg-neutral-100 text-neutral-800"}`}>{item.type}</span>
                    <span className="text-xs text-neutral-400">{item.date}</span>
                  </div>
                  <p className="font-medium text-neutral-700 mb-1">{item.title}</p>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-neutral-900 p-6 mb-4">
              <h3 className="font-bold text-white mb-2">Подписка на новости</h3>
              <p className="text-neutral-400 text-sm mb-4">Получайте анонсы событий первыми.</p>
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm outline-none focus:border-white/50 mb-3"
              />
              <button className="w-full py-2 bg-white text-neutral-900 text-sm uppercase tracking-wide font-medium hover:bg-neutral-100 transition-colors cursor-pointer">
                Подписаться
              </button>
            </div>
            <div className="bg-white border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Календарь</h3>
              <div className="space-y-2 text-sm">
                {upcoming.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-neutral-400 shrink-0 w-24 text-xs">{item.date.split(" ").slice(0, 2).join(" ")}</span>
                    <span className="text-neutral-700 text-xs line-clamp-1">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
