var feedbackShowButtonElement=document.querySelector(".about-us__contacts  .info__button"),popupFeedbackElement=document.querySelector(".popup--feedback"),closeFeedbackButtonElement=document.querySelector(".popup--feedback .popup__button--close"),mapOpenElement=document.querySelector(".info__map"),mapElement=document.querySelector(".popup--map"),closeMapButtonElement=document.querySelector(".popup--map .popup__button--close"),promoSliderElement=document.querySelector(".promo__slider"),advantagesListElement=document.querySelector(".advantages__list");feedbackShowButtonElement.addEventListener("click",function(){popupFeedbackElement.classList.remove("hidden")}),closeFeedbackButtonElement.addEventListener("click",function(){popupFeedbackElement.classList.add("hidden")}),mapOpenElement.addEventListener("click",function(e){e.preventDefault(),mapElement.classList.remove("hidden")}),closeMapButtonElement.addEventListener("click",function(){mapElement.classList.add("hidden")}),promoSliderElement.addEventListener("click",function(e){const t=document.querySelector(".promo__item--current"),n=document.querySelector(".promo__slide--current"),c=document.querySelector("."+e.target.value);t.classList.remove("promo__item--current"),t.classList.add("hidden"),c.classList.remove("hidden"),c.classList.add("promo__item--current"),n.classList.remove("promo__slide--current"),e.target.classList.add("promo__slide--current")}),advantagesListElement.addEventListener("click",function(e){e.preventDefault();var t=Array.prototype.slice.call(e.target.classList).filter(function(e){return-1!==e.indexOf("advantages__item--")})[0],n=document.querySelector(".details--current"),c=document.querySelector(".advantages__details.details--"+t.split("--")[1]),a=document.querySelector(".advantages__item--active");n.classList.add("hidden"),n.classList.remove("details--current"),c.classList.remove("hidden"),c.classList.add("details--current"),a.classList.remove("advantages__item--active"),e.target.classList.add("advantages__item--active")});