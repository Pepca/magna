document.addEventListener('DOMContentLoaded', (event) => {
  const telInputs = document.querySelectorAll('input[type=tel]')
  const passportSeriesInputs = document.querySelectorAll(
    'input[id=passport-series]'
  )
  const passportNumbersInputs = document.querySelectorAll(
    'input[id=passport-numbers]'
  )
  const bornDateInputs = document.querySelectorAll('input[id=born-date]')

  const cardNumbersInputs = document.querySelectorAll('input[id=card-numbers]')
  const cardDateInputs = document.querySelectorAll(
    'input[data-card-input-date]'
  )
  const cardSecureInputs = document.querySelectorAll(
    'input[data-card-input-secure]'
  )

  if (telInputs.length > 0) {
    telInputs.forEach((telInput) => {
      const mask = IMask(telInput, {
        mask: '+7 (000) 000 00-00',
      })
    })
  }

  if (passportSeriesInputs.length > 0) {
    passportSeriesInputs.forEach((passportSeriesInput) => {
      const mask = IMask(passportSeriesInput, {
        mask: '0000',
      })
    })
  }

  if (passportNumbersInputs.length > 0) {
    passportNumbersInputs.forEach((passportNumbersInput) => {
      const mask = IMask(passportNumbersInput, {
        mask: '000000',
      })
    })
  }
  if (bornDateInputs.length > 0) {
    bornDateInputs.forEach((bornDateInput) => {
      const mask = IMask(bornDateInput, {
        mask: '00/00/0000',
      })
    })
  }
  if (cardNumbersInputs.length > 0) {
    cardNumbersInputs.forEach((cardNumbersInput) => {
      const mask = IMask(cardNumbersInput, {
        mask: '0000 0000 0000 0000',
      })
    })
  }
  if (cardDateInputs.length > 0) {
    cardDateInputs.forEach((cardDateInput) => {
      const mask = IMask(cardDateInput, {
        mask: '00/00',
      })
    })
  }
  if (cardSecureInputs.length > 0) {
    cardSecureInputs.forEach((cardSecureInput) => {
      const mask = IMask(cardSecureInput, {
        mask: '000',
      })
    })
  }
})
