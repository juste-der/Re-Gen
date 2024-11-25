function openNav() {
  const sidenav = document.getElementById("sidenav");

  if (window.innerWidth <= 430) {
    sidenav.style.width = "100vw";
    sidenav.style.height = "100vh";
  } else {
    sidenav.style.width = "24rem";
    sidenav.style.height = "48rem";
  }
}

function closeNav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.width = "0";
  sidenav.style.height = "0";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}