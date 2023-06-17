// ------------------VIDEO------------------
const videoButton = document.querySelector('.video__button-box')
const modal = document.querySelector('.modal')
const modalVideo = document.querySelector('.modal__video iframe')
const modalClose = document.querySelector('.modal__close')

videoButton.addEventListener('click', function(event) {
  event.preventDefault()

  // Ссылка на видео
  const videoUrl = 'https://www.youtube.com/embed/6A_O2Eaoc3Q'

  // Установка ссылки на видео в iframe
  modalVideo.src = videoUrl

  // Открытие модального окна
  modal.style.display = 'flex'
});

modalClose.addEventListener('click', function() {
  // Закрытие модального окна
  modal.style.display = 'none'

  // Остановка видео при закрытии окна
  modalVideo.src = ''
})



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