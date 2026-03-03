import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/ui/icon";

const archives = [
  { name: "Государственный архив Югры", desc: "Документы по истории Ханты-Мансийского округа с XVII века", url: "#", icon: "Archive" },
  { name: "Сургутский краеведческий музей", desc: "Фонды и коллекции по истории Сургута и Сургутского района", url: "#", icon: "Building2" },
  { name: "Научная библиотека СурГУ", desc: "Специализированный фонд краеведческой литературы", url: "#", icon: "BookOpen" },
  { name: "РГАДА (Москва)", desc: "Российский государственный архив древних актов. Материалы по Сибирскому приказу", url: "#", icon: "Scroll" },
];

const bibliography = [
  { author: "Сидоров А.В.", year: 2018, title: "Сургутский острог: история основания и развития в XVII веке", type: "Монография" },
  { author: "Белобородов В.К.", year: 2015, title: "История Сургута. С древних времён до наших дней", type: "Книга" },
  { author: "Козлова Н.П.", year: 2020, title: "Купеческое сословие Сургута в XIX веке", type: "Статья" },
  { author: "Михайлов Д.А.", year: 2019, title: "Нефтяной бум и трансформация городской среды Сургута (1961–1985)", type: "Диссертация" },
  { author: "Ярков А.П.", year: 2016, title: "Православие в Западной Сибири: история и современность", type: "Монография" },
  { author: "Сургутская правда", year: 2021, title: "Специальный выпуск к 425-летию города", type: "Газета" },
];

const contacts = [
  { name: "Сидоров Александр Владимирович", role: "Историк, к.и.н., СурГУ", email: "a.sidorov@surgu.ru" },
  { name: "Козлова Наталья Петровна", role: "Краевед, Сургутский музей", email: "kozlova@museum-surgut.ru" },
  { name: "Белобородов Виктор Кириллович", role: "Главный архивариус ГА Югры", email: "v.beloborodov@gahmao.ru" },
];

export default function Researchers() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">Научная база</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Для исследователей</h1>
          <p className="text-neutral-500 max-w-2xl">Ресурсы для историков, краеведов и всех, кто изучает историю Сургута: архивы, библиография и контакты экспертов.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="Archive" size={18} />
                Архивы и библиотеки
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {archives.map((a) => (
                  <a key={a.name} href={a.url} className="bg-white border border-neutral-200 hover:border-neutral-900 transition-colors p-5 group block">
                    <div className="flex items-start gap-3">
                      <Icon name={a.icon} size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors mt-0.5" />
                      <div>
                        <p className="font-medium text-neutral-900 text-sm">{a.name}</p>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={18} />
                Библиография
              </h2>
              <div className="bg-white border border-neutral-200 divide-y divide-neutral-100">
                {bibliography.map((b, i) => (
                  <div key={i} className="p-4 hover:bg-neutral-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-neutral-900">{b.title}</p>
                        <p className="text-xs text-neutral-500 mt-1">{b.author}, {b.year}</p>
                      </div>
                      <span className="text-xs uppercase bg-neutral-100 px-2 py-0.5 text-neutral-500 shrink-0">{b.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="Users" size={18} />
                Контакты историков
              </h2>
              <div className="space-y-3">
                {contacts.map((c, i) => (
                  <div key={i} className="bg-white border border-neutral-200 p-4">
                    <p className="font-medium text-neutral-900 text-sm">{c.name}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{c.role}</p>
                    <a href={`mailto:${c.email}`} className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors mt-1 flex items-center gap-1">
                      <Icon name="Mail" size={11} />
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-6">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Icon name="MessageSquare" size={16} />
                Форум краеведов
              </h3>
              <p className="text-neutral-400 text-sm mb-4">Обсудите находки, задайте вопросы и поделитесь исследованиями с сообществом.</p>
              <button className="w-full py-2 bg-white text-neutral-900 text-sm uppercase tracking-wide font-medium hover:bg-neutral-100 transition-colors cursor-pointer">
                Перейти на форум
              </button>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
