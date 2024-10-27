const mobileMenuButtonOpen = document.querySelector('.main-nav__button');
const mobileMenu = document.querySelector('.main-nav__list');

const openMobileMenu = () => {
  mobileMenuButtonOpen.classList.add('main-nav__button--opened');
  mobileMenu.style.display = 'flex';
  const mobileMenuButtonClose = document.querySelector('.main-nav__button--opened');
  mobileMenuButtonClose.addEventListener('click', closeMobileMenu);
};

function closeMobileMenu () {
  const mobileMenuButtonClose = document.querySelector('.main-nav__button--opened');
  mobileMenuButtonClose.classList.remove('main-nav__button--opened');
  mobileMenu.style = null;
  mobileMenuButtonClose.removeEventListener('click', closeMobileMenu);
}

const mobileMenuHandler = () => {
  mobileMenuButtonOpen.addEventListener('click', openMobileMenu);
};

export {mobileMenuHandler};
