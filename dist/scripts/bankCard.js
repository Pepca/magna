document.addEventListener('DOMContentLoaded', event => {
  const bankCards = document.querySelectorAll('.bank-card-item')

  if (bankCards.length  > 0) {
    bankCards.forEach(bankCard => {
      const bankCardButton = bankCard.querySelector('.info-bank-card__button')

      bankCardButton.addEventListener('click', event => {
        bankCard.classList.toggle('_show-more')
      })
    })
  }
})