var isSuper = false;

var $modalShade = $("#modalShade");
var $exampleThumb = $(".exampleThumb");
var $superModalImg = $("#superModalImg");
var $superShade = $("#superShade");
var $superModal = $("#superModal");
var $superClose = $("#superClose");
var $superCloseWrap = $("#superCloseWrap");
var $dataId;
var $close = $(".close");
var $thumbnail = $(".thumbnail");

$exampleThumb.on("click", function () {
  $modalShade.fadeIn("fast");
  $dataId = $("#" + $(this).attr("data-id"));
  $dataId.show("fast");
});

$(".close, #modalShade").on("click", function () {
  $modalShade.fadeOut("fast");
  $dataId.hide("fast");
});

$thumbnail.on("click", function () {
  var src = $(this).attr("src");
  var $imgTag = $('<img>');
  $imgTag.attr("src", src);

  var imgWidth = $(this).width();
  var imgHeight = $(this).height();
  var imgRatio = imgWidth / imgHeight;
  
  var docWdth = $(document).width();
  var docHeight = $(document).height();
  
  if(docHeight >= docWdth){
    if(docWdth < 400 || imgRatio < 1) {
      $imgTag.height("100%");
      $imgTag.width("65vw");
    }
    else {
      $imgTag.height("100%");
      $imgTag.width("80vw");
    }
  }
  else if(imgRatio <= 1){
    $imgTag.height("calc(100vh - var(--font-size-l) * 4)");
    $imgTag.width("100%");
  }
  else if(imgRatio > 1.5){
    $imgTag.height("100%");
    $imgTag.width("70vw");
  }
  else{
    $imgTag.height("100%");
    $imgTag.width("50vw");
  }

  isSuper = true;

  $superModalImg.html($imgTag);
  $superShade.fadeIn("fast");
  $superModal.show("fast");
});

$("#superCloseWrap, #superClose, #superShade").on("click", function () {
  isSuper = false;
  $superShade.fadeOut("fast");
  $superModal.hide("fast");
});

window.addEventListener('keyup', (e) => {
  if (e.key === "Escape") {
    if (!isSuper) {
      $modalShade.fadeOut("fast");
      $dataId.hide("fast");
    }
    else {
      isSuper = false;
      $superShade.fadeOut("fast");
      $superModal.hide("fast");
    }
  }
});

$(window).resize(function() {
  if (isSuper) {
    isSuper = false;
      $superShade.fadeOut("fast");
      $superModal.hide("fast");
  }
});