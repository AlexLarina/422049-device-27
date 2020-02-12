const catalogOpenElement = document.querySelector('.navigation__open');
const catalogListElement = document.querySelector('.header__row:last-of-type');

catalogOpenElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  catalogListElement.classList.toggle('hidden');
});
