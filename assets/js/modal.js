var isModal = false;
var isSuper = false;

var $modalShade = $("#modalShade");
var $exampleThumb = $(".exampleThumb");
var $superModalImg = $("#superModalImg");
var $superShade = $("#superShade");
var $superModal = $("#superModal");
var $superClose = $("#superClose");
var $superCloseWrap = $("#superCloseWrap");
var $dataId;
var $imgTag;
var imgRatio;
var $close = $(".close");
var $thumbnail = $(".thumbnail");
var $body = $("body");

function showModal() {
  $dataId.css('margin-top', 'calc(' + $(document).scrollTop() + 'px + var(--font-size-l) * 2)');
  $dataId.show("fast");
  $body.css('overflow', 'hidden');
}

function showSuper() {
  var docWidth = $(document).width();
  var docHeight = $(document).height();
  var docRatio = docWidth / docHeight;
  
  if(docRatio <= 1){
    if(docWidth < 400 || imgRatio < 1) {
      $imgTag.height("100%");
      $imgTag.width("75vw");
    }
    else {
      $imgTag.height("100%");
      $imgTag.width("80vw");
    }
  }
  else if(imgRatio <= 1 || docRatio >= 2){
    $imgTag.height("calc(100vh - var(--font-size-l) * 4)");
    $imgTag.width("auto");
  }
  else if(imgRatio > 1.5){
    $imgTag.height("100%");
    $imgTag.width("70vw");
  }
  else{
    $imgTag.height("100%");
    $imgTag.width("50vw");
  }

  console.log(docRatio);

  $superModal.css('margin-top', $(document).scrollTop());

  isSuper = true;

  $superModalImg.html($imgTag);
  $superShade.fadeIn("fast");
  $superModal.show("fast");
}

$exampleThumb.on("click", function () {
  isModal = true;
  $modalShade.fadeIn("fast");
  $dataId = $("#" + $(this).attr("data-id"));
  showModal();
});

$(".close, #modalShade").on("click", function () {
  isModal = false;
  $modalShade.fadeOut("fast");
  $dataId.hide("fast");
  $body.css('overflow', 'auto');
});

$thumbnail.on("click", function () {
  var src = $(this).attr("src");
  $imgTag = $('<img>');
  $imgTag.attr("src", src);

  var imgWidth = $(this).width();
  var imgHeight = $(this).height();
  imgRatio = imgWidth / imgHeight;
  
  showSuper();
});

$("#superCloseWrap, #superClose, #superShade").on("click", function () {
  isSuper = false;
  $superShade.fadeOut("fast");
  $superModal.hide("fast");
});

window.addEventListener('keyup', (e) => {
  if (e.key === "Escape") {
    if (!isSuper && isModal) {
      isModal = false;
      $modalShade.fadeOut("fast");
      $dataId.hide("fast");
      $body.css('overflow', 'auto');
    }
    else if(isSuper){
      isSuper = false;
      $superShade.fadeOut("fast");
      $superModal.hide("fast");
    }
  }
});

$(window).resize(function() {
  if (isModal) {
    showModal();
  }
  if(isSuper){
    showSuper();
  }
});