import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-sm uppercase tracking-widest font-semibold">Сургут · История</Link>
        <nav className="flex gap-6 md:gap-8">
          <Link to="/places" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">Места</Link>
          <Link to="/routes" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">Маршруты</Link>
          <Link to="/timeline" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">Хронология</Link>
          <Link to="/about" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-xs md:text-sm tracking-wide">О проекте</Link>
        </nav>
      </div>
    </header>
  );
}
