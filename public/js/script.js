/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
import { addEventOnElems } from "./utils.js";


/**
 * search clear functionality
 */
const /** {HTMLElement} */ $searchField = document.querySelector('[data-search-field]');
const /** {HTMLElement} */ $searchClear = document.querySelector('[data-search-clear]');

$searchClear?.addEventListener('click', function() {
  $searchField.value = '';
})


/**
 * logo animation in mobile
 */
const $logo = document.querySelector('[data-logo]');

if (!sessionStorage.getItem('logoAnimated')) {
  $logo.classList.add('animate');
  sessionStorage.setItem('logoAnimated', true);
}


/**
 * menu toggle
 */
const /** {HTMLElement} */ $menuWrapper = document.querySelector('[data-menu-wrapper]');
const /** {HTMLElement} */ $menuToggler = document.querySelector('[data-menu-toggler]');

/*$menuToggler?.addEventListener('click', function() {
  $menuWrapper.classList.toggle('active');
})*/

// Función para ocultar el menú
const hideMenu = () => {
  $menuWrapper.classList.remove('active');
};

// Evento de clic en el botón de alternancia de menú
$menuToggler?.addEventListener('click', function(event) {
  event.stopPropagation(); // Evitar que el clic en el botón se propague al documento
  $menuWrapper.classList.toggle('active');
});

// Evento de clic en cualquier parte del documento
document.addEventListener('click', function(event) {
  const isMenuClicked = $menuWrapper.contains(event.target) || $menuToggler.contains(event.target);
  
  if (!isMenuClicked) {
    hideMenu();
  }
});

// Evento de clic en el menú (para evitar que se cierre al hacer clic dentro del menú)
$menuWrapper.addEventListener('click', function(event) {
  event.stopPropagation(); // Evitar que el clic en el menú se propague al documento
});

// También puedes agregar un controlador de eventos de teclado para cerrar el menú al presionar la tecla "Esc"
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && $menuWrapper.classList.contains('active')) {
    hideMenu();
  }
});


/**
 * hide top bar on scroll down
 */
const /** {HTMLElement} */ $page = document.querySelector('[data-page]');
let /** {number} */ lastScrollPos = 0;

$page?.addEventListener('scroll', function() {
  if (lastScrollPos < this.scrollTop) {
    this.classList.add('header-hide');
  } else {
    this.classList.remove('header-hide');
  }
  lastScrollPos = this.scrollTop;
});


/**
 * ripple effect
 */
const ripple = function ($rippleElem) {
  $rippleElem.addEventListener('pointerdown', function(event) {
    event.stopImmediatePropagation();

    const /** {HTMLElement} */ $ripple = document.createElement('div');
    $ripple.classList.add('ripple');

    this.appendChild($ripple);

    const removeRipple = () => {
      $ripple.animate({
        opacity: 0
      }, { fill: 'forwards', duration: 200 });

      setTimeout(() => {
        $ripple.remove();
      }, 1000);
    }

    this.addEventListener('pointerup', removeRipple);
    this.addEventListener('pointerleave', removeRipple);

    const /** {number} */  rippleSize = Math.max(this.clientWidth, this.clientHeight);

    $ripple.style.top = `${event.layerY}px`;
    $ripple.style.left = `${event.layerX}px`;
    $ripple.style.width = `${rippleSize}px`;
    $ripple.style.height = `${rippleSize}px`;

  });
}

const /** {HTMLElement} */  $rippleElems = document.querySelectorAll('[data-ripple]');
$rippleElems?.forEach(item => ripple(item));


/**
 * image animation on loading
 */
window.addEventListener('DOMContentLoaded', function() {
  const /** {Array<HTMLElement>} */ $animatedImages = document.querySelectorAll('[data-image-load-anim]');

  const addAnimation = function() {
    this.animate({
      opacity: 1
    }, { duration: 200, fill: 'forwards' });
  }

  $animatedImages.forEach($image => {
    $image.style.opacity = 0;

    if ($image.complete) {
      addAnimation.call($image);
    } else {
      $image.addEventListener('load', addAnimation);
    }
  })
});


/**
 * bottom nav item active
 */
const /** {Array<HTMLElement>} */ $bottomNavItems = document.querySelectorAll('[data-bottom-nav-item]');
const /** {Array<HTMLElement>} */ $activeBottomNavItem = document.querySelector('[data-bottom-nav-item].active');

const activeNavItem = function() {
  $activeBottomNavItem?.classList.remove('active');
  this.classList.add('active');
}

$bottomNavItems && addEventOnElems($bottomNavItems, 'click', activeNavItem);


/**
 * player modal toggle
 */
const /** {HTMLElement} */ $modalPlayer = document.querySelector('[data-modal-player]');
const /** {Array<HTMLElement>} */ $modalPlayerTogglers = document.querySelectorAll('[data-modal-player-toggler]');
const /** {HTMLElement} */ $modalPlayerOverlay = document.querySelector('[data-player-overlay]');

const toggleModalPlayer = function() {
  $modalPlayer.classList.toggle('active');
  $modalPlayerOverlay.classList.toggle('active');
}

$modalPlayerTogglers && addEventOnElems($modalPlayerTogglers, 'click', toggleModalPlayer);


/**
 * back and forward functionality
 */
const $backBtn = document.querySelector('[data-back-btn]');
const $forwardBtn = document.querySelector('[data-forward-btn]');

$backBtn?.addEventListener('click', function() {
  window.history.back();
});

$forwardBtn?.addEventListener('click', function() {
  window.history.forward();
});


/**
 * add background color in list header when sticky on top
 */
const $listHeader = document.querySelector('[data-list-header]');

$page?.addEventListener('scroll', function() {
  if ($listHeader) {
    this.classList[$listHeader.offsetTop > 0 ? 'add' : 'remove']('list-header-active');
  }
});


/**
 * search filter item active
 */
const $searchFilterItems = document.querySelectorAll(['data-search-filter']);

const activeSearchFilterItem = function () {
  document.querySelector('[data-search-filter].active')?.classList.remove('active');
  this.classList.add('active');
}

$searchFilterItems && addEventOnElems($searchFilterItems, 'click', activeSearchFilterItem);