```{=html}
<p align="center">
```
`<img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" alt="React Logo" width="120"/>`{=html}
`<img src="https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png" alt="TS Logo" width="120"/>`{=html}
`<img src="https://raw.githubusercontent.com/github/explore/main/topics/supabase/supabase.png" alt="Supabase Logo" width="120"/>`{=html}
```{=html}
</p>
```
```{=html}
<h1 align="center">
```
🛒 Ecommerce con React, TypeScript y Supabase
```{=html}
</h1>
```
Proyecto de **comercio electrónico** creado con **React**,
**TypeScript** y **Supabase**\
Este repositorio tiene como objetivo poner en práctica conceptos de
desarrollo web moderno: frontend con tipado fuerte, backend en la nube y
manejo de datos en tiempo real.

------------------------------------------------------------------------

## 🚀 Funcionalidades principales

-   🔐 **Autenticación de usuarios** (registro, login, logout) con
    Supabase.\
-   🛍️ **Gestión de productos**: listado, búsqueda y detalle de cada
    ítem.\
-   🛒 **Carrito de compras**: agregar, quitar y ver resumen de
    productos.\
-   📦 **Gestión de pedidos** (checkout e historial).\
-   📱 **Interfaz responsive** optimizada para móviles y escritorio.

------------------------------------------------------------------------

## 🛠️ Tecnologías utilizadas

-   **Frontend** → React + TypeScript\
-   **Backend & DB** → Supabase (Postgres, autenticación, storage)\
-   **Estilos** → TailwindCSS\
-   **Manejo de estado** → Hooks y Context API

------------------------------------------------------------------------

## 📂 Estructura del proyecto

    /src
      /components     -> Componentes reutilizables
      /pages          -> Páginas principales
      /services       -> Conexión a Supabase y lógica de datos
      /hooks          -> Hooks personalizados
      /contexts       -> Contextos globales (auth, carrito, etc.)
      /utils          -> Funciones auxiliares
      /styles         -> Estilos globales
    /public

------------------------------------------------------------------------

## ⚡ Instalación y uso

1.  **Clonar repositorio**

    ``` bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2.  **Instalar dependencias**

    ``` bash
    npm install
    # o yarn
    ```

3.  **Configurar variables de entorno**\
    Crear un archivo `.env` con tus credenciales de Supabase:

    ``` bash
    VITE_SUPABASE_URL=tu_url
    VITE_SUPABASE_ANON_KEY=tu_key
    ```

4.  **Ejecutar en modo desarrollo**

    ``` bash
    npm run dev
    ```

5.  **Build para producción**

    ``` bash
    npm run build
    ```

------------------------------------------------------------------------

## 📖 Aprendizaje y objetivos

Este proyecto fue creado con fines educativos, para:\
- Mejorar el dominio de **React con TypeScript**.\
- Aprender integración de un **backend como servicio (Supabase)**.\
- Aplicar buenas prácticas de arquitectura y escalabilidad en proyectos
frontend.

------------------------------------------------------------------------

## 📜 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.\
Podés usarlo, modificarlo y adaptarlo libremente.
