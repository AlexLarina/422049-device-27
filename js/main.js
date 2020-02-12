const catalogOpenElement = document.querySelector('.navigation__open');
const catalogListElement = document.querySelector('.header__row:last-of-type');

const feedbackShowButtonElement = document.querySelector('.about-us__contacts  .info__button');
const popupFeedbackElement = document.querySelector('.popup--feedback');
const closeFeedbackButtonElement = popupFeedbackElement.querySelector('.popup--feedback .popup__button--close');

const mapOpenElement = document.querySelector('.info__map');
const mapElement = document.querySelector('.popup--map');
const closeMapButtonElement = mapElement.querySelector('.popup--map .popup__button--close');

catalogOpenElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  catalogListElement.classList.toggle('hidden');
});

feedbackShowButtonElement.addEventListener('click', () => {
  popupFeedbackElement.classList.remove('hidden');
});

closeFeedbackButtonElement.addEventListener('click', () => {
  popupFeedbackElement.classList.add('hidden');
});

mapOpenElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapElement.classList.remove('hidden');
});

closeMapButtonElement.addEventListener('click', () => {
  mapElement.classList.add('hidden');
});