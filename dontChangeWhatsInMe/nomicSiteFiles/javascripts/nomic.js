$( document ).ready(function() {
  $("#rules-nav-link").click(function() {
    $(".pane-left").addClass("displayed");
    $(".pane-left").removeClass("hidden");
    $(".pane-left2").addClass("hidden");
    $(".pane-left2").removeClass("displayed");
  });
  $("#desc-nav-link").click(function() {
    $(".pane-left").addClass("hidden");
    $(".pane-left").removeClass("displayed");
    $(".pane-left2").addClass("displayed");
    $(".pane-left2").removeClass("hidden");
  });
});
