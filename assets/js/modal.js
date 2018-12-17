var superModal = false;

$("#pacmentalImg").on("click", function () {
  $("#modalShade").fadeIn("fast");
  $("#pacmentalModal").show("fast");
});

$(".close, #modalShade").on("click", function () {
  $("#modalShade").fadeOut("fast");
  $("#pacmentalModal").hide("fast");
});

$(".thumbnail").on("click", function () {
  var src = $(this).attr("src");
  var imgTag = '<img src="' + src + '" />';

  superModal = true;

  $("#superModalImg").html(imgTag);
  $("#superShade").fadeIn("fast");
  $("#superModal").show("fast");
});

$("#superClose, #superShade").on("click", function () {
  superModal = false;
  $("#superShade").fadeOut("fast");
  $("#superModal").hide("fast");
});

window.addEventListener('keyup', (e) => {
  if (e.key === "Escape") {
    if (!superModal) {
      $("#modalShade").fadeOut("fast");
      $("#pacmentalModal").hide("fast");
    }
    else {
      superModal = false;
      $("#superShade").fadeOut("fast");
      $("#superModal").hide("fast");
    }
  }
});