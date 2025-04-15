let slider = document.querySelector('.images');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let slides = slider.querySelectorAll('img');
let slideIndex = 0;

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

function updateSlider() {
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}

function changeSlide(direction) {
  slideIndex = (slideIndex + direction + slides.length) % slides.length;
  updateSlider();
}

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerID = null;

start.addEventListener('click', () => {
    timerID = setInterval(() => {
        changeSlide(1)
    }, 3000);
});

stop.addEventListener('click', () => {
    clearInterval(timerID);
    timerID = null;
});

updateSlider();