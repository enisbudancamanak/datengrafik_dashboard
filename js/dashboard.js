let data2013 = []
let data2014 = []
let data2015 = []
let data2016 = []
let data2017 = []
let data2018 = []
let data2019 = []
let dataArray = 0

let allPieCharts = [
  data2013,
  data2014,
  data2015,
  data2016,
  data2017,
  data2018,
  data2019,
]

let indexOverviewChanged = false

$(document).ready(function () {
  setHeadlineText(getURLParameter('page'))

  // ANIMATION AND DASHBOARD DATA LOADING
  introToDashboard()

  //HANDLING SIDEBAR MENUPOINTS
  $('.icon-text').on('click', function (menuPoint) {
    $('.icon-text').css('color', 'white')
    $('.sidebar-active').removeClass('sidebar-active')
    $(menuPoint.currentTarget).addClass('sidebar-active')
    $(menuPoint.currentTarget).css('color', 'black')
  })

  $('#barRaceMenu').on('click', function () {
    window.location.replace(
      'barChartRace.html?page=' + getURLParameter('page')
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

    allPieCharts.every((date) => {
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

    allPieCharts.every((date) => {
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
    setContent(d)
  })
})

function setContentBeginning() {
  var fromYear = 2013
  var endYear = 2019

  $('#fromHeadline').html('(' + fromYear)
  $('#toHeadline').html(endYear + ')')

  var yearsDifference = endYear - fromYear + 1
  if (yearsDifference == 0) yearsDifference = 1

  var indexOverview = 2
  if (!indexOverviewChanged)
    allPieCharts[0].forEach((data) => {
      $('.smallOverview').append(
        '<div class="overview-card"><span>' +
          data.title +
          ' im Durchschnitt</span><span id="overviewCard' +
          indexOverview +
          'Text">0</span><div style="margin: 0 auto;"><div id="overviewCard' +
          indexOverview +
          '"></div></div></div>'
      )
      indexOverview += 1
      indexOverviewChanged = true
    })

  if (indexOverview <= 4)
    $('.smallOverview').css('justify-content', 'center')
  else if (indexOverview > 4)
    $('.smallOverview').css('justify-content', 'space-around')

  var valueAll = 0
  for (var i = 1; i <= allPieCharts[0].length; i++) {
    var value = 0
    allPieCharts.forEach((date) => {
      date.forEach((d, index) => {
        if (d.year >= fromYear && d.year <= endYear) {
          valueAll += d.value
        }
        if (
          d.year >= fromYear &&
          d.year <= endYear &&
          index == i - 1
        ) {
          value += d.value
        }
      })
    })

    value /= yearsDifference
    $('#overviewCard' + (i + 1) + 'Text').html(
      Math.round(value) + ' Studenten'
    )
  }
  $('#overviewCard1Text').html(
    valueAll / allPieCharts[0].length + ' Studenten'
  )

  setTimeout(function () {
    createOverviewSmallCharts()
  }, 0)
}

function setContent(d) {
  try {
    var fromYear = $('#from').val()
    var endYear = $('#end').val()
  } catch (exception) {}

  if (fromYear && endYear && fromYear >= 2013 && endYear <= 2019)
    if (fromYear <= endYear) {
      $('#from').removeClass('error-input')
      $('#end').removeClass('error-input')
      $('#fromHeadline').html('(' + fromYear)
      $('#toHeadline').html(endYear + ')')

      var yearsDifference = endYear - fromYear + 1
      if (yearsDifference == 0) yearsDifference = 1
      var dateForPie = 0

      lastChangedElementValue = $('#' + d.target.id).val()
      var valueAll = 0
      for (var i = 1; i <= allPieCharts[0].length; i++) {
        var value = 0
        allPieCharts.forEach((date) => {
          date.forEach((d, index) => {
            if (d.year >= fromYear && d.year <= endYear) {
              valueAll += d.value
              if (d.year == lastChangedElementValue) dateForPie = date
            }
            if (
              d.year >= fromYear &&
              d.year <= endYear &&
              index == i - 1
            ) {
              value += d.value
            }
          })
        })

        value /= yearsDifference
        $('#overviewCard' + (i + 1) + 'Text').html(
          Math.round(value) + ' Studenten'
        )
      }
      $('#overviewCard1Text').html(
        valueAll / allPieCharts[0].length + ' Studenten'
      )

      changeDataPieChart(dateForPie)
      changeDataBarChart(fromYear, endYear)
    } else {
      $('#from').addClass('error-input')
      $('#end').addClass('error-input')
    }
}

// GENERATE ARRAYS FROM CURRENT PATH CSV (FOR PIE CHART)
function readTextFileToCreatePieData(file) {
  var rawFile = new XMLHttpRequest()
  rawFile.open('GET', file, true)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText
        dataArray = JSON.parse(csvJSON(allText))
        createDataArrays(dataArray)
      }
    }
  }
  rawFile.send(null)
}

function csvJSON(csv) {
  var lines = csv.split('\n')

  var result = []

  var headers = lines[0].split(',')

  for (var i = 1; i < lines.length; i++) {
    var obj = {}
    var currentLine = lines[i].split(',')

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = parseInt(currentLine[j])
    }

    result.push(obj)
  }

  //return result; //JavaScript object
  return JSON.stringify(result) //JSON
}

function createDataArrays(dataArray) {
  var i = 0
  dataArray.forEach((data) => {
    var all = 0
    var tempObject = []
    var year = data.group
    delete data.group

    Object.keys(data).forEach(function (key, index) {
      tempObject.push({
        title: key.replace('\r', ''),
        value: data[key],
      })
      all += data[key]
    })
    Object.keys(tempObject).forEach(function (key, index) {
      tempObject[key].all = all
      tempObject[key].year = year
    })

    allPieCharts[i] = tempObject
    i += 1
  })
}

function introToDashboard() {
  if (
    !document.referrer.includes('barChartRace') &&
    !document.referrer.includes('poster')
  ) {
    $('.poster-text').html(
      $('.headline h3').html() + '<br> (2013 bis 2019)'
    )

    var outroText = {}
    outroText.opacityIn = [0, 1]
    outroText.scaleIn = [0, 0.9]
    outroText.scaleOut = 3
    outroText.durationIn = 900
    outroText.durationOut = 450
    outroText.delay = 200

    let tl = anime.timeline({
      duration: 4000,
      easing: 'easeInOutQuart',
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
        setTimeout(function () {
          changeDataBarChart(2013, 2019)
        }, 0)

        setTimeout(function () {
          //TO Prevent Error while loading
          if (allPieCharts[0].length == 0) {
            location.replace(document.location)
          }
          changeDataPieChart(allPieCharts[0])
          setContentBeginning()
        }, 0)
        anime({
          targets: '.intro',
          opacity: 0,
          delay: 200,
          duration: 500,
          complete: function (anim) {
            $('.intro').css('visibility', 'hidden')
            $('#introSVG').css('visibility', 'hidden')
          },
        })
      },
    })
  } else {
    setTimeout(function () {
      changeDataBarChart(2013, 2019)
    }, 0)

    setTimeout(function () {
      //TO Prevent Error while loading
      if (allPieCharts[0].length == 0) {
        location.replace(document.location)
      }
      changeDataPieChart(allPieCharts[0])
      setContentBeginning()
    }, 0)
    $('.intro').css('visibility', 'hidden')
    $('#introSVG').css('visibility', 'hidden')
  }
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

  $('.headline h3').html(headline)
}

function getURLParameter(parameter) {
  let parameters = new URLSearchParams(window.location.search)
  if (parameters.get(parameter) == null)
    return 'anfaenge_nach_berechtigung'
  return parameters.get(parameter)
}

// General Variables
//BAR CHART
var margin = { top: 20, right: 30, bottom: 20, left: 50 },
  widthBar = 900 - margin.left - margin.right,
  heightBar = 400 - margin.top - margin.bottom

//PIE CHART
var widthPie = 400,
  heightPie = 300,
  radius = Math.min(widthPie, heightPie) / 2
