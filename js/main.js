$(document).ready(function () {
  $(".switch").on("click", function () {
    $(".toggle-btn").toggleClass("active");
    $("body").toggleClass("bg-toggle");
  });
});
