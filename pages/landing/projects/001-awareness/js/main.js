// ------------------SLIDER------------------

const prevButton = document.querySelector('.slider__arrow-prev');
const nextButton = document.querySelector('.slider__arrow-next');
const slideList = document.querySelector('.slider__cards');
const slides = document.querySelectorAll('.slider__card');
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth; // Получаем ширину слайда
const slideCount = slides.length;
const maxIndex = slideCount - 1;

prevButton.addEventListener('click', (event) => {
  event.preventDefault(); // Отменяем действие по умолчанию
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

nextButton.addEventListener('click', (event) => {
  event.preventDefault(); // Отменяем действие по умолчанию
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
});

function updateSlider() {
  const translateX = currentIndex * slideWidth * -1;

  slideList.style.transform = `translateX(${translateX}px)`;

  // Добавляем/удаляем классы для кнопок "Prev" и "Next" в зависимости от текущего индекса слайда
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  // Убираем пустые места, когда заканчиваются слайды
  if (currentIndex >= maxIndex - 2) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

updateSlider();

//----------------SCROLLING-------------------

const smoothLinks = document.querySelectorAll("a[href^='#']")
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault()
    const id = smoothLink.getAttribute('href')

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}