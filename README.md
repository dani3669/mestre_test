# Mestre Tattoo Studio

Landing page estática (HTML + CSS + JS) para un estudio de tatuajes, basada en el mockup
[Tattoo Salon Landing Page UI (Figma)](https://www.figma.com/design/jw1jRTr1sVOnV7SyjjXeaE/Tatoo-Salon-Landing-Page-UI-FREEBIE--Community-?node-id=13-2998).

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
```

## Estructura

- `index.html`: secciones (inicio, nosotros, servicios, galería, artistas, precios, opiniones, contacto)
- `css/styles.css`: estilos y colores (variables en `:root`)
- `js/main.js`: menú móvil y formulario de contacto

Las imágenes son marcadores de posición con degradados; sustitúyelas por fotos reales
añadiendo `background-image: url(...)` a `.hero-image`, `.g-*` y `.a-*`.
