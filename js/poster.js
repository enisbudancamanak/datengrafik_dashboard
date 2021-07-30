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
  const test = new Letterize({
    targets: '.poster-text',
  })

  // INTRO ANIMATION
  const animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(50, {
      grid: [test.list[0].length, test.list.length],
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
              { scale: 0.95, rotate: '5deg' },
              { scale: 1, rotate: '0deg' },
              { scale: 0.95, rotate: '5deg' },
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
              complete: function () {
                anime({
                  targets: '.intro',
                  opacity: 0,
                  delay: 500, //1500
                  duration: 500, //500
                  complete: function (anim) {
                    $('.intro').css('visibility', 'hidden')
                    $('#introSVG').css('visibility', 'hidden')
                    $('#playAgainButton').css('visibility', 'visible')

                    anime({
                      targets: '#playAgainButton',
                      opacity: 1,
                      delay: 500,
                      duration: 500,
                      begin: function (anim) {},
                    })
                  },
                })
              },
            },
            '-=500'
          )
        },
      })
    },
  })

  animation
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
