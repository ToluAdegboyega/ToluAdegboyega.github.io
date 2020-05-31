function myFunction() {
  var x = document.getElementById("my-navbar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

var typed = new Typed('#typed', {
  stringsElement: '#name-carousel',
  startDelay: 700,
  loop: true,
  typeSpeed: 39,
  backSpeed: 20,
  backDelay: 3400,
});
