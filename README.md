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

## ✏️ ¿Cómo personalizar?

### Datos del negocio y menú
Edita **`src/data/site.ts`** — todo está centralizado ahí:
- Nombre, teléfono, WhatsApp, dirección, horario
- Redes sociales
- Lista de pizzas (agrega, quita o cambia precios)

### Colores
Edita **`tailwind.config.ts`** en la sección `colors`:
```ts
ember:  "#E8300A",   // rojo principal
gold:   "#F5A421",   // dorado/acentos
cream:  "#F7EDE0",   // texto claro
```

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

---

## 🌐 Deploy (poner en línea gratis)

### Opción 1: Vercel (recomendado, 100% gratis)
1. Sube el proyecto a GitHub
2. Ve a https://vercel.com
3. Conecta tu repositorio → Deploy
4. Obtienes URL pública en minutos

### Opción 2: Render.com
1. Sube a GitHub
2. New Web Service → Node → Build: `npm run build` → Start: `npm start`

---

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
