$(document).ready(function () {
  if (
    !document.referrer.includes('datengrafik_dashboard') &&
    !document.referrer.includes('barChartRace') &&
    !document.referrer.includes('index') &&
    !document.referrer.includes('dashboard.html') &&
    !document.referrer.includes('poster')
  ) {
    const letters = new Letterize({
      targets: '.poster-text',
    })

    var outroText = {}
    outroText.opacityIn = [0, 1]
    outroText.scaleIn = [0.2, 1]
    outroText.scaleOut = 3
    outroText.durationIn = 500
    outroText.durationOut = 350
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
          duration: 400,
        })
        anime({
          targets: '#introSVG path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'cubicBezier(.5, .05, .1, .3)',
          duration: 1000, //2500
          direction: 'alternate',
          loop: false,
          delay: 500,
          begin: function (anim) {
            $('#introSVG').css('visibility', 'visible')
          },
          complete: function (anim) {
            let tl = anime.timeline({
              duration: 3500,
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
                  delay: 500,
                  duration: 500,
                  complete: function (anim) {
                    $('.intro').css('visibility', 'hidden')
                    $('#introSVG').css('visibility', 'hidden')
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
        letterSpacing: '10px',
      })
      .add({
        scale: 1,
        letterSpacing: '6px',
      })
  } else {
    $('.intro').css('visibility', 'hidden')
    $('#introSVG').css('visibility', 'hidden')
  }

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

  const headlineTargets = new Letterize({
    targets: 'h1',
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
