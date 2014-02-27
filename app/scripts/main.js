$(function() {
  $("#navMenu").click(function(evt) {
    $(this).children(".fa").toggleClass("fa-rotate-180");
  });

  $("#firstCall").click(function(evt) {
    evt.preventDefault();
    $("#salesModal").modal('show');
  });

  $("#secondCall").click(function(evt) {
    evt.preventDefault();
    $("#salesModal").modal('show');
  });

  $("#initBrowse").click(function(evt) {
    evt.preventDefault();

    var topPosition = $("#paymentProcessing").position().top;

    $("html, body").animate({
      scrollTop: topPosition - 50
    });

  });

});