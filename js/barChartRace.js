$(document).ready(function () {
  //HANDLING SIDEBAR MENUPOINTS
  $('.icon-text').on('click', function (menuPoint) {
    $('.icon-text').css('color', 'white')
    $('.sidebar-active').removeClass('sidebar-active')
    $(menuPoint.currentTarget).addClass('sidebar-active')
    $(menuPoint.currentTarget).css('color', 'black')
  })

  $('#dashboardMenu').on('click', function () {
    window.location.replace('index.html')
  })

  document
    .querySelector('.countdown')
    .addEventListener('animationend', () => {
      document
        .querySelector('.countdown')
        .classList.add('animate__animated', 'animation-timeline-end')
    })
})
