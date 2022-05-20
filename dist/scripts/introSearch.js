document.addEventListener('DOMContentLoaded', event => {
  const formIntro = document.querySelector('.form-intro')
  const formIntroIcon = formIntro.querySelector('.form-intro__icon')

  formIntroIcon.addEventListener('click', event => {
    formIntro.classList.toggle('_active')
  })
})