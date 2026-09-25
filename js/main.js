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

// Testimonials carousel
const testimonials = [
  {
    name: 'Carolina Stones',
    text: 'Empecé sin saber sostener una máquina y hoy trabajo en un estudio. Los profesores te corrigen cada línea y te dejan practicar desde el primer día.',
  },
  {
    name: 'Javier López',
    text: 'Grupos pequeños y profesores que tatúan de verdad. En tres meses pasé de dibujar en papel a hacer mis primeros tatuajes.',
  },
  {
    name: 'Sara Prieto',
    text: 'Lo mejor es la práctica: pieles sintéticas desde la primera semana y sesiones reales al final del curso. Muy recomendable.',
  },
];
let current = 0;
const quote = document.querySelector('.quote');
const show = (i) => {
  current = (i + testimonials.length) % testimonials.length;
  quote.querySelector('cite').textContent = testimonials[current].name;
  quote.querySelector('p').textContent = testimonials[current].text;
};
document.querySelector('.quote-nav.prev').addEventListener('click', () => show(current - 1));
document.querySelector('.quote-nav.next').addEventListener('click', () => show(current + 1));

// Placeholder: the newsletter form has no backend yet.
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form-note').textContent = '¡Gracias! Te escribimos con las fechas y la información del curso.';
  e.target.reset();
});
