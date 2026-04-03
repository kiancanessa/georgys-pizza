"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, menu } from "@/data/site";

type Tamano = 'Chica (6")' | 'Mediana (10")' | 'Grande (14")';
const TAMANOS: Tamano[] = ['Chica (6")', 'Mediana (10")', 'Grande (14")'];

export default function Contact() {
  const [nombre,   setNombre]   = useState("");
  const [telefono, setTelefono] = useState("");
  const [platillo, setPlatillo] = useState(menu[0].nombre);
  const [tamano,   setTamano]   = useState<Tamano>(TAMANOS[1]);
  const [extras,   setExtras]   = useState("");
  const [tipo,     setTipo]     = useState<"Para llevar" | "A domicilio">("Para llevar");
  const [enviado,  setEnviado]  = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sel = menu.find(p => p.nombre === platillo);
    const msg = [
      `🍕 *PEDIDO — Georgy's Pizza y Pastas*`,
      ``,
      `👤 *Nombre:* ${nombre}`,
      `📞 *Teléfono:* ${telefono || "No indicado"}`,
      ``,
      `🍽️ *Platillo:* ${platillo}`,
      sel?.categoria === "Pizza" ? `📏 *Tamaño:* ${tamano}` : null,
      `🛵 *Tipo:* ${tipo}`,
      extras ? `📝 *Notas:* ${extras}` : null,
      ``,
      `_Pedido desde georgyspizzaypastas.com_`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setEnviado(true);
    setTimeout(() => {
      setNombre(""); setTelefono(""); setPlatillo(menu[0].nombre);
      setTamano(TAMANOS[1]); setExtras(""); setTipo("Para llevar"); setEnviado(false);
    }, 4000);
  };

  const sel = menu.find(p => p.nombre === platillo);

  // Clase de input — estilo claro sobre fondo oscuro
  const inp = "w-full bg-wood/50 border border-gold/15 focus:border-tomato/60 rounded-sm px-4 py-2.5 text-parchment font-sans text-sm placeholder:text-parchment/20 outline-none transition-colors";

  return (
    // ── Fondo oscuro madera — contrasta con la sección linen de Reservaciones ──
    <section id="contacto" className="relative py-24 section-wood overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ══ Columna izquierda — info del negocio ══ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
            className="lg:pt-2"
          >
            {/* Header */}
            <p className="vintage-label text-gold mb-2">Rápido y sin llamadas</p>
            <div className="h-[3px] w-12 bg-tomato mb-4" />
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] italic font-semibold text-parchment leading-none mb-6">
              Haz tu<br />Pedido
            </h2>
            <p className="font-sans text-xs text-parchment/45 tracking-wide leading-relaxed mb-10 max-w-xs">
              Elige tu platillo, nosotros abrimos WhatsApp con la orden ya escrita. Sin esperas, sin errores.
            </p>

            {/* Info cards apiladas */}
            <div className="space-y-4">
              {[
                { icon: "📍", label: "Dirección", text: site.direccion },
                { icon: "🕐", label: "Horario",   text: site.horario   },
                { icon: "📞", label: "Teléfono",  text: site.telefono  },
              ].map(item => (
                <div key={item.label}
                  className="flex gap-4 items-start border-l-2 border-gold/15 pl-4">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-sans text-[9px] tracking-[.22em] uppercase text-gold/50 mb-0.5">{item.label}</p>
                    <p className="font-sans text-xs text-parchment/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes */}
            <div className="flex gap-2.5 mt-8 flex-wrap">
              {[
                { label: "Instagram", href: `https://instagram.com/${site.instagram}`, bg: "from-purple-700 to-pink-600" },
                { label: "Facebook",  href: `https://facebook.com/${site.facebook}`,  bg: "from-blue-800 to-blue-600" },
                { label: "Maps",      href: site.mapsLink,                             bg: "from-green-800 to-green-600" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`bg-gradient-to-br ${s.bg} text-white font-sans text-[10px] font-semibold tracking-[.15em] uppercase px-4 py-2 rounded-sm hover:scale-105 hover:shadow-warm transition-all`}>
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ══ Columna derecha — formulario de pedido ══ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
          >
            <div className="bg-wood2 border border-gold/12 rounded-sm p-7">

              {/* Header del form */}
              <div className="flex items-center gap-3 mb-7 pb-5 border-b border-gold/10">
                <motion.span className="text-3xl"
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5 }}>
                  🍕
                </motion.span>
                <div>
                  <h3 className="font-display text-2xl italic font-semibold text-parchment leading-none">
                    Ordenar Ahora
                  </h3>
                  <p className="font-sans text-[10px] text-parchment/30 mt-1 tracking-wide">
                    Abrimos WhatsApp con tu orden lista
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Nombre + Teléfono */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Nombre *</label>
                    <input type="text" required value={nombre} onChange={e => setNombre(e.target.value)}
                      placeholder="Tu nombre" className={inp} />
                  </div>
                  <div>
                    <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Teléfono</label>
                    <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)}
                      placeholder="+52 661..." className={inp} />
                  </div>
                </div>

                {/* Platillo */}
                <div>
                  <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">¿Qué deseas? *</label>
                  <select required value={platillo} onChange={e => setPlatillo(e.target.value)} className={inp + " cursor-pointer"}>
                    <optgroup label="🍕 Pizzas" style={{ background: "#1A0900" }}>
                      {menu.filter(p => p.categoria === "Pizza").map(p => (
                        <option key={p.nombre} value={p.nombre} style={{ background: "#1A0900" }}>
                          {p.nombre} — ${p.precio} MXN
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🍝 Pastas" style={{ background: "#1A0900" }}>
                      {menu.filter(p => p.categoria === "Pasta").map(p => (
                        <option key={p.nombre} value={p.nombre} style={{ background: "#1A0900" }}>
                          {p.nombre} — ${p.precio} MXN
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Tamaño + Tipo (solo si es pizza) */}
                <AnimatePresence>
                  {sel?.categoria === "Pizza" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-3 overflow-hidden"
                    >
                      <div>
                        <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Tamaño</label>
                        <select value={tamano} onChange={e => setTamano(e.target.value as Tamano)}
                          className={inp + " cursor-pointer"}>
                          {TAMANOS.map(t => <option key={t} value={t} style={{ background: "#1A0900" }}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Tipo</label>
                        <select value={tipo} onChange={e => setTipo(e.target.value as "Para llevar" | "A domicilio")}
                          className={inp + " cursor-pointer"}>
                          <option style={{ background: "#1A0900" }}>Para llevar</option>
                          <option style={{ background: "#1A0900" }}>A domicilio</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Extras */}
                <div>
                  <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Extras / Notas</label>
                  <textarea rows={2} value={extras} onChange={e => setExtras(e.target.value)}
                    placeholder="Sin cebolla, extra queso, dirección..."
                    className={inp + " resize-none"} />
                </div>

                {/* Submit */}
                <motion.button type="submit"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-sans text-[10px] font-semibold tracking-[.22em] uppercase py-3.5 rounded-sm transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
                  </svg>
                  Enviar Pedido por WhatsApp
                </motion.button>

                <AnimatePresence>
                  {enviado && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="text-center font-sans text-xs text-[#25D366] tracking-wide pt-1">
                      ✅ ¡WhatsApp abierto con tu pedido!
                    </motion.p>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
