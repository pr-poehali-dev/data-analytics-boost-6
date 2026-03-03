interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-semibold">Сургут · История</div>
        <nav className="flex gap-6 md:gap-8">
          <a href="#places" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">Места</a>
          <a href="#routes" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">Маршруты</a>
          <a href="#timeline" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">Хронология</a>
          <a href="#about" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">О проекте</a>
        </nav>
      </div>
    </header>
  );
}