document.addEventListener('DOMContentLoaded', (event) => {
  const navHeaderSubmenuLinks = document.querySelectorAll(
    '.nav-header__item._submenu'
  )

  if (navHeaderSubmenuLinks.length > 0) {
    document.addEventListener('click', (event) => {
      if (
        !event.target.closest('.nav-header__item._submenu') &&
        !event.target.closest('.submenu-nav-header')
      ) {
        navHeaderSubmenuLinks.forEach((submenuLink) =>
          submenuLink.classList.remove('_active')
        )
      }
    })

    navHeaderSubmenuLinks.forEach((submenuLink) => {
      submenuLink.addEventListener('click', (event) => {
        if (!event.target.closest('.submenu-nav-header')) {
          event.currentTarget.classList.toggle('_active')
        }
      })
    })
  }
})
