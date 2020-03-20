var feedbackShowButtonElement = document.querySelector('.about-us__contacts  .info__button');
var popupFeedbackElement = document.querySelector('.popup--feedback');
var closeFeedbackButtonElement = document.querySelector('.popup--feedback .popup__button--close');

var mapOpenElement = document.querySelector('.info__map');
var mapElement = document.querySelector('.popup--map');
var closeMapButtonElement = document.querySelector('.popup--map .popup__button--close');

var promoSliderElement = document.querySelector('.promo__slider');
var advantagesListElement = document.querySelector('.advantages__list');

feedbackShowButtonElement.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupFeedbackElement.classList.remove('hidden');
    popupFeedbackElement.classList.add('popup--show');
});

closeFeedbackButtonElement.addEventListener('click', function() {
    popupFeedbackElement.classList.add('hidden');
    popupFeedbackElement.classList.remove('popup--show');
});

mapOpenElement.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapElement.classList.remove('hidden');
    mapElement.classList.add('popup--show');
});

closeMapButtonElement.addEventListener('click', function () {
    mapElement.classList.add('hidden');
    mapElement.classList.remove('popup--show');
});

promoSliderElement.addEventListener('click', function (evt) {
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

advantagesListElement.addEventListener('click', function (evt) {
    evt.preventDefault();
    var clickedAdvantage = Array.prototype.slice.call(evt.target.classList).filter(function (item) {
      return item.indexOf('advantages__item--') !== -1;
    })[0];

    var currentAdvantagesItem = document.querySelector('.details--current');
    var clickedAdvantageItem =  document.querySelector('.advantages__details.details--' + clickedAdvantage.split("--")[1]);
    var currentAdvantagesButton = document.querySelector('.advantages__item--active');

    currentAdvantagesItem.classList.add('hidden');
    currentAdvantagesItem.classList.remove('details--current');

    clickedAdvantageItem.classList.remove('hidden');
    clickedAdvantageItem.classList.add('details--current');

    currentAdvantagesButton.classList.remove('advantages__item--active');
    evt.target.classList.add('advantages__item--active');
});
