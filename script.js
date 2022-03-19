const cards = document.querySelectorAll('.container')
const buttonSubmit = document.querySelector('.submit')
const buttonMenu = document.querySelectorAll('[data-value]')
const textInfo = document.querySelector('.info')
const cardThanks = document.querySelector('.c2')

let value = 0

function validationSubmit() {
    if (!value == 0) {
      cards[0].classList.remove('show')
      cards[1].classList.add('show')
    } else {
      alert('Select a number!')
    }
}

buttonSubmit.addEventListener('click', validationSubmit)

buttonMenu.forEach(index => {
  index.addEventListener('click', () => {
    buttonMenu.forEach(index => index.classList.remove('active'))
    cardThanks.classList.add('transition')
    value = index.dataset.value
    index.classList.add('active')
    textInfo.innerHTML = `You selected ${value} out of 5`
  })
})

