window.addEventListener("scroll", function() {
  const background = document.querySelector(".parallaxJS");
  var scrolled = window.pageYOffset;
  var rate = scrolled * -0.5;
  background.style.backgroundPosition = "-1500px " + rate + "px";
});
