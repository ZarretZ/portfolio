const nav = document.querySelector('.header__nav')
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list')

/* ------------НАВИГАЦИЯ------------ */

//Функция смены значений псевдоэлементов.
function changePseudoElementValue(variableName, value) {
  document.documentElement.style.setProperty(variableName, value)
}

//Функция обработки нажатия меню
function setMenu(view, px) {
  navList.style.marginBottom = px
  hamburger.textContent = view
}

//Функция проверки ширины экрана и дальнейшее выполнение действий
function checkResize() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth <= 767.98) {
    hamburger.textContent === 'close'
      ? setMenu('close', '-10px')
      : setMenu('menu', '100px')
  } else {
    hamburger.textContent === 'close'
      ? setMenu('close', '0')
      : setMenu('menu', '100px')
  }
}
//Обработчик изменений ширины экрана
window.addEventListener('resize', checkResize)

//Стартовая проверка ширины экрана и выполение действий
checkResize()

//Отрисовка навигации при нажатии кнопки меню
hamburger.addEventListener('click', () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // Проверяем ширину экрана и выполняем действия при необходимом разрешении
  if (screenWidth <= 767.98) {
    hamburger.textContent === 'menu'
      ? setMenu('close', '-10px')
      : setMenu('menu', '100px')
  } else {
    hamburger.textContent === 'menu'
      ? setMenu('close', '0')
      : setMenu('menu', '100px')
  }
})

//Отрисовка фона у меню при скролинге.
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    nav.classList.add('fixed')
    nav.style.color = '#695aa6'
    hamburger.style.color = '#695aa6'
    changePseudoElementValue('--nav-item-background-color', '#695aa6')
  } else {
    nav.classList.remove('fixed')
    nav.style.color = 'white'
    hamburger.style.color = 'white'
    changePseudoElementValue('--nav-item-background-color', 'white')
  }
})

/* ------------ФОРМА------------ */

//Объявление переменных модального окна.
const overlay = document.querySelector('.contacts__overlay')
const modalWindow = document.querySelector('.contacts__modal-windows')
const modalButton = document.querySelector('.contacts_modal-btn')

//Отправка данных формы на почту, в консоль.
const form = document.querySelector('.contacts__form')

const nameInput = form.querySelector('.contacts__form-name')
const emailInput = form.querySelector('.contacts__form-email')
const messageTextarea = form.querySelector('.contacts__form-textarea')

document.addEventListener('DOMContentLoaded', () => {

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = nameInput.value
    const email = emailInput.value
    const message = messageTextarea.value

    console.log('Имя:', name)
    console.log('Email:', email)
    console.log('Сообщение:', message)

    //Отрисовка модального окна при отправки данных формы.
    overlay.style.opacity = 1
    overlay.style.zIndex = 11

    // Добавить здесь код для отправки данных на сервер и отправки почты
    // используя полученные значения name, email и message,
    // а пока можно посмотреть отправку в консоль.
  })
})

//Функция закрытия модального окна и очистка полей ввода.

function closeModalWindows() {
  overlay.style.opacity = 0
  overlay.style.zIndex = -1
  nameInput.value = ''
  emailInput.value = ''
  messageTextarea.value = ''
}

modalButton.onclick = () => {
  closeModalWindows()
}

//Обработчик закрытия модального окна нажатием в любом месте кроме окна.
document.addEventListener('click', (e) => {
  const clickInZoneMenu = e.composedPath().includes(modalWindow)//обработка зоны меню
  if (!clickInZoneMenu && overlay.style.zIndex == 11) {
    closeModalWindows()
  }
})

// document.addEventListener('click', (e) => {
//   const clickInZoneMenu = e.composedPath().includes(modalWindow)//обработка зоны меню
//   const clickInZoneButton = e.composedPath().includes(modalButton)//обработка зоны кнопки
//   if (clickInZoneButton && overlay.style.zIndex == 11) {
//     closeModalWindows()
//   } else if (!clickInZoneMenu && overlay.style.zIndex == 11) {
//     closeModalWindows()
//   }
// })

//Обработчик закрытия меню на кнопку esc
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && overlay.style.zIndex == 11) {
    closeModalWindows()
  }
})

/* ------------СКРОЛЛИНГ------------ */

//Плавный скроллинг.
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
