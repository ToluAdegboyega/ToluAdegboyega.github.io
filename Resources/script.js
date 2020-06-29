
var typed = new Typed('#typed', {
  stringsElement: '#name-carousel',
  startDelay: 700,
  loop: true,
  typeSpeed: 39,
  backSpeed: 20,
  backDelay: 3400,
});

function script(){
  setTimeout(function(){
      document.getElementById('test').style.left = '1000px'; // new left position is 1000px in this example
  }, 2000); // 2000 = 2 seconds after page load
}