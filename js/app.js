/* Menu Background & Scroll Top */
const navWrapper = document.querySelector('.nav-wrapper'),
  navLogo = document.querySelector('.nav-logo');

window.addEventListener('resize', () => {
  if (window.innerWidth < 992) {
    navLogo.classList.remove('show');
  } else if (window.innerWidth >= 992 && window.scrollY === 0) {
    navWrapper.classList.remove('show');
    navLogo.classList.add('show');

  }
});

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 992 && window.scrollY > 50) {
    navWrapper.classList.add('show');
    navLogo.classList.add('show');
  } else if (window.innerWidth >= 992 && window.scrollY < 100) {
    navWrapper.classList.remove('show');
    navLogo.classList.remove('show');
  }
});