var isSuper = false;

var modalShade = $("#modalShade");
var exampleThumb = $(".exampleThumb");
var superModalImg = $("#superModalImg");
var superShade = $("#superShade");
var superModal = $("#superModal");
var superClose = $("#superClose");
var superCloseWrap = $("#superCloseWrap");
var dataId;
var close = $(".close");
var thumbnail = $(".thumbnail");

$(exampleThumb).on("click", function () {
  modalShade.fadeIn("fast");
  dataId = $("#" + $(this).attr("data-id"));
  dataId.show("fast");
});

$(".close, #modalShade").on("click", function () {
  modalShade.fadeOut("fast");
  dataId.hide("fast");
});

$(thumbnail).on("click", function () {
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
      dataId.hide("fast");
    }
    else {
      isSuper = false;
      superShade.fadeOut("fast");
      superModal.hide("fast");
    }
  }
});