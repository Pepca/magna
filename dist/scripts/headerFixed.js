document.addEventListener('DOMContentLoaded', (event) => {
  const header = document.querySelector('.header')
  const intro = document.querySelector('.intro')

  if (intro) {
    const headerHeight = header.clientHeight
    const introHeight = intro.clientHeight
    const halfIntroHeight = introHeight / 2

    const currentHeight = halfIntroHeight - headerHeight

    window.addEventListener('scroll', (event) => {
      header.classList.toggle('_fill', window.scrollY >= currentHeight)
    })
  }
})
