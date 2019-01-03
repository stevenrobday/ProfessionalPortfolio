var isModal = false;
var isSuper = false;

var $modalShade = $("#modalShade");
var $exampleThumb = $(".exampleThumb");
var $superModalImgWrap = $("#superModalImgWrap");
var $superModalImg = $("#superModalImg");
var $superShade = $("#superShade");
var $superModal = $("#superModal");
var $superClose = $("#superClose");
var $superCloseWrap = $("#superCloseWrap");
var $dataId;
var $imgTag;
var imgRatio;
var imgWidth;
var imgHeight;
var $close = $(".close");
var $thumbnail = $(".thumbnail");
var $body = $("body");

function showModal() {
  $body.css('overflow', 'hidden');
  $dataId.css('margin-top', 'calc(' + $(document).scrollTop() + 'px + var(--font-size-l) * 2)');
  $dataId.show("fast");
}

function showSuper() {
  var superModalWidth = $superModal.width();
  var superModalHeight = $superModal.height()
  var modalRatio = superModalWidth / superModalHeight;

  if(modalRatio < imgRatio){
    var tmpHeight = $superModal.width() / imgWidth * imgHeight; 
    var tmpWidth = $superModal.width(); 
    
    $superModalImgWrap.height(tmpHeight);
    $superModalImgWrap.width(tmpWidth);
  }
  else{
    var tmpWidth = $superModal.height() / imgHeight * imgWidth; 
    var tmpHeight = $superModal.height(); 

    $superModalImgWrap.height(tmpHeight);
    $superModalImgWrap.width(tmpWidth);
  }

  $superModal.css('margin-top', 'calc(' + $(document).scrollTop() + 'px + var(--font-size-l) * 2)');

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

  imgWidth = $(this).width();
  imgHeight = $(this).height();
  imgRatio = imgWidth / imgHeight;

  isSuper = true;
  showSuper();
});

$("#superCloseWrap, #superClose, #superShade, #superModal").on("click", function (e) {
  if($(e.target).is('img')){
    return false;
  }
  
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
    else if (isSuper) {
      isSuper = false;
      $superShade.fadeOut("fast");
      $superModal.hide("fast");
    }
  }
});

$(window).resize(function () {
  if (isModal) {
    showModal();
  }
  if (isSuper) {
    showSuper();
  }
});