let slider = document.querySelector('.images');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let slides = slider.querySelectorAll('img');
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function updateSlider() {
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }

  if (slideIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (slideIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function showPreviousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
}

function showNextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    updateSlider();
  }
}

updateSlider();