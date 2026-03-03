import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/ui/icon";

const routes = [
  {
    id: 1,
    title: "Сургут XVII века",
    subtitle: "Путь первопроходцев",
    season: "Май–октябрь",
    distance: "3.2 км",
    duration: "2–3 часа",
    difficulty: "Лёгкий",
    description: "Маршрут по местам основания и раннего развития Сургута. Вы пройдёте по тем же улицам, что и первые казаки-первопроходцы, заложившие острог в 1594 году.",
    points: [
      { num: 1, name: "Троицкий мыс", desc: "Место основания острога в 1594 году" },
      { num: 2, name: "Первая переправа", desc: "Исторический брод через реку Сайма" },
      { num: 3, name: "Торговая площадь", desc: "Центр купеческой жизни XVII–XVIII веков" },
      { num: 4, name: "Старое кладбище", desc: "Захоронения первых поселенцев Сургута" },
    ],
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    id: 2,
    title: "Советский период",
    subtitle: "Эпоха нефтяного бума",
    season: "Круглый год",
    distance: "4.8 км",
    duration: "3–4 часа",
    difficulty: "Средний",
    description: "Маршрут охватывает ключевые объекты советского строительства в Сургуте — от первых пятиэтажек до монументальных памятников эпохи нефтяного освоения Западной Сибири.",
    points: [
      { num: 1, name: "Монумент нефтяникам", desc: "Памятник первооткрывателям месторождений" },
      { num: 2, name: "ДК «Нефтяник»", desc: "Дворец культуры 1967 года постройки" },
      { num: 3, name: "Площадь Ленина", desc: "Главная площадь советского Сургута" },
      { num: 4, name: "Старый вокзал", desc: "Железнодорожный вокзал 1975 года" },
      { num: 5, name: "Кварталы первостроителей", desc: "Первые жилые дома нефтяников" },
    ],
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-800",
  },
  {
    id: 3,
    title: "Архитектурное наследие",
    subtitle: "Деревянный Сургут",
    season: "Круглый год",
    distance: "2.5 км",
    duration: "1.5–2 часа",
    difficulty: "Лёгкий",
    description: "Прогулка по сохранившимся памятникам деревянного зодчества XIX — начала XX века. Купеческие особняки, церкви и традиционные сибирские избы.",
    points: [
      { num: 1, name: "Дом купца Клепикова", desc: "Особняк 1880-х годов" },
      { num: 2, name: "Церковь Спасо-Преображения", desc: "Деревянный храм 1836 года" },
      { num: 3, name: "Дом учителя Протопопова", desc: "Образец городской застройки 1900-х" },
      { num: 4, name: "Торговые ряды", desc: "Остатки купеческой торговой улицы" },
    ],
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-800",
  },
  {
    id: 4,
    title: "Торговые пути",
    subtitle: "По берегам Оби",
    season: "Май–сентябрь",
    distance: "5.5 км",
    duration: "3–4 часа",
    difficulty: "Средний",
    description: "Речной маршрут вдоль Оби, связывающий исторические торговые точки. Вы узнаете, как Сургут стал важным узлом торговых путей между Уралом и Восточной Сибирью.",
    points: [
      { num: 1, name: "Старая пристань", desc: "Главные речные ворота города" },
      { num: 2, name: "Рыбацкий посёлок", desc: "Исторический квартал рыболовов" },
      { num: 3, name: "Таможенная изба", desc: "Место сбора пошлин XVII–XVIII вв." },
      { num: 4, name: "Купеческие склады", desc: "Хранилища меховой и рыбной торговли" },
      { num: 5, name: "Набережная Оби", desc: "Современная прогулочная зона на историческом месте" },
    ],
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
  },
];

export default function Routes() {
  const [selected, setSelected] = useState<typeof routes[0] | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">Прогулки по городу</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Тематические маршруты</h1>
          <p className="text-neutral-500 max-w-2xl">Готовые пешие маршруты по историческим местам Сургута с картой, описанием точек и рекомендациями по сезону.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className={`border ${route.color} p-8 cursor-pointer hover:shadow-md transition-shadow`}
              onClick={() => setSelected(route)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`text-xs uppercase tracking-wide px-2 py-1 ${route.badge} mb-3 inline-block`}>{route.subtitle}</span>
                  <h3 className="text-2xl font-bold text-neutral-900">{route.title}</h3>
                </div>
                <Icon name="ArrowRight" size={20} className="text-neutral-400 mt-1" />
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">{route.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <Icon name="MapPin" size={14} />
                  <span>{route.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Sun" size={14} />
                  <span>{route.season}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Activity" size={14} />
                  <span>{route.difficulty}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-400 uppercase tracking-wide">{route.points.length} точек маршрута</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`p-8 ${selected.color} border-b`}>
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-xs uppercase tracking-wide px-2 py-1 ${selected.badge} mb-3 inline-block`}>{selected.subtitle}</span>
                  <h2 className="text-3xl font-bold text-neutral-900">{selected.title}</h2>
                </div>
                <button onClick={() => setSelected(null)}>
                  <Icon name="X" size={20} className="text-neutral-500" />
                </button>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mt-4">
                <div className="flex items-center gap-1"><Icon name="MapPin" size={14} />{selected.distance}</div>
                <div className="flex items-center gap-1"><Icon name="Clock" size={14} />{selected.duration}</div>
                <div className="flex items-center gap-1"><Icon name="Sun" size={14} />{selected.season}</div>
                <div className="flex items-center gap-1"><Icon name="Activity" size={14} />{selected.difficulty}</div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-neutral-600 mb-8 leading-relaxed">{selected.description}</p>
              <h4 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Точки маршрута</h4>
              <div className="space-y-4">
                {selected.points.map((point) => (
                  <div key={point.num} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white text-sm flex items-center justify-center shrink-0 font-semibold">
                      {point.num}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{point.name}</p>
                      <p className="text-sm text-neutral-500">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-neutral-50 border border-neutral-200">
                <p className="text-sm text-neutral-500 flex items-center gap-2">
                  <Icon name="Headphones" size={14} />
                  Аудиогид для этого маршрута скоро появится в разделе «Медиатека»
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
