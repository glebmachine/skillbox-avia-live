const form = document.getElementById('form')
const inputTicket = document.getElementById('inputTicket')
const resetBtn = document.getElementById('resetApp')


function changeContainer() {
  const containerActive = document.querySelector('.js-container.is-active')
  const containerInactive = document.querySelector('.js-container:not(.is-active)')

  containerActive.classList.remove('is-active')
  containerInactive.classList.add('is-active')
}

function resetApp() {
  inputTicket.value = ''
}


form.onsubmit = (event) => {
  event.preventDefault()
  changeContainer()
  
  setTimeout(resetApp, 463)
}

resetBtn.onclick = changeContainer