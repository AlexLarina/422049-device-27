const feedbackShowButtonElement = document.querySelector('.about-us__contacts  .info__button');
const popupFeedbackElement = document.querySelector('.popup--feedback');
const closeFeedbackButtonElement = document.querySelector('.popup--feedback .popup__button--close');

const mapOpenElement = document.querySelector('.info__map');
const mapElement = document.querySelector('.popup--map');
const closeMapButtonElement = document.querySelector('.popup--map .popup__button--close');

const promoSliderElement = document.querySelector('.promo__slider');

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
    console.log(evt.target.value);

    const currentPromoSlide = document.querySelector('.promo__item--current');
    const currentButton = document.querySelector('.promo__slide--current');

    const clickedSlide = document.querySelector('.' + evt.target.value);
    currentPromoSlide.classList.remove('promo__item--current');
    currentPromoSlide.classList.add('hidden');
    
    clickedSlide.classList.remove('hidden');
    clickedSlide.classList.add('promo__item--current');

    currentButton.classList.remove('promo__slide--current');
    evt.target.classList.add('promo__slide--current');
});