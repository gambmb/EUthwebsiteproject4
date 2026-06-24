
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if(toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:.12});
  reveals.forEach(el => obs.observe(el));

  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });

  const form = document.querySelector('#join-form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const n = document.querySelector('#form-notice');
      n.style.display = 'block';
      n.textContent = "Thanks for your interest in EU'th.";
      form.reset();
    });
  }
});
