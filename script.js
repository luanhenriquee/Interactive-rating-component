const cards = document.querySelectorAll('.container')
const buttonSubmit = document.querySelector('.submit')
const buttonMenu = document.querySelectorAll('[data-value]')
const textInfo = document.querySelector('.info')
const cardThanks = document.querySelector('.c2')

let value = 0;

function openCard() {
  for (let card of cards) {
    buttonSubmit.addEventListener('click', () => {
      card.classList.toggle('show')
    })
  }
}

buttonMenu.forEach((index, card) => {
  index.addEventListener('click', () => {
    buttonMenu.forEach(index => index.classList.remove('active')) 
    cardThanks.classList.add('transition')
    value = index.dataset.value
    index.classList.add('active')
    openCard()
    textInfo.innerHTML = `You selected ${value} out of 5`
  }) 
})

