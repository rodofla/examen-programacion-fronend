# Programación Front End

Este proyecto es una aplicación de ejemplo en Vue.js que permite:

- Calcular el promedio ponderado de tres notas y determinar si el alumno está aprobado o reprobado según asistencia.
- Registrar usuarios mediante un formulario con validaciones de nombre, correo y contraseñas.

## 📁 Estructura de carpetas

```
examen-programacion-fronend/
├─ index.html           # Punto de entrada HTML (raíz)
├─ vite.config.js       # Configuración de Vite
├─ package.json
├─ README.md            # Documentación (este archivo)
└─ src/
   ├─ main.js           # Arranque de la app y bootstrap
   ├─ assets/
   │  └─ global.css     # Estilos globales
   ├─ App.vue           # Componente raíz con navbar y enrutamiento de pestañas
   ├─ components/       # Componentes reutilizables
   │  ├─ NavLink.vue
   │  ├─ Calificaciones.vue
   │  ├─ Registro.vue
   │  └─ EnConstruccion.vue
   └─ services/         # Lógica de validación
      └─ validation.js
```

## 🚀 Instalación y primer arranque

1. Clona este repositorio:
   ```bash
   git clone <url-del-proyecto>
   cd examen-programacion-fronend
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en `http://localhost:5173`.

## 🧩 Scripts disponibles

- `npm run dev` : Inicia servidor en modo desarrollo.
- `npm run build` : Construye para producción en `dist/`.
- `npm run preview` : Sirve la carpeta `dist/` para pruebas.

## 📦 Dependencias principales

- [Vue.js 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)

## 🔧 Patrones y arquitectura

- **Componentes**: un componente por responsabilidad (`NavLink`, `Calificaciones`, `Registro`, `EnConstruccion`).
- **Services**: lógica de validación independiente en `src/services/validation.js`.
- **Alias** `@` configurado en Vite para apuntar a `src/`.

## 📋 Validaciones en el formulario de registro

- El nombre y correo son obligatorios.
- El correo debe tener un formato válido.
- Contraseña y repetir contraseña son obligatorios y deben coincidir.
- Se muestran mensajes inline de error.
- Al completar correctamente, se muestra un alert de éxito.

## 🌐 Despliegue

El proyecto puede desplegarse fácilmente en Netlify, Vercel u otro servicio estático, apuntando al directorio generado por `npm run build`.

---

© 2025 Proyecto de Programación Front End con Vue.js