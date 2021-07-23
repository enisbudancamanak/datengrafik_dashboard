function createOverviewSmallCharts() {
  var options1Array = []
  var options2Array = []
  var options3Array = []
  var options4Array = []
  var options5Array = []

  var chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    options1,
    options2,
    options3,
    options4,
    options5

  var optionsFullArray = [
    options1Array,
    options2Array,
    options3Array,
    options4Array,
    options5Array,
  ]

  //CREATING ALL OPTIONS
  //OPTIONS1
  try {
    var tempObject = []
    allPieCharts.forEach((data) => {
      var value = 0

      Object.keys(data).forEach(function (key, index) {
        value += data[key].value
      })
      tempObject.push(value)
    })
    optionsFullArray[0] = tempObject
  } catch (error) {}

  //OPTIONS
  try {
    optionsFullArray[1] = createArrayForSpecificOption(1)
    optionsFullArray[2] = createArrayForSpecificOption(2)
    optionsFullArray[3] = createArrayForSpecificOption(3)
    optionsFullArray[4] = createArrayForSpecificOption(4)
  } catch (error) {}

  try {
    options1 = {
      series: [
        {
          data: optionsFullArray[0],
        },
      ],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        strokeColor: '#fff',
        size: 2,
      },
      colors: ['#ffffff'],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            },
          },
        },
        marker: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
        ],
      },
    }

    options2 = {
      series: [
        {
          data: optionsFullArray[1],
        },
      ],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        strokeColor: '#fff',
        size: 2,
      },
      colors: ['#ffffff'],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            },
          },
        },
        marker: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
        ],
      },
    }

    options3 = {
      series: [
        {
          data: optionsFullArray[2],
        },
      ],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        strokeColor: '#fff',
        size: 2,
      },
      colors: ['#ffffff'],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            },
          },
        },
        marker: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
        ],
      },
    }

    options4 = {
      series: [
        {
          data: optionsFullArray[3],
        },
      ],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        strokeColor: '#fff',
        size: 2,
      },
      colors: ['#ffffff'],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            },
          },
        },
        marker: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
        ],
      },
    }

    options5 = {
      series: [
        {
          data: optionsFullArray[4],
        },
      ],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        strokeColor: '#fff',
        size: 2,
      },
      colors: ['#ffffff'],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            },
          },
        },
        marker: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
        ],
      },
    }
  } catch (error) {}

  try {
    chart1 = new ApexCharts(
      document.querySelector('#overviewCard1'),
      options1
    )
  } catch (error) {}

  try {
    chart2 = new ApexCharts(
      document.querySelector('#overviewCard2'),
      options2
    )
  } catch (error) {}

  try {
    chart3 = new ApexCharts(
      document.querySelector('#overviewCard3'),
      options3
    )
  } catch (error) {}

  try {
    chart4 = new ApexCharts(
      document.querySelector('#overviewCard4'),
      options4
    )
  } catch (error) {}

  try {
    chart5 = new ApexCharts(
      document.querySelector('#overviewCard5'),
      options5
    )
  } catch (error) {}

  if (!document.referrer.includes('barChartRace')) {
    try {
      if (document.querySelector('#overviewCard1')) chart1.render()
      if (document.querySelector('#overviewCard2')) chart2.render()
      if (document.querySelector('#overviewCard3')) chart3.render()
      if (document.querySelector('#overviewCard4')) chart4.render()
      if (document.querySelector('#overviewCard5')) chart5.render()
    } catch (error) {}
  } else {
    try {
      if (document.querySelector('#overviewCard1')) chart1.render()
      if (document.querySelector('#overviewCard2')) chart2.render()
      if (document.querySelector('#overviewCard3')) chart3.render()
      if (document.querySelector('#overviewCard4')) chart4.render()
      if (document.querySelector('#overviewCard5')) chart5.render()
    } catch (error) {}
  }
}

function createArrayForSpecificOption(index) {
  try {
    var tempObject = []
    allPieCharts.forEach((data) => {
      var value = 0
      var i = index - 1

      Object.keys(data).forEach(function (key, index) {
        if (index == i) value += data[key].value
      })
      tempObject.push(value)
    })
    return tempObject
  } catch (error) {}
}
