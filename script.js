"use strict";

const cardWrapper = document.querySelector(".card__wrapper");
const ratingContainer = document.querySelector(".card__numbers");
console.log(ratingContainer);
const ratingNumbers = document.querySelectorAll(".card__number");
console.log(ratingNumbers);
const submitBtn = document.querySelector(".card__btn");
const thankYouCard = document.querySelector(".thankyou__wrapper");
const thankYouSelectedHml = document.querySelector(".thankyou__selected-text");

// ratingNumbers.forEach((number) =>
//   number.addEventListener("click", function () {
//     console.log(number.id);
//     ratingContainer.querySelector(".active").classList.remove("active");
//     number.classList.add("active");
//   })
// );

ratingNumbers.forEach((number) =>
  number.addEventListener("mouseover", function () {
    number.classList.add("card__number-hover");
    number.addEventListener("mouseout", function () {
      number.classList.remove("card__number-hover");
    });
    number.addEventListener("click", function () {
      console.log(number.id);
      thankYouSelectedHml.innerHTML = `
		<p class="thankyou__selected-text">You selected ${number.id} of 5</p>`;
      ratingContainer.querySelector(".active").classList.remove("active");
      number.classList.add("active");
    });
  })
);

submitBtn.addEventListener("click", function () {
  thankYouCard.style.display = "block";
  cardWrapper.style.display = "none";
  console.log(thankYouCard);
});
