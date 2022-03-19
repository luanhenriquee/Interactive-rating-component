const cards = document.querySelectorAll('.container')
const buttonSubmit = document.querySelector('.submit')
const buttonMenu = document.querySelectorAll('[data-value]')
const textInfo = document.querySelector('.info')
const cardThanks = document.querySelector('.c2')

let value = 0

function toggleShow() {
  buttonSubmit.addEventListener('click', () => {
    cards[0].classList.remove('show')
    cards[1].classList.add('show')
  })
}

buttonMenu.forEach((index, card) => {
  index.addEventListener('click', () => {
    buttonMenu.forEach(index => index.classList.remove('active'))
    cardThanks.classList.add('transition')
    value = index.dataset.value
    index.classList.add('active')
    toggleShow()
    textInfo.innerHTML = `You selected ${value} out of 5`
  })
})
