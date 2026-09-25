# Mestre Tattoo Studio

Landing page estática (HTML + CSS + JS) para una academia de tatuaje, basada en el mockup
[Tattoo Salon Landing Page UI (Figma)](https://www.figma.com/design/jw1jRTr1sVOnV7SyjjXeaE/Tatoo-Salon-Landing-Page-UI-FREEBIE--Community-?node-id=13-2998).

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
```

## Estructura

- `index.html`: secciones (portada, marcas, estudio y precios, opiniones, FAQ, newsletter y pie)
- `css/styles.css`: estilos y colores (variables en `:root`)
- `js/main.js`: menú móvil, carrusel de opiniones y newsletter

## Imágenes y fuentes

- `img/`: fotos, ilustraciones e iconos exportados del Figma (optimizados a WebP/JPG).
- `figma-assets/`: exportaciones originales del Figma, como referencia; no las usa la web.
- `fonts/grenze-gotisch.woff2`: sustituye a *Angel Rhapsody* (la fuente del mockup, que no es libre).
  El texto usa Satoshi desde Fontshare.

## Cómo está maquetada

En escritorio cada elemento se coloca con las coordenadas del frame del Figma
(`--x`, `--y`, `--w`, `--h` en `index.html`), escaladas con `--u`, así que la página
coincide con el mockup a cualquier ancho. Por debajo de 900px pasa a un diseño apilado.
