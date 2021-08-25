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
