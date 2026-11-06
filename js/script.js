const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const tabletCanvas = window.matchMedia('(min-width: 601px) and (max-width: 1024px)');

function fitDesignCanvas() {
  if (tabletCanvas.matches) {
    document.body.style.width = '768px';
    document.body.style.zoom = String(window.innerWidth / 768);
    document.body.style.margin = '';
  } else if (window.innerWidth <= 600 || window.innerWidth >= 1025) {
    document.body.style.width = '390px';
    document.body.style.zoom = window.innerWidth < 390
      ? String(window.innerWidth / 390)
      : '';
    document.body.style.margin = '0 auto';
  } else {
    document.body.style.width = '';
    document.body.style.zoom = '';
    document.body.style.margin = '';
  }
}

fitDesignCanvas();
window.addEventListener('resize', fitDesignCanvas, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});
