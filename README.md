<div align="center">

# 🏨 Hotel Valle Real

**Dashboard de gestión hotelera con Angular Routing**

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Completado-35B887)

</div>

---

## 📖 Descripción

Aplicación web individual desarrollada con **Angular** para la actividad *Desarrollo de un Dashboard con Angular Routing*. Simula el panel de administración de un **Sistema de Hotel**, permitiendo navegar entre habitaciones, huéspedes y reservas sin recargar la página.

## ✨ Características

- 🧭 Menú lateral fijo con opción activa resaltada (`RouterLinkActive`)
- 🖼️ Área principal dinámica con `RouterOutlet`
- 📊 Tarjetas KPI con indicadores clave del hotel
- 🛏️ Tipos de habitación y estado de cada una
- 👥 Registro de huéspedes
- 📅 Control de reservas con estados (confirmada, pendiente, cancelada)
- 🚫 Ruta comodín `**` con página 404 personalizada
- 📱 Diseño adaptable a pantallas pequeñas

## 🗺️ Rutas

| Ruta            | Componente              | Descripción                         |
| --------------- | ----------------------- | ----------------------------------- |
| `/inicio`       | `InicioComponent`       | Bienvenida y tarjetas resumen       |
| `/habitaciones` | `HabitacionesComponent` | Tipos, tarifas y estado             |
| `/huespedes`    | `HuespedesComponent`    | Huéspedes registrados               |
| `/reservas`     | `ReservasComponent`     | Check-in, check-out y estados       |
| `**`            | `NoEncontradoComponent` | Página 404 para URLs inexistentes   |

## 🗂️ Estructura

```
src/app/
├── components/
│   └── layout/            → menú lateral, encabezado y router-outlet
├── pages/
│   ├── inicio/
│   ├── habitaciones/
│   ├── huespedes/
│   ├── reservas/
│   └── no-encontrado/
├── app.routes.ts          → configuración de rutas
└── app.config.ts
```

## 🚀 Ejecución local

```bash
git clone https://github.com/oscarsanchez0712/S13_SanchezAriasOscar.git
cd S13_SanchezAriasOscar
npm install
ng serve
```

Abre **http://localhost:4200** en tu navegador.

## 👤 Autor

**Oscar Sánchez Arias**
Estudiante de Ingeniería de Sistemas
GitHub: [@oscarsanchez0712](https://github.com/oscarsanchez0712)

---

<div align="center">Hecho con ❤️ y Angular</div>
