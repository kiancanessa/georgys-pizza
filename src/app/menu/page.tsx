import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú — Georgy's Pizza y Pastas | Rosarito B.C.",
  description: "Menú completo de Georgy's Pizza y Pastas. Pizzas, pastas, fettuccinis, lasagnas, paninis y bebidas. Rosarito, Baja California.",
};

// ── Datos del menú (copiados del menú físico) ──
const PIZZAS = [
  { name: "Peperoni",   desc: "" },
  { name: "Champiñones", desc: "" },
  { name: "Jamón",       desc: "" },
  { name: "Salami",      desc: "" },
  { name: "Hawaiana",    desc: "Jamón, piña y queso" },
  { name: "Mexicana",    desc: "Tocino, chorizo, peperoni y rajas de chile" },
  { name: "Carnosa",     desc: "Jamón, peperoni, salami, chorizo y rajas de chile" },
  { name: "Italiana",    desc: "Chile morrón, cebolla morada y salchicha italiana" },
];
const FETT   = ["Alfredo","Boloñesa","Mantequilla","Al Chipotle"];
const LASA   = ["Queso","Boloñesa"];
const PANINI = ["Salami","Peperoni y Jamón","Cebolla Caramelizada y Chile Guerito"];
const BEBIDAS = [
  { name: "Agua Fresca",               desc: "Guayaba, limón, jamaica, naranja", price: "$40" },
  { name: "Agua Natural 600ml",        desc: "",  price: "$25" },
  { name: "Café Chico",                desc: "",  price: "$50" },
  { name: "Café Grande",               desc: "",  price: "$70" },
  { name: "Coca-Cola 2lts",            desc: "",  price: "$50" },
  { name: "Coca-Cola 600ml",           desc: "",  price: "$30" },
  { name: "Coca-Cola Vidrio",          desc: "",  price: "$25" },
  { name: "Sabores 400ml",             desc: "",  price: "$25" },
  { name: "Té de Frutos Rojos Chico",  desc: "",  price: "$50" },
  { name: "Té de Frutos Rojos Grande", desc: "",  price: "$80" },
  { name: "Valle Frut 600ml",          desc: "",  price: "$30" },
];

// ── Componentes ──
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center my-6">
      <h2 className="font-display text-[clamp(2rem,5vw,3rem)] italic font-semibold text-tomato leading-none">
        {children}
      </h2>
      <div className="flex items-center gap-3 justify-center mt-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="text-gold text-xs">✦</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    </div>
  );
}

function Row({ name, desc, price }: { name: string; desc?: string; price?: string }) {
  return (
    <div className="flex items-start justify-between gap-2 py-2 border-b border-gold/10 last:border-0">
      <div className="flex-1">
        <p className="font-sans text-sm font-semibold text-ink tracking-wide">{name}</p>
        {desc && <p className="font-sans text-xs text-muted italic mt-0.5">{desc}</p>}
      </div>
      {price && (
        <span className="font-display text-xl text-tomato flex-shrink-0 leading-none mt-0.5">{price}</span>
      )}
    </div>
  );
}

function ListItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 border-b border-gold/10 last:border-0">
      <span className="w-1 h-1 rounded-full bg-tomato flex-shrink-0 mt-0.5" />
      <p className="font-sans text-sm text-ink">{name}</p>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="min-h-screen section-parchment">

      {/* ── Header ── */}
      <header className="section-wood text-center pt-10 pb-8 px-6">
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="Georgy's" width={90} height={90}
            className="rounded-full drop-shadow-[0_0_20px_rgba(201,146,42,.4)]" />
        </div>
        <h1 className="font-display text-[clamp(2rem,7vw,3.5rem)] italic font-semibold text-gold leading-none">
          Georgy&apos;s Pizza y Pastas
        </h1>
        <p className="font-sans text-xs tracking-[.22em] uppercase text-parchment/50 mt-2">
          Rosarito, Baja California · Horno de Leña
        </p>
        <div className="flex items-center gap-3 justify-center mt-4">
          <div className="h-px w-12 bg-gold/40" />
          <span className="text-gold/60 text-xs">✦ ✦ ✦</span>
          <div className="h-px w-12 bg-gold/40" />
        </div>
      </header>

      {/* ── Fotos ── */}
      <div className="grid grid-cols-3 gap-1">
        {["/pizza1.jpg","/pizza2.jpg","/pasta1.jpg"].map((src,i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <Image src={src} alt="Platillo" width={400} height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-auto px-5 pb-16">

        {/* ── PIZZAS ── */}
        <SectionTitle>Pizzas</SectionTitle>

        {/* Precios de tamaño */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { size:"Chica", price:"$130" },
            { size:"Grande", price:"$180" },
            { size:"Familiar", price:"$220" },
          ].map(s => (
            <div key={s.size}
              className="text-center bg-tomato/8 border border-tomato/20 rounded-sm py-2.5 px-1">
              <p className="font-display text-xl text-tomato leading-none">{s.price}</p>
              <p className="font-sans text-[10px] text-muted tracking-[.15em] uppercase mt-1">{s.size}</p>
            </div>
          ))}
        </div>
        <p className="font-sans text-xs text-muted italic text-center mb-4">
          Ingrediente extra +$20
        </p>

        <div className="vintage-card bg-cream p-4">
          {PIZZAS.map(p => <Row key={p.name} name={p.name} desc={p.desc} />)}
        </div>

        {/* Foto Carnosa */}
        <div className="mt-4 rounded-sm overflow-hidden">
          <Image src="/pizza2.jpg" alt="Pizza Carnosa" width={600} height={400}
            className="w-full h-44 object-cover" />
        </div>

        {/* ── FETTUCCINIS ── */}
        <SectionTitle>Fettuccinis</SectionTitle>
        <div className="vintage-card bg-cream p-4 mb-2">
          {FETT.map(n => <ListItem key={n} name={n} />)}
        </div>
        <div className="flex justify-between items-center px-1">
          <p className="font-sans text-xs text-muted italic">Ingrediente extra: Pollo +$30 · Camarón +$50</p>
          <span className="font-display text-2xl text-tomato">$150</span>
        </div>

        {/* ── LASAGNAS ── */}
        <SectionTitle>Lasagnas</SectionTitle>
        <div className="vintage-card bg-cream p-4 mb-2">
          {LASA.map(n => <ListItem key={n} name={n} />)}
        </div>
        <div className="flex justify-end px-1">
          <span className="font-display text-2xl text-tomato">$150</span>
        </div>

        {/* Foto pasta */}
        <div className="mt-4 rounded-sm overflow-hidden">
          <Image src="/pasta1.jpg" alt="Fettuccini" width={600} height={400}
            className="w-full h-44 object-cover" />
        </div>

        {/* ── PANINIS ── */}
        <SectionTitle>Paninis</SectionTitle>
        <div className="vintage-card bg-cream p-4 mb-2">
          {PANINI.map(n => <ListItem key={n} name={n} />)}
        </div>
        <div className="flex justify-end px-1">
          <span className="font-display text-2xl text-tomato">$150</span>
        </div>

        {/* ── BEBIDAS ── */}
        <SectionTitle>Bebidas</SectionTitle>
        <div className="vintage-card bg-cream p-4">
          {BEBIDAS.map(b => <Row key={b.name} name={b.name} desc={b.desc} price={b.price} />)}
        </div>

        {/* ── CTA WhatsApp ── */}
        <div className="mt-10 section-wood rounded-sm p-6 text-center border border-gold/15">
          <p className="font-script text-gold text-2xl mb-2">¿Listo para ordenar?</p>
          <a
            href="https://wa.me/5216611475153?text=Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8D%95"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-sans text-xs font-semibold tracking-[.2em] uppercase px-8 py-3.5 rounded-sm transition-all mt-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.847L.057 23.09l5.382-1.411A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.58 6.58 2.118 12 2.118c5.42 0 9.882 4.462 9.882 9.882 0 5.42-4.462 9.882-9.882 9.882z"/>
            </svg>
            Ordenar por WhatsApp
          </a>
          <p className="font-sans text-[10px] text-parchment/30 tracking-widest uppercase mt-4">
            Rosarito, B.C. · {"+52 1 661 147 5153"}
          </p>
        </div>
      </div>
    </div>
  );
}
