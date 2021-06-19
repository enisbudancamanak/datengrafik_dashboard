$(document).ready(function () {
  if (!document.referrer.includes('barChartRace')) {
    // exec the function for displaying the data with delay
    setTimeout(function () {
      changeDataBarChart(2013, 2019)
    }, 1600)

    setTimeout(function () {
      changeDataPieChart(data2013)
    }, 1900)

    // INTRO ANIMATION
    anime({
      targets: '#introSVG path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 0, //2500
      direction: 'alternate',
      loop: false,
      delay: 500,
      begin: function (anim) {
        $('#introSVG').css('visibility', 'visible')
      },
      complete: function (anim) {
        anime({
          targets: '.intro',
          opacity: 0,
          delay: 1500,
          duration: 500,
          complete: function (anim) {
            $('.intro').css('visibility', 'hidden')
            $('#introSVG').css('visibility', 'hidden')
            // Start Intro for Datepicker
            introJs().start()
          },
        })
      },
    })
  } else {
    // Show content instantly and vanish Intro
    changeDataBarChart(2013, 2019)
    changeDataPieChart(data2013)
    $('.intro').css('visibility', 'hidden')
    $('#introSVG').css('visibility', 'hidden')
  }

  //HANDLING SIDEBAR MENUPOINTS
  $('.icon-text').on('click', function (menuPoint) {
    $('.icon-text').css('color', 'white')
    $('.sidebar-active').removeClass('sidebar-active')
    $(menuPoint.currentTarget).addClass('sidebar-active')
    $(menuPoint.currentTarget).css('color', 'black')
  })

  $('#BarRaceMenu').on('click', function () {
    window.location.replace('barChartRace.html')
  })

  //the both input fields getting initialized with datepicker from bootstrap
  $('#from, #end').datepicker({
    minViewMode: 2,
    format: 'yyyy',
    startDate: '-8y',
    endDate: '-2y',
  })

  //INPUT FIELDS SETTING
  $('#from').datepicker('setDate', new Date(2013, 11, 02))
  $('#end').datepicker('setDate', new Date(2019, 03, 02))

  //Handling Pie Back Button (Arrow Left)
  $('#pieBack').on('click', function () {
    var backYear =
      parseInt(document.getElementById('currentYearPie').innerHTML) -
      1

    allDates.every((date) => {
      date.every((d) => {
        if (backYear == d.year) {
          changeDataPieChart(date)
          return false
        } else {
          return false
        }
      })
      return true
    })
  })

  //Handling Pie Forward Button (Arrow Right)
  $('#pieForward').on('click', function () {
    var nextYear =
      parseInt(document.getElementById('currentYearPie').innerHTML) +
      1

    allDates.every((date) => {
      date.every((d) => {
        if (nextYear == d.year) {
          changeDataPieChart(date)
          return false
        } else {
          return false
        }
      })
      return true
    })
  })

  //Prevent Letter Press on Date Input
  $('#from, #end').keypress(function () {
    return /\d/.test(String.fromCharCode(event.which))
  })

  //When new Date selected
  $('#from, #end').on('change', function (d) {
    try {
      var fromYear = $('#from').val()
      var endYear = $('#end').val()
    } catch (exception) {}

    if (fromYear && endYear && fromYear >= 2013 && endYear <= 2019)
      if (fromYear <= endYear) {
        $('#from').removeClass('error-input')
        $('#end').removeClass('error-input')
        $('#fromHeadline').html(fromYear)
        $('#toHeadline').html(endYear)

        lastChangedElementValue = $('#' + d.target.id).val()
        allStudents = 0
        allgHzbAvg = 0
        fhReifeAvg = 0
        beruflQualiAvg = 0
        auslAvg = 0

        var yearsDifference = endYear - fromYear + 1
        if (yearsDifference == 0) yearsDifference = 1
        var dateForPie = 0
        allDates.forEach((date) => {
          date.forEach((d) => {
            if (d.year >= fromYear && d.year <= endYear) {
              if (d.year == lastChangedElementValue) dateForPie = date
              allStudents += d.value
              if (d.title == 'allg. HZB') {
                allgHzbAvg += d.value
              }
              if (d.title == 'FH-Reife') {
                fhReifeAvg += d.value
              }
              if (d.title == 'Beruflich Qualifizierte') {
                beruflQualiAvg += d.value
              }
              if (d.title == 'ausl. HB/Studienkolleg') {
                auslAvg += d.value
              }
            }
          })
        })

        changeDataPieChart(dateForPie)
        changeDataBarChart(fromYear, endYear)

        allgHzbAvg /= yearsDifference
        fhReifeAvg /= yearsDifference
        beruflQualiAvg /= yearsDifference
        auslAvg /= yearsDifference

        $('#overviewCard1').html(Math.round(allStudents) + ' Schüler')
        $('#overviewCard2').html(Math.round(allgHzbAvg) + ' Schüler')
        $('#overviewCard3').html(Math.round(fhReifeAvg) + ' Schüler')
        $('#overviewCard4').html(
          Math.round(beruflQualiAvg) + ' Schüler'
        )
        $('#overviewCard5').html(Math.round(auslAvg) + ' Schüler')
      } else {
        $('#from').addClass('error-input')
        $('#end').addClass('error-input')
      }
  })
})

//------------DATA AREA------------//
//BAR CHART
// general Variables
var margin = { top: 20, right: 30, bottom: 20, left: 30 },
  widthBar = 950 - margin.left - margin.right,
  heightBar = 400 - margin.top - margin.bottom

//PIE CHART
// All Data for specific years
var data2013 = [
  {
    title: 'allg. HZB',
    value: 35,
    all: 74,
    year: 2013,
  },
  {
    title: 'FH-Reife',
    value: 37,
    all: 74,
    year: 2013,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 0,
    all: 74,
    year: 2013,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 2,
    all: 74,
    year: 2013,
  },
]
var data2014 = [
  {
    title: 'allg. HZB',
    value: 40,
    all: 80,
    year: 2014,
  },
  {
    title: 'FH-Reife',
    value: 38,
    all: 80,
    year: 2014,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 0,
    all: 80,
    year: 2014,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 2,
    all: 80,
    year: 2014,
  },
]
var data2015 = [
  {
    title: 'allg. HZB',
    value: 40,
    all: 90,
    year: 2015,
  },
  {
    title: 'FH-Reife',
    value: 45,
    all: 90,
    year: 2015,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 0,
    all: 81,
    year: 2015,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 5,
    all: 90,
    year: 2015,
  },
]
var data2016 = [
  {
    title: 'allg. HZB',
    value: 46,
    all: 85,
    year: 2016,
  },
  {
    title: 'FH-Reife',
    value: 36,
    all: 85,
    year: 2016,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 0,
    all: 85,
    year: 2016,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 3,
    all: 85,
    year: 2016,
  },
]
var data2017 = [
  {
    title: 'allg. HZB',
    value: 35,
    all: 81,
    year: 2017,
  },
  {
    title: 'FH-Reife',
    value: 35,
    all: 81,
    year: 2017,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 8,
    all: 81,
    year: 2017,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 3,
    all: 81,
    year: 2017,
  },
]
var data2018 = [
  {
    title: 'allg. HZB',
    value: 34,
    all: 65,
    year: 2018,
  },
  {
    title: 'FH-Reife',
    value: 26,
    all: 65,
    year: 2018,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 3,
    all: 65,
    year: 2018,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 2,
    all: 65,
    year: 2018,
  },
]
var data2019 = [
  {
    title: 'allg. HZB',
    value: 43,
    all: 82,
    year: 2019,
  },
  {
    title: 'FH-Reife',
    value: 31,
    all: 82,
    year: 2019,
  },
  {
    title: 'Beruflich Qualifizierte',
    value: 2,
    all: 82,
    year: 2019,
  },
  {
    title: 'ausl. HB/Studienkolleg',
    value: 6,
    all: 82,
    year: 2019,
  },
]

let allDates = [
  data2013,
  data2014,
  data2015,
  data2016,
  data2017,
  data2018,
  data2019,
]

// General Variable
var widthPie = 400,
  heightPie = 300,
  radius = Math.min(widthPie, heightPie) / 2
