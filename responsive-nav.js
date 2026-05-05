/* responsive-nav.js — añade botón hamburguesa al nav existente sin tocar el HTML */
(function () {
  function initBurger() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var navRight = nav.querySelector('.nav-right');
    if (!navRight) return;
    if (navRight.querySelector('.nav-burger')) return;

    var burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', 'Menú');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span></span>';

    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // close menu when a link inside is clicked
    var navLinks = nav.querySelector('.nav-links');
    if (navLinks) {
      navLinks.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          document.body.classList.remove('menu-open');
          burger.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // close on resize back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 640) {
        document.body.classList.remove('menu-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    navRight.appendChild(burger);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBurger);
  } else {
    initBurger();
  }
})();
