import './style.css'
import mascotImage from './assets/mascot.png'

const currentPage = document.body.dataset.page
const currentLink = document.querySelector(`[data-page-link="${currentPage}"]`)
currentLink?.setAttribute('aria-current', 'page')

// Vite includes the mascot image in the production build.
document.querySelectorAll('[data-mascot]').forEach((image) => {
  image.src = mascotImage
})

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.site-nav')

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false')
  menuButton?.setAttribute('aria-label', '메뉴 열기')
  navigation?.classList.remove('is-open')
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기')
  navigation?.classList.toggle('is-open', !isOpen)
})

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu()
})

document.addEventListener('click', (event) => {
  if (!navigation?.contains(event.target) && !menuButton?.contains(event.target)) closeMenu()
})
