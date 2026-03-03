import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/aca44e89-3027-4420-aab3-c49f092ed24e/files/8ac1058f-4ab7-4aaa-8175-d3af89abc0ae.jpg"
          alt="Панорама Сургута"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4 opacity-80">Сургут · с 1594 года</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ЖИВАЯ<br/>ИСТОРИЯ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Исторические места, маршруты и хроники города на Оби —<br className="hidden md:block"/> от основания до наших дней
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Найти место, событие, эпоху..."
            className="w-full sm:flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 text-sm outline-none focus:border-white/70 transition-colors"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm uppercase tracking-wide font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer">
            Найти
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm opacity-80">
          <a href="#places" className="hover:opacity-100 transition-opacity cursor-pointer">→ Исторические места</a>
          <a href="#routes" className="hover:opacity-100 transition-opacity cursor-pointer">→ Маршруты</a>
          <a href="#timeline" className="hover:opacity-100 transition-opacity cursor-pointer">→ Хронология</a>
          <a href="#media" className="hover:opacity-100 transition-opacity cursor-pointer">→ Медиатека</a>
        </div>
      </div>
    </div>
  );
}