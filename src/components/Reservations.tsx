"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

// ── Iconos SVG inline temáticos ──
const IconFlame = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.545 5.975 5.975 0 01-2.133-1A3.75 3.75 0 0012 18z"/>
  </svg>
);

// Elementos flotantes decorativos
const floatingItems = ["🍕","🌶️","🍝","🫒","🌿","🧄","🍅","🫙"];

// Variantes de animación para los campos del formulario
const fieldVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

// Variante para los elementos flotantes
const floatVariants = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: [0, 0.18, 0.12],
    y: [20, -60, -120],
    x: [0, (i % 2 === 0 ? 12 : -12), (i % 2 === 0 ? -8 : 8)],
    rotate: [0, i % 2 === 0 ? 15 : -15, i % 2 === 0 ? -10 : 10],
    transition: {
      duration: 6 + i * 0.7,
      repeat: Infinity,
      repeatDelay: i * 0.4,
      ease: "easeInOut",
    },
  },
});

export default function Reservations() {
  const [nombre,   setNombre]   = useState("");
  const [personas, setPersonas] = useState("2");
  const [fecha,    setFecha]    = useState("");
  const [hora,     setHora]     = useState("");
  const [ocasion,  setOcasion]  = useState("");
  const [notas,    setNotas]    = useState("");
  const [enviado,  setEnviado]  = useState(false);
  const [focused,  setFocused]  = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `🍽️ *RESERVACIÓN — Georgy's Pizza y Pastas*`,
      ``,
      `👤 *Nombre:* ${nombre}`,
      `👥 *Personas:* ${personas}`,
      `📅 *Fecha:* ${fecha}`,
      `🕐 *Hora:* ${hora}`,
      ocasion ? `🎉 *Ocasión:* ${ocasion}` : null,
      notas   ? `📝 *Notas:* ${notas}` : null,
      ``,
      `_Reservación desde georgyspizzaypastas.com_`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setEnviado(true);
    setTimeout(() => {
      setNombre(""); setPersonas("2"); setFecha("");
      setHora(""); setOcasion(""); setNotas(""); setEnviado(false);
    }, 5000);
  };

  const today = new Date().toISOString().split("T")[0];
  const horas = [
    "13:00","13:30","14:00","14:30","15:00","15:30",
    "16:00","16:30","17:00","17:30","18:00","18:30",
    "19:00","19:30","20:00","20:30","21:00","21:30",
  ];
  const ocasiones = [
    "Cumpleaños 🎂","Aniversario 💑","Reunión familiar 👨‍👩‍👧",
    "Cena de negocios 💼","Celebración 🥂","Otra ocasión",
  ];

  // Clase base para inputs
  const inputCls = (name: string) =>
    `w-full bg-parchment border-b-2 ${
      focused === name ? "border-tomato" : "border-gold/25"
    } focus:border-tomato px-0 py-2.5 text-ink font-sans text-sm placeholder:text-muted/40 outline-none transition-all duration-300 bg-transparent`;

  return (
    <section id="reservaciones" className="relative py-28 section-linen overflow-hidden">

      {/* ══ Elementos flotantes decorativos ══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingItems.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl select-none"
            style={{
              left:   `${8 + (i * 11.5) % 86}%`,
              bottom: `${5 + (i * 7) % 20}%`,
            }}
            variants={floatVariants(i)}
            initial="initial"
            animate="animate"
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Líneas ornamentales top/bottom */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Header animado ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          {/* Emoji horno animado */}
          <motion.div
            className="text-5xl mb-4 inline-block"
            animate={{ rotate: [0, -5, 5, -3, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            🍽️
          </motion.div>
          <p className="vintage-label mb-2">Te esperamos</p>
          <div className="accent-bar mx-auto" />
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] italic font-semibold text-ink mt-3 leading-none">
            Reserva tu Mesa
          </h2>
          <p className="font-sans text-xs tracking-[.18em] uppercase text-muted mt-4 max-w-sm mx-auto">
            Asegura tu lugar y llega a disfrutar sin esperar
          </p>

          {/* Flags italo-mexicanas */}
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="flex items-center justify-center gap-3 mt-5"
          >
            <span className="text-2xl">🇮🇹</span>
            <div className="flex items-center gap-1 text-gold/40">
              <div className="w-8 h-px bg-gold/30" />
              <span className="text-xs">✦</span>
              <div className="w-8 h-px bg-gold/30" />
            </div>
            <span className="text-2xl">🇲🇽</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Panel info izquierda ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Card horarios con animación al entrar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .1 }}
              className="vintage-card bg-cream p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-tomato"><IconFlame /></span>
                <h3 className="font-display text-xl italic font-semibold text-ink">Horarios</h3>
              </div>
              {[
                { dias: "Martes – Viernes", hrs: "13:00 – 22:00", abierto: true },
                { dias: "Sábado – Domingo", hrs: "13:00 – 23:00", abierto: true },
                { dias: "Lunes",            hrs: "Cerrado",        abierto: false },
              ].map((row, i) => (
                <motion.div key={row.dias}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .15 + i * .08 }}
                >
                  <div className="flex justify-between items-center py-2">
                    <span className="font-sans text-xs text-muted tracking-wide">{row.dias}</span>
                    <span className={`font-sans text-xs font-semibold ${row.abierto ? "text-ink" : "text-rust"}`}>
                      {row.hrs}
                    </span>
                  </div>
                  {i < 2 && <div className="h-px bg-gold/12" />}
                </motion.div>
              ))}
            </motion.div>

            {/* Card ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .25 }}
              className="vintage-card bg-cream p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">📍</span>
                <h3 className="font-display text-xl italic font-semibold text-ink">Ubicación</h3>
              </div>
              <p className="font-sans text-xs text-muted leading-relaxed mb-4 tracking-wide">
                {site.direccion}
              </p>
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-tomato hover:text-tomato2 font-sans text-[10px] font-semibold tracking-[.18em] uppercase transition-colors group">
                Ver en Google Maps
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>

            {/* Nota de política */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .4 }}
              className="font-sans text-[11px] text-muted/60 leading-relaxed tracking-wide italic px-1"
            >
              Reservaciones confirmadas vía WhatsApp. Grupos mayores de 8 personas,
              favor de llamar directamente.
            </motion.p>
          </motion.div>

          {/* ── Formulario derecha ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
            className="lg:col-span-3"
          >
            <div className="vintage-card bg-cream p-8 relative overflow-hidden">

              {/* Corner accent decorativo */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="80" cy="0" r="60" stroke="#B82C1A" strokeWidth="1"/>
                  <circle cx="80" cy="0" r="40" stroke="#C9922A" strokeWidth="1"/>
                  <circle cx="80" cy="0" r="20" stroke="#B82C1A" strokeWidth="1"/>
                </svg>
              </div>

              {/* Header del form */}
              <div className="flex items-center gap-3 mb-8">
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  🍽️
                </motion.span>
                <div>
                  <h3 className="font-display text-2xl italic font-semibold text-ink leading-none">
                    Hacer Reservación
                  </h3>
                  <p className="font-sans text-[10px] text-muted mt-1 tracking-wide">
                    Se abrirá WhatsApp con tu solicitud lista
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Nombre */}
                <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block font-sans text-[10px] tracking-[.22em] uppercase text-muted mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-tomato inline-block" />
                    Tu nombre *
                  </label>
                  <input type="text" required value={nombre}
                    onFocus={() => setFocused("nombre")} onBlur={() => setFocused(null)}
                    onChange={e => setNombre(e.target.value)}
                    placeholder="Carlos López"
                    className={inputCls("nombre")} />
                </motion.div>

                {/* Personas + Fecha */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block font-sans text-[10px] tracking-[.22em] uppercase text-muted mb-2 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-tomato inline-block" />
                      Personas *
                    </label>
                    <select required value={personas}
                      onFocus={() => setFocused("personas")} onBlur={() => setFocused(null)}
                      onChange={e => setPersonas(e.target.value)}
                      className={inputCls("personas") + " cursor-pointer"}>
                      {["1","2","3","4","5","6","7","8"].map(n => (
                        <option key={n} value={n}>{n} {n==="1" ? "persona" : "personas"}</option>
                      ))}
                      <option value="9+">9+ personas</option>
                    </select>
                  </motion.div>

                  <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <label className="block font-sans text-[10px] tracking-[.22em] uppercase text-muted mb-2 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-tomato inline-block" />
                      Fecha *
                    </label>
                    <input type="date" required min={today} value={fecha}
                      onFocus={() => setFocused("fecha")} onBlur={() => setFocused(null)}
                      onChange={e => setFecha(e.target.value)}
                      className={inputCls("fecha") + " cursor-pointer"} />
                  </motion.div>
                </div>

                {/* Hora */}
                <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block font-sans text-[10px] tracking-[.22em] uppercase text-muted mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-tomato inline-block" />
                    Hora *
                  </label>
                  <select required value={hora}
                    onFocus={() => setFocused("hora")} onBlur={() => setFocused(null)}
                    onChange={e => setHora(e.target.value)}
                    className={inputCls("hora") + " cursor-pointer"}>
                    <option value="">-- Selecciona una hora --</option>
                    {horas.map(h => <option key={h} value={h}>{h} hrs</option>)}
                  </select>
                </motion.div>

                {/* Ocasión */}
                <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block font-sans text-[10px] tracking-[.22em] uppercase text-muted mb-2">
                    ¿Qué celebran? <span className="text-muted/50">(opcional)</span>
                  </label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {ocasiones.map((o) => (
                      <motion.button
                        key={o}
                        type="button"
                        onClick={() => setOcasion(ocasion === o ? "" : o)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: .97 }}
                        className={`font-sans text-[10px] tracking-[.1em] px-3 py-1.5 rounded-sm border transition-all duration-200 ${
                          ocasion === o
                            ? "bg-tomato border-tomato text-cream shadow-glow"
                            : "bg-transparent border-gold/20 text-muted hover:border-tomato/40 hover:text-ink"
                        }`}
                      >
                        {o}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Notas */}
                <motion.div custom={5} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block font-sans text-[10px] tracking-[.22em] uppercase text-muted mb-2">
                    Peticiones especiales
                  </label>
                  <textarea rows={2} value={notas}
                    onFocus={() => setFocused("notas")} onBlur={() => setFocused(null)}
                    onChange={e => setNotas(e.target.value)}
                    placeholder="Zona preferida, decoración, alergias..."
                    className={inputCls("notas") + " resize-none"} />
                </motion.div>

                {/* Submit con animación */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: .98 }}
                  className="w-full flex items-center justify-center gap-2.5 bg-tomato hover:bg-tomato2 text-cream font-sans text-xs font-semibold tracking-[.22em] uppercase py-4 rounded-sm transition-colors shadow-warm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
                  </svg>
                  Confirmar por WhatsApp
                </motion.button>

                {/* Confirmación con animación de entrada */}
                <AnimatePresence>
                  {enviado && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: .95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: .95 }}
                      className="text-center bg-olive/8 border border-olive/20 rounded-sm p-4"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .15 }}
                        className="font-display text-xl italic text-olive"
                      >
                        ✅ ¡Reservación enviada!
                      </motion.p>
                      <p className="font-sans text-[11px] text-muted mt-1 tracking-wide">
                        Te confirmamos en breve por WhatsApp. ¡Gracias!
                      </p>
                      <motion.div
                        className="flex justify-center gap-1 mt-3 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .3 }}
                      >
                        {"🇮🇹🍕🍝🌶️🇲🇽".split("").map((c, i) => (
                          <motion.span key={i}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .4 + i * .07 }}
                          >{c}</motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
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
