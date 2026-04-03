"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    const fn = () => setReady(true);
    v.addEventListener("canplay", fn);
    return () => v.removeEventListener("canplay", fn);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden bg-wood2">

      {/* ══ VIDEO ══ */}
      <video ref={videoRef} src="/intro.mp4" muted loop playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${ready ? "opacity-100" : "opacity-0"}`}
      />

      {/* Overlay: más oscuro arriba (texto), abre en el centro (logo), oscuro abajo */}
      <div className="absolute inset-0 bg-gradient-to-b from-wood2/88 via-wood2/30 to-wood2/85" />
      {/* Laterales suaves */}
      <div className="absolute inset-0 bg-gradient-to-r from-wood2/40 via-transparent to-wood2/40" />
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />
      {/* Líneas doradas */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/55 to-transparent" />

      {/* ══ ZONA SUPERIOR — Slogan centrado, arriba del logo ══ */}
      <div className="relative z-10 flex flex-col items-center text-center pt-28 pb-4 px-6">

        {/* Eyebrow */}
        <p className="font-sans text-[10px] tracking-[.35em] uppercase text-gold/70 mb-5
                       opacity-0 animate-fade-up"
           style={{ animationDelay: ".1s", animationFillMode: "forwards" }}>
          📍 Rosarito, B.C. · Horno de Leña
        </p>

        {/* Slogan — 3 líneas apiladas */}
        <div className="opacity-0 animate-fade-up"
             style={{ animationDelay: ".25s", animationFillMode: "forwards" }}>
          <p className="font-script text-gold text-[clamp(1.5rem,3vw,2.2rem)] leading-none mb-1">
            Donde Italia y México
          </p>
          <h1 className="font-display text-[clamp(1.5rem,8vw,6.5rem)] italic font-semibold leading-[.8] text-parchment">
            SE ENCUENTRAN
          </h1>
        </div>

        {/* Divider ornamental */}
        <div className="flex items-center gap-4 mt-6 mb-1 opacity-0 animate-fade-up"
             style={{ animationDelay: ".4s", animationFillMode: "forwards" }}>
          <div className="h-px w-14 bg-gold/40" />
          <span className="text-gold/50 text-xs tracking-[.3em]">✦ ✦ ✦</span>
          <div className="h-px w-14 bg-gold/40" />
        </div>
      </div>

      {/* ══ ZONA CENTRAL — logo del video respira aquí (espacio vacío intencional) ══ */}
      <div className="relative z-10 flex-1 min-h-[340px] md:min-h-[420px]" />

      {/* ══ ZONA INFERIOR — CTAs + info ══ */}
      <div className="relative z-10 flex flex-col items-center pb-10 px-6">

        {/* Sub-tagline */}
        <p className="font-sans text-[10px] tracking-[.2em] uppercase text-parchment/40 mb-7
                       opacity-0 animate-fade-up text-center"
           style={{ animationDelay: ".5s", animationFillMode: "forwards" }}>
          Masa artesanal · Recetas de familia · Ingredientes de Baja California
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 opacity-0 animate-fade-up"
             style={{ animationDelay: ".62s", animationFillMode: "forwards" }}>
          <a href="#menu"
            className="relative overflow-hidden group bg-tomato text-cream font-sans text-[10px] font-semibold tracking-[.22em] uppercase px-8 py-3.5 rounded-sm transition-all hover:shadow-glow hover:scale-105">
            <span className="absolute inset-0 bg-tomato2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <span className="relative">Ver el Menú</span>
          </a>
          <a href="#ordenar"
            className="border border-gold/45 hover:border-gold hover:bg-gold/10 text-gold font-sans text-[10px] font-semibold tracking-[.22em] uppercase px-8 py-3.5 rounded-sm transition-all">
            Reservar / Pedir
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-parchment/15 hover:border-[#25D366]/50 hover:text-[#25D366] text-parchment/50 font-sans text-[10px] tracking-[.18em] uppercase px-6 py-3.5 rounded-sm transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Info rápida */}
        <div className="flex flex-wrap gap-x-7 gap-y-2 justify-center border-t border-parchment/8 pt-6
                         opacity-0 animate-fade-up"
             style={{ animationDelay: ".74s", animationFillMode: "forwards" }}>
          {[
            { icon: "📍", text: "Rosarito, B.C." },
            { icon: "🕐", text: site.horario },
            { icon: "📞", text: site.telefono },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-1.5 text-parchment/30">
              <span className="text-sm">{item.icon}</span>
              <span className="font-sans text-[10px] tracking-[.14em] uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
