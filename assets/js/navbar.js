var isOpen = false;

var $hamburger = $("#hamburgerImg");
var $pages = $("#pages");
var $icons = $("#icons");

$hamburger.on("click", function () {
  var position = $pages.offset();
  isOpen = !isOpen;

  //open navbar
  if(isOpen) {
    if (position.left === 0) {
      $pages.css("top", "calc(var(--font-size-l) * 1.5)");
      $icons.css("top", "calc(var(--font-size-l) * 3)");
    }
    else {
      $icons.css("top", "calc(var(--font-size-l) * 1.5)");
    }
  }
  //close navbar
  else {
    if (position.left === 0) {
      $pages.css("top", "calc(var(--font-size-l) * -1.5)");
      $icons.css("top", "calc(var(--font-size-l) * -3)");
    }
    else {
      $icons.css("top", "calc(var(--font-size-l) * -1.5)");
    }
  }
});

//reset to default css on window resize,
//otherwise $pages and $icons will keep jquery css attr
$(window).resize(function() {
  isOpen = false;
  $pages.css("top", "");
  $icons.css("top", "");
});