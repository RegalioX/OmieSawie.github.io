"use strict";
const slideshowSlide = document.querySelectorAll(".slideshowSlide");

const dot = document.querySelectorAll(".dot");

let counter = 1;
slideFun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
  counter++;
  slideFun(counter);
}

function incrimentSlides(n) {
  counter += n;
  slideFun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slideFun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slideFun(n) {
  let i;
  for (i = 0; i < slideshowSlide.length; i++) {
    slideshowSlide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > slideshowSlide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = slideshowSlide.length;
  }
  slideshowSlide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

// --------------------------------------------------------------------------------------------------------------------------------

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     var x = document.getElementsByClassName("writeupBlock");
//     var

//     if (entry.isIntersecting) {
//       entry.target.x[1].classList.add("writeupBlock-animation");
//       return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     entry.target.x[1].classList.remove(x[1]);
//   });
// });

// observer.observe(document.getElementsByClassName('animationStabalizer'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target;

    if (entry.isIntersecting) {
      square.classList.add("writeupBlock-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("writeupBlock-animation");
  });
});

observer.observe(document.querySelectorAll(".writeupBlock")[0]);
observer.observe(document.querySelectorAll(".writeupBlock")[1]);
observer.observe(document.querySelectorAll(".writeupBlock")[2]);
observer.observe(document.querySelectorAll(".writeupBlock")[3]);
observer.observe(document.querySelectorAll(".writeupBlock")[4]);


// ---------------------------------------------------------------------------------------------------------------------------

// const observer = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('writeupBlock-animation');
//     }
//   });
// });

// observer.observe(document.querySelector('.writeupBlock'));

// const sectionOme = document.querySelector("section-1");
// const options = { } ;
// const observer = new IntersectionObserver(function (enteries, observer) {
//   enteries.forEach(entry=>{
//     console.log(entry);
//   })
// },
// options);
