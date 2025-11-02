# 🚗 Cotizador de Seguros con React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📝 Descripción del Proyecto

Este proyecto es una Single-Page Application (SPA) desarrollada con React que ofrece una experiencia de usuario fluida e interactiva para la cotización de seguros de vehículos. La plataforma permite a los usuarios seleccionar la marca, el año y el tipo de plan para obtener un costo estimado al instante, aplicando modificadores de precio basados en las características seleccionadas.

La arquitectura se basa en componentes funcionales y un flujo de datos unidireccional, garantizando un código mantenible y escalable.

## ✨ Características Principales

- **Cotización Dinámica:** Cálculo en tiempo real del costo del seguro basado en la marca, año y plan del vehículo.
- **Validación de Formulario:** Controles para asegurar que todos los campos requeridos sean completados antes de procesar la cotización.
- **Gestión de Estado Asíncrona:** Simulación de operaciones de red con estados de carga (`loading`), proporcionando feedback visual al usuario a través de un spinner.
- **Arquitectura Basada en Componentes:** Interfaz modularizada con componentes reutilizables y responsabilidades bien definidas (`Card`, `Spinner`, `InsuranceForm`).
- **Animaciones Fluidas:** Integración de `react-transition-group` para presentar los resultados de la cotización con animaciones suaves, mejorando la experiencia de usuario.
- **Diseño Responsivo:** Interfaz adaptable a diferentes tamaños de pantalla gracias al uso de Tailwind CSS.

## 🛠️ Tecnologías Utilizadas

- **Framework:** React 18+
- **Lenguaje:** TypeScript y JSX
- **Bundler:** Vite
- **Estilos:** HTML5, CSS3 & Tailwind CSS.
- **Animaciones:** `react-transition-group`

## ⚙️ Instalación y Configuración

Sigue estos pasos para configurar el entorno de desarrollo local.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/kevincisnero01/cotizar-seguro-react.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
     cd cotizar-seguro-react
    ```
3.  **Instalar dependencias:**
    Este proyecto utiliza `npm` para la gestión de paquetes.
    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto:**
    Inicia el servidor de desarrollo de Vite.
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## 📂 Estructura del Proyecto

La estructura del proyecto está organizada para promover la modularidad y la escalabilidad.

```
src/
├── assets/              # Archivos estáticos como imágenes y fuentes
├── components/
│   ├── Insurance/       # Componentes relacionados con el formulario
│   │   └── InsuranceForm.jsx
│   ├── Quotation/       # Componentes para mostrar la cotización
│   │   ├── QuoteResult.jsx
│   │   └── QuoteSummary.jsx
│   ├── common/          # Componentes de UI reutilizables (Card, Spinner, etc.)
│   └── layout/          # Componentes de maquetación (Layout, Header, etc.)
├── helpers/             # Funciones de utilidad puras (cálculos, formato, etc.)
├── App.tsx              # Componente raíz de la aplicación
└── main.tsx             # Punto de entrada de la aplicación
```

---

Este proyecto sirve como una demostración práctica de conceptos fundamentales de React, como la gestión de estado con `useState`, el patrón de "levantamiento del estado" (state lifting), el renderizado condicional y la componentización.
