const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  })
);

document.getElementById('year').textContent = new Date().getFullYear();

// Placeholder: the form has no backend yet.
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.querySelector('.form-note').textContent =
    '¡Gracias! Te responderemos en menos de 24 horas.';
  e.target.reset();
});
