import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/ui/icon";

const places = [
  {
    id: 1,
    name: "Троицкий мыс",
    epoch: "XVII век",
    type: "Природно-исторический",
    district: "Центральный",
    description: "Место основания Сургутского острога в 1594 году. Здесь казаки Фёдора Борятинского заложили первое укрепление на берегу Оби.",
    history: "В 1594 году по указу царя Фёдора Иоанновича воеводы Фёдор Барятинский и Владимир Оничков заложили Сургутский острог на мысу при впадении реки Сайма в Обь.",
    coords: "61.2546° с.ш., 73.4060° в.д.",
    bestTime: "Май–сентябрь",
    tags: ["острог", "основание города", "казаки"],
  },
  {
    id: 2,
    name: "Церковь Спасо-Преображения",
    epoch: "XIX век",
    type: "Культовое сооружение",
    district: "Центральный",
    description: "Деревянная православная церковь, возведённая в 1836 году. Один из немногих сохранившихся памятников дореволюционного Сургута.",
    history: "Строительство церкви началось в 1832 году на средства прихожан и купеческого сословия. Освящена в 1836 году в честь Преображения Господня.",
    coords: "61.2501° с.ш., 73.4234° в.д.",
    bestTime: "Круглый год",
    tags: ["церковь", "православие", "деревянное зодчество"],
  },
  {
    id: 3,
    name: "Дом купца Клепикова",
    epoch: "XIX век",
    type: "Гражданская архитектура",
    district: "Центральный",
    description: "Двухэтажный деревянный особняк купца первой гильдии И.А. Клепикова, построенный в 1880-х годах. Образец сибирского купеческого зодчества.",
    history: "Клепиков Иван Андреевич — один из богатейших купцов Сургута, занимавшийся пушниной и рыбой. Его дом являлся центром торговой жизни города.",
    coords: "61.2498° с.ш., 73.4201° в.д.",
    bestTime: "Круглый год",
    tags: ["купеческий дом", "деревянная архитектура", "торговля"],
  },
  {
    id: 4,
    name: "Здание первой школы",
    epoch: "XX век",
    type: "Образование",
    district: "Центральный",
    description: "Первое каменное учебное заведение Сургута, построенное в 1913 году. Сыграло ключевую роль в просвещении жителей Западной Сибири.",
    history: "Школа открылась в 1913 году как земское училище. В советский период здание было перестроено и использовалось как средняя общеобразовательная школа №1.",
    coords: "61.2512° с.ш., 73.4175° в.д.",
    bestTime: "Круглый год",
    tags: ["образование", "советский период", "каменное здание"],
  },
  {
    id: 5,
    name: "Нефтяная вышка «Первооткрывателям»",
    epoch: "XX век",
    type: "Памятник",
    district: "Северный",
    description: "Монумент в честь первооткрывателей нефтяных месторождений Западной Сибири. Установлен в 1967 году в период нефтяного бума.",
    history: "В 1961 году близ Сургута была открыта первая крупная нефтяная скважина, что определило судьбу города на десятилетия вперёд.",
    coords: "61.2567° с.ш., 73.4312° в.д.",
    bestTime: "Круглый год",
    tags: ["нефть", "памятник", "советский период"],
  },
  {
    id: 6,
    name: "Старая пристань на Оби",
    epoch: "XIX–XX век",
    type: "Транспортная инфраструктура",
    district: "Набережная",
    description: "Исторический речной причал, через который шли торговые пути в Томск и Тобольск. Главные ворота города на протяжении трёх столетий.",
    history: "Пристань служила основным транспортным узлом с XVIII века. Здесь разгружали купеческие баржи с товарами, рыбой и пушниной.",
    coords: "61.2489° с.ш., 73.4089° в.д.",
    bestTime: "Май–октябрь",
    tags: ["пристань", "торговля", "Обь"],
  },
];

const epochs = ["Все", "XVII век", "XIX век", "XX век"];
const types = ["Все типы", "Природно-исторический", "Культовое сооружение", "Гражданская архитектура", "Образование", "Памятник", "Транспортная инфраструктура"];
const districts = ["Все районы", "Центральный", "Северный", "Набережная"];

export default function Places() {
  const [epochFilter, setEpochFilter] = useState("Все");
  const [typeFilter, setTypeFilter] = useState("Все типы");
  const [districtFilter, setDistrictFilter] = useState("Все районы");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof places[0] | null>(null);

  const filtered = places.filter((p) => {
    const matchEpoch = epochFilter === "Все" || p.epoch === epochFilter;
    const matchType = typeFilter === "Все типы" || p.type === typeFilter;
    const matchDistrict = districtFilter === "Все районов" || p.district === districtFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchEpoch && matchType && matchDistrict && matchSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">Каталог</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Исторические места</h1>
          <p className="text-neutral-500 max-w-2xl">Объекты культурного наследия Сургута с историческими справками, координатами и рекомендациями по посещению.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по названию..."
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 bg-white text-sm outline-none focus:border-neutral-400 transition-colors"
            />
          </div>
          <select value={epochFilter} onChange={(e) => setEpochFilter(e.target.value)} className="px-3 py-2 border border-neutral-200 bg-white text-sm outline-none cursor-pointer">
            {epochs.map((e) => <option key={e}>{e}</option>)}
          </select>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-2 border border-neutral-200 bg-white text-sm outline-none cursor-pointer">
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select value={districtFilter} onChange={(e) => setDistrictFilter(e.target.value)} className="px-3 py-2 border border-neutral-200 bg-white text-sm outline-none cursor-pointer">
            {districts.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>

        <p className="text-sm text-neutral-400 mb-6">Найдено: {filtered.length} объектов</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((place) => (
            <div
              key={place.id}
              onClick={() => setSelected(place)}
              className="bg-white border border-neutral-200 hover:border-neutral-900 transition-colors cursor-pointer group"
            >
              <div className="h-48 bg-neutral-100 flex items-center justify-center overflow-hidden">
                <div className="text-6xl text-neutral-300 group-hover:scale-110 transition-transform">
                  {place.type === "Культовое сооружение" ? "⛪" :
                   place.type === "Памятник" ? "🗿" :
                   place.type === "Природно-исторический" ? "🏔" :
                   place.type === "Транспортная инфраструктура" ? "⚓" : "🏛"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wide bg-neutral-100 px-2 py-1 text-neutral-600">{place.epoch}</span>
                  <span className="text-xs text-neutral-400">{place.district}</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{place.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">{place.description}</p>
                <div className="flex items-center gap-1 mt-4 text-xs text-neutral-400">
                  <Icon name="MapPin" size={12} />
                  <span>{place.coords}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="h-56 bg-neutral-100 flex items-center justify-center text-8xl">
              {selected.type === "Культовое сооружение" ? "⛪" :
               selected.type === "Памятник" ? "🗿" :
               selected.type === "Природно-исторический" ? "🏔" :
               selected.type === "Транспортная инфраструктура" ? "⚓" : "🏛"}
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wide bg-neutral-100 px-2 py-1 text-neutral-600">{selected.epoch}</span>
                    <span className="text-xs uppercase tracking-wide bg-neutral-100 px-2 py-1 text-neutral-600">{selected.type}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{selected.name}</h2>
                </div>
                <button onClick={() => setSelected(null)} className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <Icon name="X" size={20} />
                </button>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">{selected.description}</p>
              <div className="border-t border-neutral-100 pt-6 mb-6">
                <h4 className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Историческая справка</h4>
                <p className="text-neutral-600 leading-relaxed">{selected.history}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Icon name="MapPin" size={14} />
                  <span>{selected.coords}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <Icon name="Clock" size={14} />
                  <span>{selected.bestTime}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-neutral-100 px-2 py-1 text-neutral-500">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
