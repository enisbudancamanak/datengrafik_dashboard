// options1
// 74, 80, 90, 85, 81, 65, 82

// options2
// 35, 40, 40, 46, 35, 34, 43

// options3
// 37, 38, 45, 36, 35, 26, 31

// options4
// 0, 0, 0, 0, 8, 3, 2

// options5
// 2, 2, 5, 3, 3, 2, 6

$(document).ready(function () {
  var options1 = {
    series: [
      {
        data: [74, 80, 90, 85, 81, 65, 82],
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

  var options2 = {
    series: [
      {
        data: [35, 40, 40, 46, 35, 34, 43],
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
  var options3 = {
    series: [
      {
        data: [37, 38, 45, 36, 35, 26, 31],
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

  var options4 = {
    series: [
      {
        data: [0, 0, 0, 0, 8, 3, 2],
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

  var options5 = {
    series: [
      {
        data: [2, 2, 5, 3, 3, 2, 6],
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

  var chart1 = new ApexCharts(
    document.querySelector('#overviewCard1'),
    options1
  )

  var chart2 = new ApexCharts(
    document.querySelector('#overviewCard2'),
    options2
  )

  var chart3 = new ApexCharts(
    document.querySelector('#overviewCard3'),
    options3
  )

  var chart4 = new ApexCharts(
    document.querySelector('#overviewCard4'),
    options4
  )

  var chart5 = new ApexCharts(
    document.querySelector('#overviewCard5'),
    options5
  )

  if (!document.referrer.includes('barChartRace')) {
    setTimeout(function () {
      chart1.render()
      chart2.render()
      chart3.render()
      chart4.render()
      chart5.render()
    }, 4300)
  } else {
    chart1.render()
    chart2.render()
    chart3.render()
    chart4.render()
    chart5.render()
  }
})
