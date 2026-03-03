import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/ui/icon";

const team = [
  { name: "Александр Сидоров", role: "Научный руководитель", desc: "К.и.н., доцент СурГУ. Специализация — история Западной Сибири XVII–XIX вв." },
  { name: "Наталья Козлова", role: "Главный редактор", desc: "Краевед, сотрудник Сургутского краеведческого музея. 15 лет в архивной работе." },
  { name: "Михаил Ершов", role: "Разработка и дизайн", desc: "Создание цифровой платформы и визуальной концепции проекта." },
  { name: "Ирина Волкова", role: "Фотоархив", desc: "Оцифровка и каталогизация архивных фотоматериалов." },
];

const partners = [
  { name: "Сургутский краеведческий музей", type: "Партнёр" },
  { name: "Государственный архив Югры", type: "Партнёр" },
  { name: "СурГУ — кафедра истории", type: "Партнёр" },
  { name: "Городская администрация Сургута", type: "Спонсор" },
  { name: "Сургутнефтегаз", type: "Спонсор" },
];

export default function About() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">Проект</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">О проекте</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white border border-neutral-200 p-8 mb-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="Target" size={18} />
                Миссия и цели
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                «Сургут · История» — цифровой портал, созданный для сохранения и популяризации исторического наследия Сургута. Мы собираем, систематизируем и делаем доступными архивные материалы, исторические исследования и свидетельства очевидцев.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Наша цель — чтобы каждый житель и гость города мог узнать историю Сургута: от первого казачьего острога 1594 года до современного нефтяного мегаполиса.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { num: "430+", label: "лет истории" },
                  { num: "200+", label: "архивных фото" },
                  { num: "4", label: "тематических маршрута" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-neutral-50 border border-neutral-100">
                    <p className="text-3xl font-bold text-neutral-900">{stat.num}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 p-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <Icon name="Users" size={18} />
                Команда проекта
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.map((member) => (
                  <div key={member.name} className="p-4 border border-neutral-100">
                    <div className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center text-sm font-bold mb-3">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <p className="font-semibold text-neutral-900">{member.name}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wide mb-2">{member.role}</p>
                    <p className="text-sm text-neutral-500">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Icon name="Handshake" size={16} />
                Партнёры
              </h3>
              <div className="space-y-3">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-700">{p.name}</span>
                    <span className="text-xs bg-neutral-100 px-2 py-0.5 text-neutral-500">{p.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-6">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Icon name="Heart" size={16} />
                Поддержать проект
              </h3>
              <p className="text-neutral-400 text-sm mb-4">Помогите сохранить историю Сургута для будущих поколений.</p>
              <button className="w-full py-2 bg-white text-neutral-900 text-sm uppercase tracking-wide font-medium hover:bg-neutral-100 transition-colors cursor-pointer">
                Сделать пожертвование
              </button>
            </div>
          </div>
        </div>

        <div id="contact" className="bg-white border border-neutral-200 p-8 max-w-2xl">
          <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
            <Icon name="Mail" size={18} />
            Обратная связь
          </h2>
          {sent ? (
            <div className="text-center py-8">
              <Icon name="CheckCircle" size={40} className="text-green-500 mx-auto mb-3" />
              <p className="font-semibold text-neutral-900 mb-1">Сообщение отправлено!</p>
              <p className="text-neutral-400 text-sm">Мы ответим вам в течение 2–3 рабочих дней.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-neutral-500 block mb-1">Имя</label>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 text-sm outline-none focus:border-neutral-400 transition-colors"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-neutral-500 block mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-200 text-sm outline-none focus:border-neutral-400 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-neutral-500 block mb-1">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-200 text-sm outline-none focus:border-neutral-400 transition-colors resize-none"
                  placeholder="Напишите нам..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Отправить
              </button>
            </form>
          )}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
