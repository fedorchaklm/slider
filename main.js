let imgs = document.querySelectorAll(".slider .imgs img");
console.log(imgs);

let next = document.querySelector(".slider .buttons .next");
console.log(next);

let prev = document.querySelector(".slider .buttons .prev");
console.log(prev);

let current_slide = 0;

// let sum = function(a, b) {
//   return a + b;
// }
// console.log(sum(5));

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(6, 2));

next.addEventListener("click", function () {
  imgs[current_slide].style.opacity = 0;
  if (current_slide == imgs.length - 1) {
    current_slide = 0;
  } else {
    current_slide++;
  }
  imgs[current_slide].style.opacity = 1;
});

prev.addEventListener("click", function () {
  imgs[current_slide].style.opacity = 0;
  if (current_slide == 0) {
    current_slide = imgs.length - 1;
  } else {
    current_slide--;
  }
  imgs[current_slide].style.opacity = 1;
});
