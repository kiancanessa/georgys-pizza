import { site } from "@/data/site";

const items = [
  `🕐 ${site.horario}`,
  `📍 Rosarito, B.C.`,
  `📞 ${site.telefono}`,
  `🔥 Horno de Leña`,
  `🌾 Masa Artesanal`,
  `🍝 Pizza & Pasta`,
];

export default function Strip() {
  const doubled = [...items, ...items];
  return (
    <div className="relative bg-tomato overflow-hidden py-3 border-y border-tomato2">
      <div className="flex whitespace-nowrap animate-marquee gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="font-sans text-xs tracking-[.2em] uppercase text-cream/90 flex-shrink-0 flex items-center">
            {item}
            <span className="mx-8 text-cream/30 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
