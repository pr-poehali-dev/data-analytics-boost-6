import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/ui/icon";

const tabs = ["Фотографии", "Документы", "Видео", "Аудио"];

const photos = [
  { year: 1910, title: "Главная улица Сургута", desc: "Снимок центральной улицы дореволюционного Сургута", emoji: "🏘" },
  { year: 1935, title: "Рынок у пристани", desc: "Торговые ряды у речной пристани в 1930-х годах", emoji: "⚓" },
  { year: 1963, title: "Первая нефтяная вышка", desc: "Бурение первой промышленной скважины", emoji: "🛢" },
  { year: 1968, title: "Строительство города", desc: "Возведение первых панельных домов для нефтяников", emoji: "🏗" },
  { year: 1975, title: "Открытие вокзала", desc: "Торжественная церемония открытия железнодорожного вокзала", emoji: "🚂" },
  { year: 1985, title: "Панорама города", desc: "Аэрофотосъёмка Сургута в период расцвета нефтяной эпохи", emoji: "✈" },
];

const documents = [
  { year: 1594, title: "Царский указ об основании острога", type: "Указ", emoji: "📜" },
  { year: 1782, title: "Грамота о присвоении статуса уездного города", type: "Грамота", emoji: "📋" },
  { year: 1868, title: "Переписные листы Тобольской губернии", type: "Перепись", emoji: "📃" },
  { year: 1913, title: "Проект здания первой школы", type: "Чертёж", emoji: "📐" },
  { year: 1961, title: "Акт об открытии нефтяного месторождения", type: "Акт", emoji: "📄" },
  { year: 1965, title: "Постановление о присвоении статуса города", type: "Постановление", emoji: "🗂" },
];

const videos = [
  { year: 2023, title: "История Сургута: от острога до мегаполиса", duration: "42 мин", author: "Краеведческий музей", emoji: "🎬" },
  { year: 2022, title: "Интервью с историком А.В. Сидоровым", duration: "28 мин", author: "Городской архив", emoji: "🎙" },
  { year: 2021, title: "Реконструкция острога 1594 года", duration: "15 мин", author: "Исторический клуб", emoji: "🏰" },
  { year: 2023, title: "Нефтяной бум: свидетели эпохи", duration: "55 мин", author: "СГТРК", emoji: "🛢" },
];

const audio = [
  { year: 2022, title: "Рассказы старожилов Сургута", duration: "1:12:34", author: "Архив краеведов", emoji: "🎵" },
  { year: 2021, title: "Аудиогид: Деревянный Сургут", duration: "35:20", author: "Музей истории", emoji: "🎧" },
  { year: 2023, title: "Звуки старого города: колокола и ярмарка", duration: "12:45", author: "Реконструкция", emoji: "🔔" },
  { year: 2022, title: "Легенды и предания народов Оби", duration: "48:10", author: "Этнографический центр", emoji: "📻" },
];

export default function Media() {
  const [activeTab, setActiveTab] = useState("Фотографии");

  return (
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">Архив</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Медиатека</h1>
          <p className="text-neutral-500 max-w-2xl">Исторические фотографии, архивные документы, видеоматериалы и аудиозаписи об истории Сургута.</p>
        </div>

        <div className="flex gap-0 mb-8 border-b border-neutral-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm uppercase tracking-wide transition-colors cursor-pointer ${
                activeTab === tab
                  ? "border-b-2 border-neutral-900 text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Фотографии" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 hover:border-neutral-400 transition-colors group cursor-pointer">
                <div className="h-48 bg-neutral-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform overflow-hidden">
                  {item.emoji}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-neutral-100 px-2 py-0.5 text-neutral-600">{item.year}</span>
                    <Icon name="Image" size={12} className="text-neutral-400" />
                  </div>
                  <p className="font-medium text-neutral-900 text-sm">{item.title}</p>
                  <p className="text-xs text-neutral-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Документы" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 hover:border-neutral-400 transition-colors p-5 flex gap-4 cursor-pointer group">
                <div className="text-4xl">{item.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-neutral-100 px-2 py-0.5 text-neutral-600">{item.year}</span>
                    <span className="text-xs text-neutral-400 uppercase">{item.type}</span>
                  </div>
                  <p className="font-medium text-neutral-900">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Видео" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer group">
                <div className="h-40 bg-neutral-900 flex items-center justify-center text-6xl relative overflow-hidden">
                  <span className="text-5xl">{item.emoji}</span>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon name="Play" size={20} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-medium text-neutral-900 mb-2">{item.title}</p>
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span>{item.author}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1"><Icon name="Clock" size={11} />{item.duration}</div>
                    <span>·</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Аудио" && (
          <div className="space-y-3">
            {audio.map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 hover:border-neutral-400 transition-colors p-5 flex items-center gap-4 cursor-pointer group">
                <div className="text-3xl">{item.emoji}</div>
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors shrink-0">
                  <Icon name="Play" size={14} className="group-hover:text-white transition-colors ml-0.5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-900">{item.title}</p>
                  <p className="text-xs text-neutral-400 mt-1">{item.author} · {item.year}</p>
                </div>
                <span className="text-sm text-neutral-500 shrink-0">{item.duration}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
