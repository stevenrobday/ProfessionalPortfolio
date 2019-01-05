$(document).ready(function() {

  //globals
  var isModal = false;
  var isSuper = false;
  var imgRatio;
  var imgWidth;
  var imgHeight;

  var $body = $("body");
  var $modalShade = $("#modalShade");
  var $superShade = $("#superShade");
  var $superModal = $("#superModal");
  var $superModalImgWrap = $("#superModalImgWrap");
  var $superModalImg = $("#superModalImg");
  var $dataId;
  var $imgTag;
  
  

  //initial project modal
  function showModal() {
    //disable background scrolling
    $body.css('overflow', 'hidden');

    //place modal relative to scroll position
    $dataId.css('margin-top', 'calc(' + $(document).scrollTop() + 'px + var(--font-size-l) * 2)');
    
    $dataId.show("fast");
  }

  //modal for thumbnails inside project modal (called "super modals" here)
  function showSuper() {
    var superModalWidth = $superModal.width();
    var superModalHeight = $superModal.height()
    var modalRatio = superModalWidth / superModalHeight;

    //for smaller super modal ratio, stretch image container to the width of the super modal and calculate height
    if(modalRatio < imgRatio){
      var tmpWidth = superModalWidth; 
      var tmpHeight = superModalWidth / imgWidth * imgHeight; 
    }

    //for equal or larger modal ratio, stretch image container to the height of the super modal
    else{
      var tmpWidth = superModalHeight / imgHeight * imgWidth; 
      var tmpHeight = superModalHeight; 
    }

    $superModalImgWrap.height(tmpHeight);
    $superModalImgWrap.width(tmpWidth);

    $superModal.css('margin-top', 'calc(' + $(document).scrollTop() + 'px + var(--font-size-l) * 2)');

    //now place the image inside the super modal image container
    $superModalImg.html($imgTag);
    $superShade.fadeIn("fast");
    $superModal.show("fast");
  }

  $(".exampleThumb").on("click", function () {
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

  $(".thumbnail").on("click", function () {
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
      $(document).scrollTop(0);
      showModal();
    }
    if (isSuper) {
      $(document).scrollTop(0);
      showSuper();
    }
  });
});