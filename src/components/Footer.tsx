import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-wood2 border-t border-gold/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top ornament */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-gold/40 text-sm">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="rounded-full opacity-90" />
            <div>
              <p className="font-script text-gold text-2xl leading-none">Georgy&apos;s</p>
              <p className="font-sans text-[10px] tracking-[.25em] uppercase text-parchment/30 mt-0.5">Pizza y Pastas</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex gap-7 text-[10px] font-sans tracking-[.2em] uppercase text-parchment/30">
            <a href="#menu"          className="hover:text-gold transition-colors">Menú</a>
            <a href="#nosotros"      className="hover:text-gold transition-colors">Nosotros</a>
            <a href="#reservaciones" className="hover:text-gold transition-colors">Reservar</a>
            <a href="#contacto"      className="hover:text-gold transition-colors">Ordenar</a>
          </nav>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="font-sans text-xs text-parchment/40 tracking-wide">Rosarito, Baja California</p>
            <p className="font-sans text-[10px] text-parchment/20 mt-1">México 🇲🇽</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center gap-4 mt-10 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
          <span className="text-gold/20 text-xs">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
        </div>
        <p className="text-center font-sans text-[10px] text-parchment/20 tracking-widest uppercase">
          © {new Date().getFullYear()} {site.nombre} · Hecho con ❤️ en Rosarito
        </p>
      </div>
    </footer>
  );
}
