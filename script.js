"use strict";

const ratingContainer = document.querySelector(".card__numbers");
console.log(ratingContainer);
const ratingNumbers = document.querySelectorAll(".card__number");
console.log(ratingNumbers);

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
      ratingContainer.querySelector(".active").classList.remove("active");
      number.classList.add("active");
    });
  })
);
