"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "100%", label: "Artesanal" },
  { value: "24h",  label: "Fermentación" },
  { value: "450°", label: "Horno de Piedra" },
  { value: "♡",    label: "Con Amor" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 section-wood relative overflow-hidden">
      {/* Decorative warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tomato/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: logo visual ── */}
          <motion.div initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
            className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 blur-[60px] rounded-full animate-pulse-soft" />
              <Image src="/logo.png" alt="Georgy's" width={300} height={300}
                className="relative drop-shadow-[0_0_60px_rgba(201,146,42,.35)] animate-float" />
            </div>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-10 w-full max-w-sm">
              {stats.map((s) => (
                <div key={s.label} className="text-center border-t border-gold/20 pt-4">
                  <p className="font-display text-3xl italic text-gold">{s.value}</p>
                  <p className="font-sans text-[10px] tracking-[.15em] uppercase text-parchment/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: story ── */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .7 }}>
            <p className="vintage-label text-gold mb-2">Nuestra historia</p>
            <div className="accent-bar bg-gold" style={{ background: "#C9922A" }} />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] italic font-semibold text-parchment mt-3 mb-6 leading-tight">
              Hecho con pasión<br />
              <span className="text-gold">en Rosarito</span>
            </h2>
            <div className="space-y-4 font-sans text-sm text-parchment/60 leading-relaxed tracking-wide">
              <p>
                Georgy&apos;s nació del sueño de traer la auténtica tradición italiana a Rosarito.
                Con un horno de piedra, cada pizza y pasta que sale de nuestra
                cocina lleva horas de preparación y amor por la gastronomía italiana.
              </p>
              <p>
                Usamos masa madre artesanal, salsa de tomate fresca y los
                mejores ingredientes de Baja California — porque aquí la calidad no es una opción,
                es nuestra promesa.
              </p>
              <p className="font-script text-gold text-xl pt-2">
                &ldquo;La buena comida une familias, culturas y corazones.&rdquo;
              </p>
            </div>

            {/* Ornamental divider */}
            <div className="ornament mt-8" style={{ color: "#C9922A" }}>
              <span className="font-sans text-[10px] tracking-[.3em] uppercase text-parchment/30 px-4">
                Rosarito · Baja California
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
