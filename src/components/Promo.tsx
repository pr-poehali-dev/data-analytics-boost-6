import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-xs md:text-sm tracking-widest opacity-80">
        Популярные маршруты
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight mb-8">
          Пройдите путями первых казаков, купцов и строителей советского Сургута
        </p>
        <div className="flex flex-wrap gap-3">
          {["Сургут XVII века", "Советский период", "Архитектурное наследие", "Торговые пути"].map((route) => (
            <Link key={route} to="/routes">
              <button className="px-4 py-2 border border-white/50 text-white text-sm hover:bg-white hover:text-black transition-colors cursor-pointer backdrop-blur-sm">
                {route}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}