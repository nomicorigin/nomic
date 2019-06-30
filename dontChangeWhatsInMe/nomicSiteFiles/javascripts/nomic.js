
function openLeftPane() {
  $(".pane-left").addClass("hidden").removeClass("displayed");
  $(".pane-left2").addClass("displayed").removeClass("hidden");
  $("#rules-nav-link").removeClass("selected mobileSelected");
  $("#desc-nav-link").addClass("selected mobileSelected");
  $("#play-nav-link").removeClass("mobileSelected");
}

function closeLeftPane() {
  $(".pane-left").addClass("displayed").removeClass("hidden");
  $(".pane-left2").addClass("hidden").removeClass("displayed");
  $("#rules-nav-link").addClass("selected mobileSelected");
  $("#desc-nav-link").removeClass("selected mobileSelected");
  $("#play-nav-link").removeClass("mobileSelected");
}

function openRightPane() {
  $(".pane-right").addClass("displayed").removeClass("hidden");
  $("#rules-nav-link").removeClass("mobileSelected");
  $("#desc-nav-link").removeClass("mobileSelected");
  $("#play-nav-link").addClass("selected mobileSelected");
}

function closeRightPane() {
  $(".pane-right").addClass("hidden").removeClass("displayed");
  $("#play-nav-link").removeClass("selected");
}

$( document ).ready(function() {

  [
    ["#rules-nav-link", "#nomic", 0],
    ["#desc-nav-link", "#nomic-desc", 64],
    ["#play-nav-link", "#play", 64]
  ].forEach(function(arr) {
    $(arr[0]).click(function() {
      if ($(window).width() < 800) {
        $('html, body').animate({
          scrollTop: $(arr[1]).offset().top - arr[2] + 1 }, 500
        );
      }
    });
  });

  $("#play-nav-link").click(function() {
    if ($(".pane-right").hasClass("displayed")) {
      closeRightPane();
    } else {
      openRightPane();
    }
  });
  $("#rules-nav-link").click(function() {
    if (!$(".pane-left").hasClass("displayed")) {
      closeLeftPane();
    }
  });
  $("#desc-nav-link").click(function() {
    openLeftPane();
  });
});
