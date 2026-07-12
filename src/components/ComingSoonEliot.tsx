"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "eliot-announcement-seen";

export default function ComingSoonEliot() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setMounted(false), 400);
  };

  if (!mounted) return null;

  return (
    <div
      onClick={close}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-wood2/90 backdrop-blur-sm transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md bg-parchment rounded-xl border-2 border-gold/50 shadow-warm-lg overflow-hidden transition-all duration-500 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-wood/70 text-parchment hover:bg-wood transition-colors"
        >
          ✕
        </button>

        <div className="relative w-full aspect-video bg-black">
          <video
            src="/palacio-eliot.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center px-6 py-6 gap-3">
          <span className="font-sans text-[10px] tracking-[.25em] uppercase text-tomato bg-tomato/10 px-3 py-1 rounded-full">
            ✨ Próximamente en este mismo local
          </span>

          <Image
            src="/palacio-eliot-logo.jpg"
            alt="El Palacio de Eliot"
            width={220}
            height={220}
            className="w-40 h-40 object-contain -my-1"
          />

          <p className="font-sans text-sm text-ink/80 leading-relaxed">
            Junto a <span className="font-semibold text-tomato">Georgy&apos;s Pizza y Pastas</span> muy pronto
            abrirá <span className="font-semibold">El Palacio de Eliot</span>: ropa, regalos,
            novedades y muchos detalles más para toda la familia.
          </p>

          <button
            onClick={close}
            className="mt-2 bg-tomato hover:bg-tomato2 text-cream font-sans text-xs font-semibold tracking-[.15em] uppercase px-8 py-3 rounded-sm transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
