"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menu, site, type Categoria, type Platillo } from "@/data/site";

const TABS: { key: Categoria; label: string; emoji: string }[] = [
  { key: "Pizza",   label: "Pizzas",   emoji: "🍕" },
  { key: "Pasta",   label: "Fettuccinis", emoji: "🍝" },
  { key: "Lasagna", label: "Lasagnas", emoji: "🫕" },
  { key: "Panini",  label: "Paninis",  emoji: "🥪" },
];

function PlatilloCard({ p, index }: { p: Platillo; index: number }) {
  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hola! Quiero ordenar: ${p.nombre}${p.nombreEn ? ` / ${p.nombreEn}` : ""}`
  )}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group bg-cream border border-gold/20 rounded-sm overflow-hidden flex flex-col hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 relative text-ink"
    >
      {/* Foto real */}
      {p.foto && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={p.foto}
            alt={p.nombre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Overlay suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          {/* Tag encima de la foto */}
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-[.18em] uppercase bg-ink/70 backdrop-blur-sm text-gold/90 px-2.5 py-1 rounded-sm">
            {p.tag}
          </span>
          {/* Badge popular */}
          {p.bestseller && (
            <span className="absolute top-3 right-3 font-sans text-[9px] tracking-[.1em] uppercase bg-tomato text-cream px-2.5 py-1 rounded-sm">
              ★ Popular
            </span>
          )}
        </div>
      )}

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-display text-xl italic font-semibold text-ink leading-tight">
              {p.nombre}
            </h3>
            {p.nombreEn && (
              <p className="font-sans text-[10px] tracking-[.15em] uppercase text-muted/60 leading-none">
                {p.nombreEn}
              </p>
            )}
          </div>
          <span className="font-display text-2xl text-tomato flex-shrink-0 leading-none mt-0.5">
            ${p.precio}
          </span>
        </div>

        <p className="font-sans text-xs text-muted leading-relaxed flex-1 mt-2">
          {p.descripcion}
        </p>

        {/* Botón pedir */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white font-sans text-[10px] font-semibold tracking-[.18em] uppercase py-2.5 rounded-sm transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
          </svg>
          Pedir
        </a>
      </div>

      {/* Borde superior hover */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-gold/0 via-tomato to-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
    </motion.article>
  );
}

export default function MenuSection() {
  const [tab, setTab] = useState<Categoria>("Pizza");
  const filtered = menu.filter(p => p.categoria === tab);

  return (
    <section id="menu" className="py-24 section-parchment relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12">
          <p className="vintage-label mb-2">Nuestras creaciones</p>
          <div className="accent-bar mx-auto" />
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] italic font-semibold text-ink mt-3 leading-none">
            El Menú
          </h2>
          <p className="font-sans text-xs tracking-[.18em] uppercase text-muted mt-3">
            Horno de Piedra · Ingredientes frescos · Recetas de familia
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-1">
          <div className="inline-flex border border-gold/25 rounded-sm overflow-hidden flex-shrink-0">
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`font-sans text-[10px] tracking-[.18em] uppercase px-5 py-3 transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  tab === t.key
                    ? "bg-tomato text-cream"
                    : "text-ink/60 hover:text-ink hover:bg-linen"
                }`}>
                <span>{t.emoji}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((p, i) => (
              <PlatilloCard key={p.nombre} p={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer ornamento */}
        <div className="ornament mt-12 text-gold/40">
          <span className="font-sans text-[10px] tracking-[.3em] uppercase text-muted px-4">
            ¿Algo especial? Consúltanos
          </span>
        </div>
        <div className="text-center mt-5">
          <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola! Quiero preguntar por un pedido especial 🍕")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block border border-tomato/40 hover:bg-tomato hover:text-cream text-tomato font-sans text-xs font-semibold tracking-[.2em] uppercase px-8 py-3 rounded-sm transition-all">
            Pedido personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
