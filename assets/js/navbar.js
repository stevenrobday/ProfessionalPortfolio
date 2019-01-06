$(document).ready(function () {
  // globals for hamburger nav
  var isOpen = false;

  var $hamburger = $("#hamburgerImg");
  var $pages = $("#pages");
  var $icons = $("#icons");

  // click the hamburger
  $hamburger.on("click", function () {

    var position = $pages.offset().left;
    isOpen = !isOpen;

    // open navbar
    if (isOpen) {

      // if #pages is absolute, it will be on the left edge
      if (position === 0) {

        // reposition nav pages and icons
        $pages.css("top", "calc(var(--font-size-l) * 1.5)");
        $icons.css("top", "calc(var(--font-size-l) * 3)");
      }
      else {

        // #pages is relative here, so only reposition icons
        $icons.css("top", "calc(var(--font-size-l) * 1.5)");
      }
    }

    // close navbar
    else {
      $icons.css("top", "calc(var(--font-size-l) * -1.5)");

      if (position === 0) {
        $pages.css("top", "calc(var(--font-size-l) * -1.5)");
      }
    }
  });

  // reset to default css on window resize,
  // otherwise $pages and $icons will keep jquery css attributes
  $(window).resize(function () {
    isOpen = false;
    $pages.css("top", "");
    $icons.css("top", "");
  });
});