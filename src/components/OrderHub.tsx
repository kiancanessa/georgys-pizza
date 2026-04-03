"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, menu } from "@/data/site";

// ─────────────────────────────────────────
//  Tipos
// ─────────────────────────────────────────
type Zone   = "reserva" | "pedido" | null;
type Tamano = 'Chica (6")' | 'Mediana (10")' | 'Grande (14")';
const TAMANOS: Tamano[] = ['Chica (6")', 'Mediana (10")', 'Grande (14")'];
const OCASIONES = [
  "Cumpleaños 🎂","Aniversario 💑","Reunión familiar 👨‍👩‍👧",
  "Cena de negocios 💼","Celebración 🥂","Otra ocasión",
];

// ─────────────────────────────────────────
//  Formulario de RESERVACIÓN
// ─────────────────────────────────────────
function FormReserva({ onClose }: { onClose: () => void }) {
  const [nombre,   setNombre]   = useState("");
  const [personas, setPersonas] = useState("2");
  const [fecha,    setFecha]    = useState("");
  const [hora,     setHora]     = useState("");
  const [ocasion,  setOcasion]  = useState("");
  const [notas,    setNotas]    = useState("");
  const [enviado,  setEnviado]  = useState(false);
  const [focused,  setFocused]  = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];
  const horas = [
    "13:00","13:30","14:00","14:30","15:00","15:30",
    "16:00","16:30","17:00","17:30","18:00","18:30",
    "19:00","19:30","20:00","20:30","21:00","21:30",
  ];

  const inp = (name: string) =>
    `w-full border-b-2 ${focused === name ? "border-tomato" : "border-gold/25"} bg-transparent py-2.5 text-ink font-sans text-sm placeholder:text-muted/40 outline-none transition-all duration-200`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `🍽️ *RESERVACIÓN — Georgy's Pizza y Pastas*`, ``,
      `👤 *Nombre:* ${nombre}`, `👥 *Personas:* ${personas}`,
      `📅 *Fecha:* ${fecha}`,   `🕐 *Hora:* ${hora}`,
      ocasion ? `🎉 *Ocasión:* ${ocasion}` : null,
      notas   ? `📝 *Notas:* ${notas}` : null,
      ``, `_Reservación desde georgyspizzaypastas.com_`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setEnviado(true);
    setTimeout(() => {
      setNombre(""); setPersonas("2"); setFecha("");
      setHora(""); setOcasion(""); setNotas(""); setEnviado(false);
    }, 4500);
  };

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.span className="text-3xl" animate={{ rotate:[0,-8,8,0] }}
            transition={{ duration:2, repeat:Infinity, repeatDelay:5 }}>🍽️</motion.span>
          <div>
            <h3 className="font-display text-2xl italic font-semibold text-ink">Hacer Reservación</h3>
            <p className="font-sans text-[10px] text-muted mt-0.5 tracking-wide">
              Se abrirá WhatsApp con tu solicitud lista
            </p>
          </div>
        </div>
        <button onClick={onClose}
          className="font-sans text-xs text-muted/50 hover:text-tomato tracking-widest uppercase transition-colors mt-1">
          ✕ cambiar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Nombre */}
        <div>
          <label className="block font-sans text-[9px] tracking-[.22em] uppercase text-muted mb-1 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-tomato inline-block" /> Tu nombre *
          </label>
          <input type="text" required value={nombre}
            onFocus={() => setFocused("nombre")} onBlur={() => setFocused(null)}
            onChange={e => setNombre(e.target.value)} placeholder="Carlos López"
            className={inp("nombre")} />
        </div>

        {/* Personas + Fecha */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block font-sans text-[9px] tracking-[.22em] uppercase text-muted mb-1 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-tomato inline-block" /> Personas *
            </label>
            <select required value={personas}
              onFocus={() => setFocused("personas")} onBlur={() => setFocused(null)}
              onChange={e => setPersonas(e.target.value)} className={inp("personas") + " cursor-pointer"}>
              {["1","2","3","4","5","6","7","8"].map(n => (
                <option key={n} value={n}>{n} {n==="1"?"persona":"personas"}</option>
              ))}
              <option value="9+">9+ personas</option>
            </select>
          </div>
          <div>
            <label className="block font-sans text-[9px] tracking-[.22em] uppercase text-muted mb-1 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-tomato inline-block" /> Fecha *
            </label>
            <input type="date" required min={today} value={fecha}
              onFocus={() => setFocused("fecha")} onBlur={() => setFocused(null)}
              onChange={e => setFecha(e.target.value)} className={inp("fecha") + " cursor-pointer"} />
          </div>
        </div>

        {/* Hora */}
        <div>
          <label className="block font-sans text-[9px] tracking-[.22em] uppercase text-muted mb-1 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-tomato inline-block" /> Hora *
          </label>
          <select required value={hora}
            onFocus={() => setFocused("hora")} onBlur={() => setFocused(null)}
            onChange={e => setHora(e.target.value)} className={inp("hora") + " cursor-pointer"}>
            <option value="">-- Selecciona una hora --</option>
            {horas.map(h => <option key={h} value={h}>{h} hrs</option>)}
          </select>
        </div>

        {/* Ocasión — chips */}
        <div>
          <label className="block font-sans text-[9px] tracking-[.22em] uppercase text-muted mb-2">
            ¿Qué celebran? <span className="text-muted/40">(opcional)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {OCASIONES.map(o => (
              <motion.button key={o} type="button"
                onClick={() => setOcasion(ocasion === o ? "" : o)}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }}
                className={`font-sans text-[10px] tracking-[.08em] px-3 py-1.5 rounded-sm border transition-all duration-200 ${
                  ocasion === o
                    ? "bg-tomato border-tomato text-cream"
                    : "bg-transparent border-gold/20 text-muted hover:border-tomato/40 hover:text-ink"
                }`}>
                {o}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Notas */}
        <div>
          <label className="block font-sans text-[9px] tracking-[.22em] uppercase text-muted mb-1">
            Peticiones especiales
          </label>
          <textarea rows={2} value={notas}
            onFocus={() => setFocused("notas")} onBlur={() => setFocused(null)}
            onChange={e => setNotas(e.target.value)}
            placeholder="Zona preferida, decoración, alergias..."
            className={inp("notas") + " resize-none"} />
        </div>

        {/* Submit */}
        <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }}
          className="w-full flex items-center justify-center gap-2.5 bg-tomato hover:bg-tomato2 text-cream font-sans text-[10px] font-semibold tracking-[.22em] uppercase py-4 rounded-sm transition-colors shadow-warm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
          </svg>
          Confirmar Reservación por WhatsApp
        </motion.button>

        <AnimatePresence>
          {enviado && (
            <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              className="text-center bg-olive/8 border border-olive/20 rounded-sm p-4">
              <p className="font-display text-xl italic text-olive">✅ ¡Reservación enviada!</p>
              <p className="font-sans text-[11px] text-muted mt-1">Te confirmamos pronto. ¡Gracias!</p>
              <div className="flex justify-center gap-1 mt-2 text-lg">
                {"🇮🇹🍕🍝🌶️🇲🇽".split("").map((c,i) => (
                  <motion.span key={i} initial={{ y:8, opacity:0 }} animate={{ y:0, opacity:1 }}
                    transition={{ delay: .3 + i * .07 }}>{c}</motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────
//  Formulario de PEDIDO
// ─────────────────────────────────────────
function FormPedido({ onClose }: { onClose: () => void }) {
  const [nombre,   setNombre]   = useState("");
  const [telefono, setTelefono] = useState("");
  const [platillo, setPlatillo] = useState(menu[0].nombre);
  const [tamano,   setTamano]   = useState<Tamano>(TAMANOS[1]);
  const [extras,   setExtras]   = useState("");
  const [tipo,     setTipo]     = useState<"Para llevar" | "A domicilio">("Para llevar");
  const [enviado,  setEnviado]  = useState(false);

  const sel = menu.find(p => p.nombre === platillo);

  const inp = "w-full bg-wood/50 border border-gold/15 focus:border-tomato/60 rounded-sm px-4 py-2.5 text-parchment font-sans text-sm placeholder:text-parchment/20 outline-none transition-colors";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `🍕 *PEDIDO — Georgy's Pizza y Pastas*`, ``,
      `👤 *Nombre:* ${nombre}`,
      `📞 *Teléfono:* ${telefono || "No indicado"}`, ``,
      `🍽️ *Platillo:* ${platillo}`,
      sel?.categoria === "Pizza" ? `📏 *Tamaño:* ${tamano}` : null,
      `🛵 *Tipo:* ${tipo}`,
      extras ? `📝 *Notas:* ${extras}` : null,
      ``, `_Pedido desde georgyspizzaypastas.com_`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setEnviado(true);
    setTimeout(() => {
      setNombre(""); setTelefono(""); setPlatillo(menu[0].nombre);
      setTamano(TAMANOS[1]); setExtras(""); setTipo("Para llevar"); setEnviado(false);
    }, 4000);
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.span className="text-3xl" animate={{ rotate:[0,-8,8,0] }}
            transition={{ duration:2.5, repeat:Infinity, repeatDelay:5 }}>🍕</motion.span>
          <div>
            <h3 className="font-display text-2xl italic font-semibold text-parchment">Ordenar Ahora</h3>
            <p className="font-sans text-[10px] text-parchment/35 mt-0.5 tracking-wide">
              Abrimos WhatsApp con tu orden lista
            </p>
          </div>
        </div>
        <button onClick={onClose}
          className="font-sans text-xs text-parchment/30 hover:text-gold tracking-widest uppercase transition-colors mt-1">
          ✕ cambiar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

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

        <div>
          <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">¿Qué deseas? *</label>
          <select required value={platillo} onChange={e => setPlatillo(e.target.value)} className={inp + " cursor-pointer"}>
            <optgroup label="🍕 Pizzas" style={{ background:"#1A0900" }}>
              {menu.filter(p => p.categoria === "Pizza").map(p => (
                <option key={p.nombre} value={p.nombre} style={{ background:"#1A0900" }}>
                  {p.nombre} — ${p.precio} MXN
                </option>
              ))}
            </optgroup>
            <optgroup label="🍝 Pastas" style={{ background:"#1A0900" }}>
              {menu.filter(p => p.categoria === "Pasta").map(p => (
                <option key={p.nombre} value={p.nombre} style={{ background:"#1A0900" }}>
                  {p.nombre} — ${p.precio} MXN
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <AnimatePresence>
          {sel?.categoria === "Pizza" && (
            <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }}
              exit={{ opacity:0, height:0 }} className="grid grid-cols-2 gap-3 overflow-hidden">
              <div>
                <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Tamaño</label>
                <select value={tamano} onChange={e => setTamano(e.target.value as Tamano)} className={inp + " cursor-pointer"}>
                  {TAMANOS.map(t => <option key={t} value={t} style={{ background:"#1A0900" }}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Tipo</label>
                <select value={tipo} onChange={e => setTipo(e.target.value as "Para llevar" | "A domicilio")}
                  className={inp + " cursor-pointer"}>
                  <option style={{ background:"#1A0900" }}>Para llevar</option>
                  <option style={{ background:"#1A0900" }}>A domicilio</option>
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <label className="block font-sans text-[9px] tracking-[.2em] uppercase text-parchment/35 mb-1.5">Extras / Notas</label>
          <textarea rows={2} value={extras} onChange={e => setExtras(e.target.value)}
            placeholder="Sin cebolla, extra queso, dirección..."
            className={inp + " resize-none"} />
        </div>

        <motion.button type="submit" whileHover={{ scale:1.02 }} whileTap={{ scale:.98 }}
          className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-sans text-[10px] font-semibold tracking-[.22em] uppercase py-4 rounded-sm transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
          </svg>
          Enviar Pedido por WhatsApp
        </motion.button>

        <AnimatePresence>
          {enviado && (
            <motion.p initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              className="text-center font-sans text-xs text-[#25D366] tracking-wide pt-1">
              ✅ ¡WhatsApp abierto con tu pedido!
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────
//  COMPONENTE PRINCIPAL — Order Hub
// ─────────────────────────────────────────
export default function OrderHub() {
  const [zone, setZone] = useState<Zone>(null);

  // Emojis flotantes decorativos
  const floats = ["🍕","🌶️","🍝","🫒","🌿","🧄","🍅","🫙"];

  return (
    <section id="ordenar" className="relative overflow-hidden">
      {/* Línea divisoria entre secciones */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />

      {/* ══════════════════════════════════════
          SELECTOR DE ZONA — siempre visible
      ══════════════════════════════════════ */}
      <div className="grid grid-cols-2 min-h-[320px] md:min-h-[360px]">

        {/* ── RESERVA — fondo claro ── */}
        <motion.div
          onClick={() => zone !== "reserva" && setZone("reserva")}
          className={`relative flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden transition-all duration-500 section-linen ${
            zone === "reserva" ? "min-h-[200px] md:min-h-[260px]" : "min-h-[320px] md:min-h-[360px]"
          }`}
          whileHover={zone !== "reserva" ? { scale: 1.02 } : {}}
        >
          {/* Fondo hover */}
          <motion.div className="absolute inset-0 bg-tomato/5"
            initial={{ opacity:0 }} whileHover={{ opacity:1 }} transition={{ duration:.3 }} />

          {/* Emojis flotantes — solo lado izquierdo */}
          {floats.slice(0,4).map((e, i) => (
            <motion.span key={i} className="absolute text-xl pointer-events-none select-none"
              style={{ left:`${10 + i*22}%`, bottom:`${8 + (i%2)*12}%` }}
              animate={{ y:[0,-40,-80], opacity:[0,.15,0], rotate:[0,10,-10] }}
              transition={{ duration:5+i*.8, repeat:Infinity, repeatDelay:i*.5, ease:"easeInOut" }}>
              {e}
            </motion.span>
          ))}

          <motion.div className="text-center relative z-10 px-8"
            animate={zone === "reserva" ? { scale:.85, opacity:.6 } : { scale:1, opacity:1 }}>
            <motion.span className="text-5xl md:text-6xl mb-3 block"
              animate={zone !== "reserva" ? { rotate:[0,-5,5,0] } : {}}
              transition={{ duration:3, repeat:Infinity, repeatDelay:3 }}>
              🍽️
            </motion.span>
            <p className="font-display text-[clamp(2rem,4vw,3.5rem)] italic font-semibold text-ink leading-none">
              Reservar
            </p>
            <p className="font-sans text-xs tracking-[.18em] uppercase text-muted mt-2">
              Asegura tu mesa
            </p>
            {zone !== "reserva" && (
              <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                className="mt-4 inline-block border border-tomato/40 text-tomato font-sans text-[10px] font-semibold tracking-[.2em] uppercase px-5 py-2 rounded-sm">
                Seleccionar →
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Divisor vertical dorado */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-20 pointer-events-none" />

        {/* ── PEDIDO — fondo oscuro ── */}
        <motion.div
          onClick={() => zone !== "pedido" && setZone("pedido")}
          className={`relative flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden transition-all duration-500 section-wood ${
            zone === "pedido" ? "min-h-[200px] md:min-h-[260px]" : "min-h-[320px] md:min-h-[360px]"
          }`}
          whileHover={zone !== "pedido" ? { scale: 1.02 } : {}}
        >
          <motion.div className="absolute inset-0 bg-gold/5"
            initial={{ opacity:0 }} whileHover={{ opacity:1 }} transition={{ duration:.3 }} />

          {floats.slice(4).map((e, i) => (
            <motion.span key={i} className="absolute text-xl pointer-events-none select-none"
              style={{ right:`${10 + i*22}%`, bottom:`${8 + (i%2)*12}%` }}
              animate={{ y:[0,-40,-80], opacity:[0,.15,0], rotate:[0,-10,10] }}
              transition={{ duration:5+i*.8, repeat:Infinity, repeatDelay:i*.5+.3, ease:"easeInOut" }}>
              {e}
            </motion.span>
          ))}

          <motion.div className="text-center relative z-10 px-8"
            animate={zone === "pedido" ? { scale:.85, opacity:.6 } : { scale:1, opacity:1 }}>
            <motion.span className="text-5xl md:text-6xl mb-3 block"
              animate={zone !== "pedido" ? { rotate:[0,8,-8,0] } : {}}
              transition={{ duration:2.5, repeat:Infinity, repeatDelay:3 }}>
              🍕
            </motion.span>
            <p className="font-display text-[clamp(2rem,4vw,3.5rem)] italic font-semibold text-parchment leading-none">
              Pedir
            </p>
            <p className="font-sans text-xs tracking-[.18em] uppercase text-parchment/40 mt-2">
              Ordena tu platillo
            </p>
            {zone !== "pedido" && (
              <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                className="mt-4 inline-block border border-gold/30 text-gold font-sans text-[10px] font-semibold tracking-[.2em] uppercase px-5 py-2 rounded-sm">
                Seleccionar →
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          FORMULARIO — aparece al seleccionar
      ══════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        {zone === "reserva" && (
          <motion.div
            key="reserva"
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }}
            transition={{ duration:.45, ease:"easeOut" }}
            className="section-linen border-t border-gold/15"
          >
            <div className="max-w-3xl mx-auto">
              <FormReserva onClose={() => setZone(null)} />
            </div>
          </motion.div>
        )}

        {zone === "pedido" && (
          <motion.div
            key="pedido"
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }}
            transition={{ duration:.45, ease:"easeOut" }}
            className="section-wood border-t border-gold/10"
          >
            <div className="max-w-3xl mx-auto">
              <FormPedido onClose={() => setZone(null)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Info rápida — siempre al fondo ── */}
      <div className="section-wood border-t border-gold/10 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {[
            { icon:"📍", text: site.direccion.split(",")[0] },
            { icon:"🕐", text: site.horario },
            { icon:"📞", text: site.telefono },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2 text-parchment/35">
              <span className="text-sm">{item.icon}</span>
              <span className="font-sans text-[10px] tracking-[.14em] uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
