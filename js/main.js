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
    text: 'Hace poco tuve el placer de tatuarme en Mestre y no podría estar más contenta con toda la experiencia. De principio a fin, todo en este estudio superó mis expectativas.',
  },
  {
    name: 'Javier López',
    text: 'Un estudio impecable y un trato cercano. Entendieron exactamente lo que quería y el resultado es mejor de lo que imaginaba.',
  },
  {
    name: 'Sara Prieto',
    text: 'Me taparon un tatuaje antiguo que odiaba y ahora es mi favorito. Repetiré seguro.',
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
  document.querySelector('.form-note').textContent = '¡Gracias! Te has suscrito.';
  e.target.reset();
});
