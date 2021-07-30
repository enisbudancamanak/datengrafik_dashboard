$(document).ready(function () {
  startPoster()
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
  $('#barRaceMenu').on('click', function () {
    window.location.replace(
      'barChartRace.html?page=' + getURLParameter('page')
    )
  })
  $('#overviewMenu').on('click', function () {
    window.location.replace('index.html')
  })
})

function getURLParameter(parameter) {
  let parameters = new URLSearchParams(window.location.search)
  if (parameters.get(parameter) == null)
    return 'anfaenge_nach_berechtigung'
  return parameters.get(parameter)
}

function startPoster() {
  const letters = new Letterize({
    targets: '.poster-text',
  })

  var outroText = {}
  outroText.opacityIn = [0, 1]
  outroText.scaleIn = [0.2, 1]
  outroText.scaleOut = 3
  outroText.durationIn = 800
  outroText.durationOut = 600
  outroText.delay = 500

  // INTRO ANIMATION
  const animation = anime.timeline({
    targets: letters.listAll,
    delay: anime.stagger(15, {
      grid: [letters.list[0].length, letters.list.length],
      from: 'center',
    }),
    loop: false,
    complete: function (anim) {
      anime({
        targets: '.textHolderDiv',
        opacity: 0,
        duration: 500,
      })
      anime({
        targets: '#introSVG path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 2500, //2500
        direction: 'alternate',
        loop: false,
        delay: 500,
        begin: function (anim) {
          $('#introSVG').css('visibility', 'visible')
        },
        complete: function (anim) {
          let tl = anime.timeline({
            duration: 4000,
            easing: 'easeInOutQuart',
          })

          tl.add({
            targets: '#logoSVG',
            keyframes: [
              { scale: 1, rotate: '0deg' },
              { scale: 0.98, rotate: '2deg' },
              { scale: 1, rotate: '0deg' },
              { scale: 0.98, rotate: '2deg' },
              { scale: 1, rotate: '0deg' },
            ],
            duration: 2500,
          })

          tl.add(
            {
              targets: [
                '#textSVG',
                '#logoSVG',
                'feTurbulence',
                'feDisplacement',
              ],
              baseFrequency: '0',
              // numOctaves: 0,
              fill: '#fff',
            },
            '-=1500'
          )

          tl.add(
            {
              targets: '#introSVG',
              opacity: 0,
              duration: 1500,
            },
            '-=500'
          )
          $('.poster-text').html(
            'Internationaler Studiengang Medieninformatik B.Sc.'
          )
          tl.add(
            {
              targets: '.textHolderDiv',
              opacity: outroText.opacityIn,
              scale: outroText.scaleIn,
              duration: outroText.durationIn,
            },
            '-=500'
          )
          tl.add({
            targets: '.textHolderDiv',
            opacity: 0,
            scale: outroText.scaleOut,
            duration: outroText.durationOut,
            easing: 'easeInExpo',
            delay: outroText.delay,
            complete: function (anim) {
              $('.poster-text').html(
                'Studiengangsbericht von 2013 bis 2019'
              )
            },
          })
          tl.add({
            targets: '.textHolderDiv',
            opacity: outroText.opacityIn,
            scale: outroText.scaleIn,
            duration: outroText.durationIn,
          })
          tl.add({
            targets: '.textHolderDiv',
            opacity: 0,
            scale: outroText.scaleOut,
            duration: outroText.durationOut,
            easing: 'easeInExpo',
            delay: outroText.delay,
            complete: function () {
              anime({
                targets: '.intro',
                opacity: 0,
                delay: 500, //1500
                duration: 500, //500
                complete: function (anim) {
                  $('.intro').css('visibility', 'hidden')
                  $('#introSVG').css('visibility', 'hidden')

                  reloadPage()
                },
              })
            },
          })
        },
      })
    },
  })

  animation
    .add({
      delay: 2000,
    })
    .add({
      scale: 0.5,
    })
    .add({
      letterSpacing: '10px',
    })
    .add({
      scale: 1,
    })
    .add({
      letterSpacing: '6px',
    })
}

function reloadPage() {
  window.location.replace(document.location)
}
