const { Capacitor } = require('@capacitor/core');

const form = document.getElementById('form')
const inputTicket = document.getElementById('inputTicket')
const resetBtn = document.getElementById('resetApp')
const isElectron = navigator.userAgent.indexOf('Electron') !== -1;
const isIos = Capacitor.getPlatform() === 'ios';
const isAndroid = Capacitor.getPlatform() === 'android';

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

if (isElectron) {
  document.body.classList.add('electron');
  alert('halo marsaine!!!')
}

if (isIos) {
  document.body.classList.add('ios');
  // alert('привет айсоеры')
}

if (isAndroid) {
  document.body.classList.add('android');
  alert('привет андройдеры')
}