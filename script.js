var lastScrollTop = 0;
header = document.getElementById("header");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-141px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
