$(document).ready(function () {
  //HANDLING SIDEBAR MENUPOINTS
  $('.icon-text').on('click', function (menuPoint) {
    $('.icon-text').css('color', 'white')
    $('.sidebar-active').removeClass('sidebar-active')
    $(menuPoint.currentTarget).addClass('sidebar-active')
    $(menuPoint.currentTarget).css('color', 'black')
  })

  $('#dashboardMenu').on('click', function () {
    window.location.replace(
      'dashboard.html?page=' + getURLParameter('page')
    )
  })
  $('#posterMenu').on('click', function () {
    window.location.replace(
      'poster.html?page=' + getURLParameter('page')
    )
  })
  $('#overviewMenu').on('click', function () {
    window.location.replace('index.html')
  })

  setHeadlineText(getURLParameter('page'))

  const headlineTargets = new Letterize({
    targets: '.headlineText',
  })

  for (var i = 0; i < headlineTargets.listAll.length; i++) {
    headlineTargets.listAll[i].addEventListener(
      'mouseover',
      function (e) {
        // console.log(e.target)

        anime.timeline({ loop: 1 }).add({
          targets: e.target,
          scale: [1.5, 1],
          duration: 900,
          easing: 'spring(1, 200, 10, 0)',
        })
      }
    )
  }
})

function getURLParameter(parameter) {
  let parameters = new URLSearchParams(window.location.search)
  if (parameters.get(parameter) == null)
    return 'anfaenge_nach_berechtigung'
  return parameters.get(parameter)
}

function setHeadlineText(parameter) {
  var headline
  if (parameter == 'anfaenge_nach_berechtigung') {
    headline =
      'Studienanfänger*innen nach Hochschulzugangsberechtigung'
  }

  if (parameter == 'anfaenge_nach_geschlecht') {
    headline = 'Studienanfänger*innen nach Geschlecht'
  }

  if (parameter == 'anfange_nach_bildungsherkunft') {
    headline = 'Studienanfänger*innen nach Bildungsherkunft'
  }

  if (parameter == 'anfange_nach_nationalitaet') {
    headline = 'Studienanfänger*innen nach Nationalität'
  }

  if (parameter == 'studierende_nach_bildungsherkunft') {
    headline = 'Studierende nach Bildungsherkunft'
  }

  if (parameter == 'studierende_nach_geschlecht') {
    headline = 'Studierende nach Geschlecht'
  }

  if (parameter == 'studierende_nach_nationalitaet') {
    headline = 'Studierende nach Nationalität'
  }

  $('.headlineText').html(headline)
}
