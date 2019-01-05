$(document).ready(function () {

  // image preloader. otherwise the icons will flicker the first time you hover them
  // and we can't have that!
  // code from https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/
  // you can tell it's not mine cuz they don't use semicolons
  
  var images = new Array()
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image()
      images[i].src = preload.arguments[i]
    }
  }
  preload(
    "https://stevenrobday.github.io/ProfessionalPortfolio/assets/svg/githubHover.svg",
    "https://stevenrobday.github.io/ProfessionalPortfolio/assets/svg/linkedInHover.svg",
    "https://stevenrobday.github.io/ProfessionalPortfolio/assets/svg/resumeHover.svg",
    "https://stevenrobday.github.io/ProfessionalPortfolio/assets/svg/emailHover.svg"
  )

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
  // otherwise $pages and $icons will keep jquery css attr
  $(window).resize(function () {
    isOpen = false;
    $pages.css("top", "");
    $icons.css("top", "");
  });
});