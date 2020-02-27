const feedbackShowButtonElement = document.querySelector('.about-us__contacts  .info__button');
const popupFeedbackElement = document.querySelector('.popup--feedback');
const closeFeedbackButtonElement = document.querySelector('.popup--feedback .popup__button--close');

const mapOpenElement = document.querySelector('.info__map');
const mapElement = document.querySelector('.popup--map');
const closeMapButtonElement = document.querySelector('.popup--map .popup__button--close');

const promoSliderElement = document.querySelector('.promo__slider');
const advantagesListElement = document.querySelector('.advantages__list');

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

promoSliderElement.addEventListener('click', (evt) => {
    const currentPromoSlide = document.querySelector('.promo__item--current');
    const currentButton = document.querySelector('.promo__slide--current');

    console.log(evt);
    const clickedSlide = document.querySelector('.' + evt.target.value);
    currentPromoSlide.classList.remove('promo__item--current');
    currentPromoSlide.classList.add('hidden');

    clickedSlide.classList.remove('hidden');
    clickedSlide.classList.add('promo__item--current');

    currentButton.classList.remove('promo__slide--current');
    evt.target.classList.add('promo__slide--current');
});

advantagesListElement.addEventListener('click', (evt) => {
    const clickedAdvantage = Array.from(evt.target.classList).find((item) => {
      return item.includes('advantages__item--');
    });

    const currentAdvantagesItem = document.querySelector('.details--current');
    const clickedAdvantageItem =  document.querySelector('.advantages__details.details--' + clickedAdvantage.split("--")[1]);
    const currentAdvantagesButton = document.querySelector('.advantages__item--active');

    currentAdvantagesItem.classList.add('hidden');
    currentAdvantagesItem.classList.remove('details--current');

    clickedAdvantageItem.classList.remove('hidden');
    clickedAdvantageItem.classList.add('details--current');

    currentAdvantagesButton.classList.remove('advantages__item--active');
    evt.target.classList.add('advantages__item--active');
});
