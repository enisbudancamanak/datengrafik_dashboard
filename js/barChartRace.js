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
})

function getURLParameter(parameter) {
  let parameters = new URLSearchParams(window.location.search)
  if (parameters.get(parameter) == null)
    return 'anfaenge_nach_berechtigung'
  return parameters.get(parameter)
}
