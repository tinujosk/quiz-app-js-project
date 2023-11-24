/* Student Name: Tinu Jos Kadavanattu
     Student Number: 8927158
     Section: 07
*/

// Below function is used for the slider in home page. This is using a plugin called slick.
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: "linear",
  });
});
