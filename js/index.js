$(document).ready(function () {
  var currentPath
  $('.card').on('click', (card) => {
    if (card.currentTarget.id == 'anfaenge_nach_berechtigung') {
      currentPath = 'anfaenge_nach_berechtigung'
    }

    if (card.currentTarget.id == 'anfaenge_nach_geschlecht') {
      currentPath = 'anfaenge_nach_geschlecht'
    }

    if (card.currentTarget.id == 'anfaenge_nach_bildungsherkunft') {
      currentPath = 'anfange_nach_bildungsherkunft'
    }

    if (card.currentTarget.id == 'anfaenge_nach_nationalitaet') {
      currentPath = 'anfange_nach_nationalitaet'
    }

    if (
      card.currentTarget.id == 'studierende_nach_bildungsherkunft'
    ) {
      currentPath = 'studierende_nach_bildungsherkunft'
    }

    if (card.currentTarget.id == 'studierende_nach_geschlecht') {
      currentPath = 'studierende_nach_geschlecht'
    }

    if (card.currentTarget.id == 'studierende_nach_nationalitaet') {
      currentPath = 'studierende_nach_nationalitaet'
    }

    window.location.replace('dashboard.html?page=' + currentPath)
  })
})
