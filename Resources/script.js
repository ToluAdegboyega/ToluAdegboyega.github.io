var i = 0;
var txt = 'Hello, I am Tolu.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name-carousel").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}