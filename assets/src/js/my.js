$(document).ready(function(){
  $(".team-btn__ricardo").click(function(){
    $(".team-btn__ricardo").hide();
    $(".team-social__ricardo").fadeIn();
  });

  $(".team-btn__alberto").click(function(){
    $(".team-btn__alberto").hide();
    $(".team-social__alberto").fadeIn();
  });

  $(".team-btn__thomas").click(function(){
    $(".team-btn__thomas").hide();
    $(".team-social__thomas").fadeIn();
  });

  $(".team-social__item").click(function(){
    $(".team-social__item").hide();
    $("button.team-btn").fadeIn();
  });

  $(".btn-menu").click(function () {
    $(".nav-modal").show();
  })

  $(".btn-close").click(function () {
    $(".nav-modal").hide();
  })
});