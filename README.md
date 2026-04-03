# 🍕 Georgy's Pizza — Next.js 14 + TypeScript

Sitio web moderno y escalable para Georgy's Pizza, Rosarito BC.

---

## ✅ Lo que necesitas instalar ANTES de correrlo

### 1. Node.js 20 LTS
Descarga desde: https://nodejs.org/en/download
Elige la versión **LTS** (20.x).

Para verificar que está instalado:
```bash
node -v   # debe mostrar v20.x.x
npm -v    # debe mostrar 10.x.x
```

### 2. Editor de código
Recomendado: **VS Code** — https://code.visualstudio.com

---

## 🚀 Instalación y arranque

```bash
# 1. Entra a la carpeta del proyecto
cd georgys-next

# 2. Instala todas las dependencias (solo la primera vez)
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

---

## 📁 Estructura del proyecto

```
georgys-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Fuentes y metadata SEO
│   │   ├── page.tsx            ← Ensambla todas las secciones
│   │   ├── globals.css         ← Estilos base y animaciones
│   │   └── api/contact/
│   │       └── route.ts        ← API para el formulario de contacto
│   ├── components/
│   │   ├── Nav.tsx             ← Navegación fija + menú móvil
│   │   ├── Hero.tsx            ← Sección principal
│   │   ├── Strip.tsx           ← Marquee de información
│   │   ├── MenuSection.tsx     ← Grid de pizzas
│   │   ├── About.tsx           ← Historia del negocio
│   │   ├── Contact.tsx         ← Formulario y datos de contacto
│   │   └── Footer.tsx
│   └── data/
│       └── site.ts             ← ⭐ EDITA AQUÍ los datos del negocio
├── tailwind.config.ts          ← Colores y tipografía
├── package.json
└── tsconfig.json
```
## 📦 Stack

| Tecnología       | Versión | Para qué sirve                    |
|------------------|---------|-----------------------------------|
| Next.js          | 14.2.5  | Framework React con App Router    |
| TypeScript       | 5.5.4   | JavaScript tipado, menos errores  |
| Tailwind CSS     | 3.4.7   | Estilos utility-first             |
| Framer Motion    | 11.3.28 | Animaciones de scroll             |
| Node.js          | 20 LTS  | Runtime de JavaScript             |

---

Desarrollado en Rosarito, Baja California 🇲🇽

by Kian Saavedra Canessa
