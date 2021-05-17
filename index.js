console.log("HI");
// console.log(window);

// $(window).resize(function () {
var width = window.innerWidth;
// console.log(width);
$(window)
  .resize(() => {
    if (width > 800) {
      $("#banner").attr("src", "./asset/banner2.png");
    }
  })
  .resize();
//   console.log(width);
// })();
