/* Slider */
const slides = document.querySelector('.slides');
const length = document.querySelectorAll('.slide').length - 1;
const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');
const sliderWidth = window.innerWidth;
const slider_duration = 2500;
let counter = 0;

function Slider() {
  if (counter < length) {
    counter++;
    slides.style.left = '-0' + sliderWidth * counter + 'px';
  } else {
    counter = 0;
    slides.style.left = '-0' + sliderWidth * counter + 'px';
  }
}

backBtn.addEventListener('click', () => {
  if (!counter <= 0) {
    counter--;
    slides.style.left = '-0' + sliderWidth * counter + 'px';
  }
});
nextBtn.addEventListener('click', Slider);

let slider_timer = setInterval(Slider, slider_duration);

slides.addEventListener('mouseover', () => {
  clearInterval(slider_timer);
});

slides.addEventListener('mouseout', () => {
  slider_timer = setInterval(Slider, slider_duration);
});

/* references */
const refButtons = document.querySelectorAll('.ref-button');
const refs = document.querySelectorAll('.ref');
const all = document.querySelector('.all');

refButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    refButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    let filter = button.dataset.filter;
    refs.forEach((ref) => {
      if (ref.dataset.text == filter) {
        ref.style.display = 'block';
      } else {
        ref.style.display = 'none';
      }
    });
  });
});

all.addEventListener('click', () => {
  refs.forEach((ref) => {
    ref.style.display = 'block';
  });
});
