// ═══════════════════════════════════════════
//  Georgy's Pizza y Pastas — Datos del negocio
//  Edita solo este archivo para personalizar
// ═══════════════════════════════════════════

export const site = {
  nombre:    "Georgy's Pizza y Pastas",
  slogan:    "Tradición italiana, sabor de Baja California",
  telefono:  "+52 1 661 147 5153",
  whatsapp:  "5216611475153",
  direccion: "Blvd. Benito Juárez, Rosarito, Baja California, México",
  horario:   "Mar–Dom  13:00 – 22:00",
  instagram: "georgys.pizzaypastas",
  facebook:  "georgyspizzaypastas",
  mapsLink:  "https://maps.google.com/?q=Rosarito+Baja+California",
} as const;

export type Categoria = "Pizza" | "Pasta" | "Lasagna" | "Panini";

export type Platillo = {
  nombre:      string;
  nombreEn?:   string;          // nombre en inglés (bilingüe)
  descripcion: string;
  precio:      number;
  categoria:   Categoria;
  tag:         string;
  foto?:       string;          // ruta en /public
  bestseller?: boolean;
};

// ── MENÚ (datos del menú v2) ──────────────────────────────────
export const menu: Platillo[] = [

  // ── PIZZAS ──────────────────────────────────────────────────
  {
    nombre:    "Peperoni",
    nombreEn:  "Pepperoni",
    descripcion: "Pepperoni premium, mozzarella y salsa de tomate",
    precio:    220,
    categoria: "Pizza",
    tag:       "Clásica",
    foto:      "/pizza2.jpg",
    bestseller: true,
  },
  {
    nombre:    "Champiñones",
    nombreEn:  "Mushroom",
    descripcion: "Champiñones frescos, mozzarella y salsa de tomate artesanal",
    precio:    220,
    categoria: "Pizza",
    tag:       "Vegetariana",
    foto:      "/pizza-champinones.jpg",
  },
  {
    nombre:    "Jamón",
    nombreEn:  "Ham",
    descripcion: "Jamón serrano, mozzarella y salsa de tomate",
    precio:    220,
    categoria: "Pizza",
    tag:       "Clásica",
    foto:      "/pizza1.jpg",
  },
  {
    nombre:    "Salami",
    nombreEn:  "Salami",
    descripcion: "Salami italiano, mozzarella y salsa de tomate",
    precio:    200,
    categoria: "Pizza",
    tag:       "Italiana",
    foto:      "/pizza3.jpg",
  },
  {
    nombre:    "Hawaiana",
    nombreEn:  "Hawaiian",
    descripcion: "Jamón, piña caramelizada y mozzarella",
    precio:    220,
    categoria: "Pizza",
    tag:       "Tropical",
    foto:      "/pizza4.jpg",
  },
  {
    nombre:    "Carnosa",
    nombreEn:  "Full-Meat",
    descripcion: "Jamón, peperoni, salami, chorizo y rajas de chile",
    precio:    220,
    categoria: "Pizza",
    tag:       "Especial",
    foto:      "/pizza-carnosa.jpg",
    bestseller: true,
  },
  {
    nombre:    "Italiana",
    nombreEn:  "Italian",
    descripcion: "Chile morrón, cebolla morada y salchicha italiana",
    precio:    200,
    categoria: "Pizza",
    tag:       "Italiana",
    foto:      "/pizza1.jpg",
  },

  // ── PASTAS ──────────────────────────────────────────────────
  {
    nombre:    "Alfredo",
    descripcion: "Crema, parmesano, mantequilla. Extra: Pollo +$30 · Camarón +$50",
    precio:    150,
    categoria: "Pasta",
    tag:       "Clásica",
    foto:      "/pasta1.jpg",
    bestseller: true,
  },
  {
    nombre:    "Boloñesa",
    descripcion: "Salsa de carne molida con tomate, hierbas y parmesano",
    precio:    150,
    categoria: "Pasta",
    tag:       "Popular",
    foto:      "/pasta1.jpg",
  },
  {
    nombre:    "Mantequilla",
    descripcion: "Fettuccini con mantequilla y parmesano. Extra: Pollo +$30 · Camarón +$50",
    precio:    150,
    categoria: "Pasta",
    tag:       "Simple",
    foto:      "/pasta1.jpg",
  },
  {
    nombre:    "Al Chipotle",
    descripcion: "Crema chipotle, parmesano con toque ahumado. Extra: Pollo +$30 · Camarón +$50",
    precio:    150,
    categoria: "Pasta",
    tag:       "Picante",
    foto:      "/pasta1.jpg",
  },

  // ── LASAGNAS ────────────────────────────────────────────────
  {
    nombre:    "Lasagna de Queso",
    nombreEn:  "Cheese Lasagna",
    descripcion: "Capas de pasta, queso mozzarella y bechamel artesanal",
    precio:    150,
    categoria: "Lasagna",
    tag:       "Clásica",
    foto:      "/lasagna.jpg",
  },
  {
    nombre:    "Lasagna Boloñesa",
    nombreEn:  "Bolognese Lasagna",
    descripcion: "Capas de pasta con carne molida, salsa de tomate y gratinado",
    precio:    150,
    categoria: "Lasagna",
    tag:       "Popular",
    foto:      "/lasagna.jpg",
    bestseller: true,
  },

  // ── PANINIS ─────────────────────────────────────────────────
  {
    nombre:    "Panini Salami",
    descripcion: "Salami, peperoni y jamón en pan artesanal",
    precio:    150,
    categoria: "Panini",
    tag:       "Clásico",
    foto:      "/pizza2.jpg",
  },
  {
    nombre:    "Panini Cebolla",
    descripcion: "Cebolla caramelizada y chile güerito en pan artesanal",
    precio:    150,
    categoria: "Panini",
    tag:       "Especial",
    foto:      "/pizza2.jpg",
  },
];

// ── BEBIDAS ──────────────────────────────────────────────────
export type Bebida = { nombre: string; nombreEn?: string; precio: number; desc?: string };
export const bebidas: Bebida[] = [
  { nombre: "Agua Fresca",              nombreEn: "Flavored Water",  precio: 40,  desc: "Guayaba, limón, jamaica, naranja" },
  { nombre: "Agua Natural 600ml",       nombreEn: "Water",           precio: 25  },
  { nombre: "Café Chico",               nombreEn: "Small Coffee",    precio: 50  },
  { nombre: "Coca-Cola",                                              precio: 30  },
  { nombre: "Sabores 400ml",            nombreEn: "Soda",            precio: 25  },
  { nombre: "Té de Frutos Rojos",       nombreEn: "Red Fruits Tea",  precio: 50  },
  { nombre: "Valle Frut 600ml",                                       precio: 30  },
];
