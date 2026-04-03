"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { site } from "@/data/site";

const links = [
  { href: "#menu",      label: "Menú" },
  { href: "#nosotros",  label: "Nosotros" },
  { href: "#ordenar",   label: "Reservar" },
  { href: "#ordenar",   label: "Pedir" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-wood/97 backdrop-blur-md shadow-warm-lg border-b border-gold/10"
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Georgy's Pizza y Pastas"
              width={56}
              height={56}
              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block leading-tight">
              <p className="font-script text-gold text-xl leading-none">Georgy&apos;s</p>
              <p className="font-sans text-[10px] tracking-[.2em] uppercase text-parchment/60">Pizza y Pastas</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}
                  className="font-sans text-xs tracking-[.18em] uppercase text-parchment/70 hover:text-gold transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-tomato hover:bg-tomato2 text-cream font-sans text-xs font-semibold tracking-[.15em] uppercase px-5 py-2.5 rounded-sm transition-colors shadow-warm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
                </svg>
                Pedir ahora
              </a>
            </li>
          </ul>

          {/* Burger */}
          <button onClick={() => setOpen(o => !o)} aria-label="Menú"
            className="md:hidden flex flex-col gap-[5px] p-2 z-[60] relative">
            <span className={`block h-[2px] w-6 bg-parchment transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-6 bg-parchment transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-parchment transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-wood/97 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-full mb-2" />
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}
            className="font-display text-4xl italic text-parchment/80 hover:text-gold transition-colors">
            {l.label}
          </a>
        ))}
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-4 bg-tomato text-cream font-sans text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-sm">
          Pedir por WhatsApp
        </a>
      </div>
    </>
  );
}
