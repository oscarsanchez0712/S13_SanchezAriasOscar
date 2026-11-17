 <div align="center">

# 🏨 Hotel Valle Real

**Sistema de gestión hotelera con Angular 19 y navegación dinámica**

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-35B887)

</div>

---

## 📖 Descripción

**Hotel Valle Real** es una aplicación web desarrollada con Angular 19 que simula un sistema de administración hotelera. Permite gestionar y visualizar información relacionada con habitaciones, huéspedes, reservas y actividades del establecimiento mediante una interfaz moderna, dinámica y adaptable.

El proyecto implementa Angular Routing para facilitar la navegación entre módulos sin necesidad de recargar la página, además de componentes reutilizables y servicios para organizar la lógica de la aplicación.

## ✨ Características principales

- 🧭 Navegación dinámica entre módulos mediante Angular Router.
- 🎨 Barra superior (Topbar) para mejorar la navegación y presentación.
- 📊 Dashboard principal con indicadores y resumen de información.
- 🛏️ Gestión de habitaciones, tipos, tarifas y estados.
- 👥 Gestión y visualización de huéspedes registrados.
- 📅 Administración de reservas y sus respectivos estados.
- 📋 Sección de actividades para visualizar información relacionada con el sistema.
- ⚙️ Servicios para organizar y centralizar la lógica de la aplicación.
- 🧩 Componentes y recursos compartidos para facilitar la reutilización.
- 🚫 Página personalizada de error 404 para rutas inexistentes.
- 📱 Diseño responsive adaptable a diferentes dispositivos.

## 🗺️ Módulos y navegación

| Ruta | Módulo | Descripción |
|---|---|---|
| `/inicio` | Inicio | Dashboard e indicadores generales |
| `/habitaciones` | Habitaciones | Gestión de habitaciones, tarifas y estados |
| `/huespedes` | Huéspedes | Registro y administración de huéspedes |
| `/reservas` | Reservas | Control de reservas, check-in y check-out |
| `/inicio/actividad` | Actividad | Visualización de actividades del sistema |
| `**` | No encontrado | Página personalizada para rutas inexistentes |

## 🗂️ Estructura del proyecto

```text
src/
└── app/
    ├── components/
    │   ├── layout/
    │   └── topbar/
    ├── pages/
    │   ├── inicio/
    │   │   └── actividad/
    │   ├── habitaciones/
    │   ├── huespedes/
    │   ├── reservas/
    │   └── no-encontrado/
    ├── services/
    ├── shared/
    ├── app.routes.ts
    ├── app.config.ts
    └── app.component.ts
```

## 🛠️ Tecnologías utilizadas

- **Angular 19:** desarrollo de la aplicación y componentes.
- **TypeScript 5.7:** programación y tipado.
- **HTML5:** estructura de las interfaces.
- **CSS3:** estilos y diseño responsive.
- **Angular Router:** navegación entre módulos.
- **Git y GitHub:** control de versiones y almacenamiento del código.

## 🚀 Instalación y ejecución local

Clona el repositorio:

```bash
git clone https://github.com/oscarsanchez0712/S13_SanchezAriasOscar.git
```

Ingresa a la carpeta:

```bash
cd S13_SanchezAriasOscar
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el proyecto:

```bash
ng serve
```

Abre el navegador en:

```text
http://localhost:4200
```

## 👤 Autor

**Oscar Sánchez Arias**

Estudiante de Ingeniería de Sistemas.

GitHub: [@oscarsanchez0712](https://github.com/oscarsanchez0712)

Repositorio: [S13_SanchezAriasOscar](https://github.com/oscarsanchez0712/S13_SanchezAriasOscar)

---

<div align="center">

**Desarrollado con ❤️ utilizando Angular 19**

</div>
