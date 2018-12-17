var isSuper = false;

var modalShade = $("#modalShade");
//var pacmentalModal = ;
var superModalImg = $("#superModalImg");
var superShade = $("#superShade");
var superModal = $("#superModal");

$("#pacmentalImg").on("click", function () {
  modalShade.fadeIn("fast");
  $("#pacmentalModal").show("fast");
});

$(".close, #modalShade").on("click", function () {
  modalShade.fadeOut("fast");
  $("#pacmentalModal").hide("fast");
});

$(".thumbnail").on("click", function () {
  var src = $(this).attr("src");
  var imgTag = '<img src="' + src + '" />';

  isSuper = true;

  superModalImg.html(imgTag);
  superShade.fadeIn("fast");
  superModal.show("fast");
});

$("#superCloseWrap, #superClose, #superShade").on("click", function () {
  isSuper = false;
  superShade.fadeOut("fast");
  superModal.hide("fast");
});

window.addEventListener('keyup', (e) => {
  if (e.key === "Escape") {
    if (!superModal) {
      modalShade.fadeOut("fast");
      $("#pacmentalModal").hide("fast");
    }
    else {
      isSuper = false;
      superShade.fadeOut("fast");
      superModal.hide("fast");
    }
  }
});