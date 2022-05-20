document.addEventListener('DOMContentLoaded', (event) => {
  const dataPopups = document.querySelectorAll('[data-popup]')
  const popups = document.querySelectorAll('.popup')
  const { body } = document

  const bodyLock = () => body.classList.add('_lock')
  const bodyUnlock = () => setTimeout(() => body.classList.remove('_lock'), 300)

  if (dataPopups.length > 0 && popups.length > 0) {
    const scrollBarWidth = window.innerWidth - body.clientWidth
    body.style.setProperty('--scrollBarWidth', scrollBarWidth + 'px')
  }

  if (dataPopups.length > 0) {
    dataPopups.forEach((dataPopup) => {
      dataPopup.addEventListener('click', (event) => {
        const attrValue = event.currentTarget.getAttribute('data-popup')
        const currentPopup = document.getElementById(attrValue)

        currentPopup.classList.add('_open')
        bodyLock()
      })
    })
  }

  if (popups.length > 0) {
    popups.forEach((popup) => {
      const inner = popup.querySelector('.popup__inner')
      const close = popup.querySelector('.popup__close')

      popup.addEventListener('click', (event) => {
        event.currentTarget.classList.remove('_open')
        bodyUnlock()
      })
      inner.addEventListener('click', (event) => event.stopPropagation())
      close.addEventListener('click', (event) => {
        popup.classList.remove('_open')
        bodyUnlock()
      })
    })
  }
})
