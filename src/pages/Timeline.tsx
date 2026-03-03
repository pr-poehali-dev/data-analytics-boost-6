import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const events = [
  { year: 1594, period: "XVII век", theme: "Основание", title: "Основание Сургутского острога", description: "По указу царя Фёдора Иоанновича воеводы Ф. Барятинский и В. Оничков заложили острог на берегу Оби.", place: "Троицкий мыс" },
  { year: 1601, period: "XVII век", theme: "Освоение", title: "Первая перепись населения", description: "Проведена первая перепись жителей Сургута. В остроге насчитывалось около 200 служилых людей и их семей.", place: null },
  { year: 1648, period: "XVII век", theme: "Освоение", title: "Экспедиция Дежнёва", description: "Казаки из Сургутского острога участвовали в экспедиции Семёна Дежнёва, открывшего пролив между Азией и Америкой.", place: null },
  { year: 1708, period: "XVIII век", theme: "Административное", title: "Вхождение в Сибирскую губернию", description: "По реформе Петра I Сургут вошёл в состав Сибирской губернии с центром в Тобольске.", place: null },
  { year: 1782, period: "XVIII век", theme: "Административное", title: "Присвоение статуса уездного города", description: "Сургут получил статус уездного города Тобольского наместничества и собственный герб — белая рыба на красном поле.", place: null },
  { year: 1836, period: "XIX век", theme: "Культура", title: "Освящение Спасо-Преображенской церкви", description: "Завершено строительство и состоялось освящение деревянной православной церкви — одной из немногих сохранившихся до наших дней.", place: "Церковь Спасо-Преображения" },
  { year: 1868, period: "XIX век", theme: "Административное", title: "Сургут стал заштатным городом", description: "В ходе административной реформы Сургут утратил статус уездного центра и стал заштатным городом Тобольской губернии.", place: null },
  { year: 1913, period: "XX век", theme: "Культура", title: "Открытие первой школы", description: "Открылось земское училище — первое постоянное учебное заведение в каменном здании.", place: "Здание первой школы" },
  { year: 1944, period: "XX век", theme: "Административное", title: "Образование Ханты-Мансийского округа", description: "Создан Ханты-Мансийский национальный округ, в состав которого вошёл Сургутский район.", place: null },
  { year: 1961, period: "XX век", theme: "Нефть", title: "Открытие нефтяного месторождения", description: "Геологи обнаружили первое крупное нефтяное месторождение близ Сургута, изменившее судьбу города навсегда.", place: "Нефтяная вышка «Первооткрывателям»" },
  { year: 1965, period: "XX век", theme: "Нефть", title: "Присвоение статуса города", description: "Сургут преобразован из рабочего посёлка в город в связи с бурным ростом нефтяной промышленности.", place: null },
  { year: 1967, period: "XX век", theme: "Культура", title: "Открытие ДК «Нефтяник»", description: "Построен и открыт Дворец культуры нефтяников — главный культурный центр советского Сургута.", place: null },
  { year: 1975, period: "XX век", theme: "Инфраструктура", title: "Открытие железнодорожного вокзала", description: "Завершено строительство железной дороги и открыт вокзал. Сургут получил надёжную транспортную связь с большой землёй.", place: null },
  { year: 1993, period: "XXI век", theme: "Современность", title: "Мост через Обь", description: "Открытие автомобильного моста через реку Обь — крупнейшего инженерного сооружения города.", place: null },
  { year: 2005, period: "XXI век", theme: "Культура", title: "Создание краеведческого музея", description: "Основан современный краеведческий музей Сургута с богатой коллекцией исторических артефактов и архивных документов.", place: null },
];

const periods = ["Все", "XVII век", "XVIII век", "XIX век", "XX век", "XXI век"];
const themes = ["Все темы", "Основание", "Освоение", "Административное", "Культура", "Нефть", "Инфраструктура", "Современность"];

const themeColors: Record<string, string> = {
  Основание: "bg-amber-500",
  Освоение: "bg-orange-500",
  Административное: "bg-blue-500",
  Культура: "bg-purple-500",
  Нефть: "bg-neutral-900",
  Инфраструктура: "bg-green-600",
  Современность: "bg-teal-500",
};

export default function Timeline() {
  const [periodFilter, setPeriodFilter] = useState("Все");
  const [themeFilter, setThemeFilter] = useState("Все темы");

  const filtered = events.filter((e) => {
    const matchPeriod = periodFilter === "Все" || e.period === periodFilter;
    const matchTheme = themeFilter === "Все темы" || e.theme === themeFilter;
    return matchPeriod && matchTheme;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">История города</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Хронология Сургута</h1>
          <p className="text-neutral-500">Ключевые события от основания острога в 1594 году до наших дней.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <select value={periodFilter} onChange={(e) => setPeriodFilter(e.target.value)} className="px-3 py-2 border border-neutral-200 bg-white text-sm outline-none cursor-pointer">
            {periods.map((p) => <option key={p}>{p}</option>)}
          </select>
          <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)} className="px-3 py-2 border border-neutral-200 bg-white text-sm outline-none cursor-pointer">
            {themes.map((t) => <option key={t}>{t}</option>)}
          </select>
          <div className="flex flex-wrap gap-2 items-center">
            {Object.entries(themeColors).map(([theme, color]) => (
              <button
                key={theme}
                onClick={() => setThemeFilter(themeFilter === theme ? "Все темы" : theme)}
                className={`flex items-center gap-1.5 px-2 py-1 text-xs border transition-all ${themeFilter === theme ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
              >
                <span className={`w-2 h-2 rounded-full ${color}`} />
                {theme}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[60px] top-0 bottom-0 w-px bg-neutral-200" />
          <div className="space-y-8">
            {filtered.map((event, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-[60px] shrink-0 text-right">
                  <span className="text-sm font-bold text-neutral-900">{event.year}</span>
                </div>
                <div className="relative flex-1 pl-6">
                  <div className={`absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full ${themeColors[event.theme] || "bg-neutral-400"}`} />
                  <div className="bg-white border border-neutral-200 p-5 group-hover:border-neutral-400 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-wide text-neutral-400">{event.period}</span>
                      <span className={`text-xs px-1.5 py-0.5 text-white ${themeColors[event.theme] || "bg-neutral-400"}`}>{event.theme}</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{event.description}</p>
                    {event.place && (
                      <div className="flex items-center gap-1 mt-3 text-xs text-neutral-400">
                        <span>📍</span>
                        <span>{event.place}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
