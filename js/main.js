const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

toggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

mobileNav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  })
);

document.getElementById('year').textContent = new Date().getFullYear();

// Testimonials carousel: the centre avatar always shows whoever is speaking,
// and the four side avatars show the neighbours in the ring.
const testimonials = [
  {
    name: 'Carolina Stones',
    photo: 'img/avatar-center.webp',
    text: 'Empecé sin saber sostener una máquina y hoy trabajo en un estudio. Los profesores te corrigen cada línea y te dejan practicar desde el primer día.',
  },
  {
    name: 'Sara Prieto',
    photo: 'img/avatar-4.webp',
    text: 'Lo mejor es la práctica: pieles sintéticas desde la primera semana y sesiones reales al final del curso. Muy recomendable.',
  },
  {
    name: 'Marcos Gil',
    photo: 'img/avatar-5.webp',
    text: 'Venía de aprender con vídeos y tenía muchos vicios. En un mes me los quitaron todos y por fin mis líneas salen limpias.',
  },
  {
    name: 'Lucía Ramos',
    photo: 'img/avatar-2.webp',
    text: 'Me daba pánico no dibujar bien. Empezamos desde lo más básico y nadie te mete prisa. Ahora tengo mi propio portfolio.',
  },
  {
    name: 'Javier López',
    photo: 'img/avatar-3.webp',
    text: 'Grupos pequeños y profesores que tatúan de verdad. En tres meses pasé de dibujar en papel a hacer mis primeros tatuajes.',
  },
];
const quote = document.querySelector('.quote');
const cite = quote.querySelector('cite');
const quoteText = quote.querySelector('p');
// Slots in visual order: two left, centre, two right
const slots = [...document.querySelectorAll('.avatars .avatar')];
const offsets = [-2, -1, 0, 1, 2];
const at = (i) => testimonials[(i + testimonials.length) % testimonials.length];
let current = 0;

const render = () => {
  slots.forEach((img, k) => {
    const t = at(current + offsets[k]);
    img.src = t.photo;
    img.alt = offsets[k] === 0 ? t.name : `Ver la opinión de ${t.name}`;
  });
  cite.textContent = at(current).name;
  quoteText.textContent = at(current).text;
};

const show = (i) => {
  current = (i + testimonials.length) % testimonials.length;
  quote.classList.add('is-changing');
  setTimeout(() => {
    render();
    quote.classList.remove('is-changing');
  }, 180);
};

document.querySelector('.quote-nav.prev').addEventListener('click', () => show(current - 1));
document.querySelector('.quote-nav.next').addEventListener('click', () => show(current + 1));
slots.forEach((img, k) => img.addEventListener('click', () => offsets[k] && show(current + offsets[k])));

// Swipe on touch screens
let touchX = null;
quote.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
quote.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
  touchX = null;
});

// Keep the card the same height for every testimonial so the arrows don't jump (mobile layout)
const mobile = window.matchMedia('(max-width: 899px)');
const fixHeight = () => {
  quote.style.minHeight = '';
  if (!mobile.matches) return;
  let max = 0;
  testimonials.forEach((t) => {
    cite.textContent = t.name;
    quoteText.textContent = t.text;
    max = Math.max(max, quote.offsetHeight);
  });
  render();
  quote.style.minHeight = `${max}px`;
};
render();
fixHeight();
window.addEventListener('resize', fixHeight);

// Placeholder: the newsletter form has no backend yet.
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form-note').textContent = '¡Gracias! Te escribimos con las fechas y la información del curso.';
  e.target.reset();
});
