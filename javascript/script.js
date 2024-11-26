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

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  const slideIndices = {};

  carousels.forEach((carousel) => {
    const carouselName = carousel.getAttribute("data-carousel");
    slideIndices[carouselName] = 0;

    const indicators = carousel.querySelectorAll(".spanCircle");

    // Show the first slide for each carousel
    showSlide(carouselName, 0);

    // Add click event listeners to the left and right arrows
    const arrows = carousel.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", (event) => {
        const direction = arrow.classList.contains("left") ? -1 : 1; // Explicitly check arrow direction
        changeSlide(carouselName, direction);
        event.stopPropagation(); // Prevent half-image click events from triggering
      });
    });

    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent half-image click events from firing
        showSlide(carouselName, index);
        slideIndices[carouselName] = index;
      });
    });

    // Add click event listeners to the left and right halves of the image
    carousel.addEventListener("click", (e) => {
      const rect = carousel.getBoundingClientRect();
      const clickX = e.clientX - rect.left;

      if (clickX < rect.width / 2) {
        // Left half
        changeSlide(carouselName, -1);
      } else {
        // Right half
        changeSlide(carouselName, 1);
      }
    });
  });

  function changeSlide(carouselName, direction) {
    const slides = document.querySelectorAll(`.mySlides.${carouselName}`);
    const indicators = document.querySelectorAll(
      `[data-carousel="${carouselName}"] .spanCircle`
    );
    slideIndices[carouselName] =
      (slideIndices[carouselName] + direction + slides.length) % slides.length;

    showSlide(carouselName, slideIndices[carouselName]);
  }

  function showSlide(carouselName, index) {
    const slides = document.querySelectorAll(`.mySlides.${carouselName}`);
    const indicators = document.querySelectorAll(
      `[data-carousel="${carouselName}"] .spanCircle`
    );

    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }
});

/*
document.addEventListener("DOMContentLoaded", () => {
  // Initialize slide indices for all carousels
  const carousels = document.querySelectorAll(".carousel");
  const slideIndices = {};

  carousels.forEach((carousel) => {
    const carouselName = carousel.getAttribute("data-carousel");
    slideIndices[carouselName] = 0;

    // Show the first slide for each carousel
    showSlide(carouselName, 0);

    // Add click event listeners to the left and right arrows
    const arrows = carousel.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        const direction = parseInt(arrow.getAttribute("data-direction"));
        changeSlide(carouselName, direction);
      });
    });

    // Add click event listeners to the left and right halves
    carousel.addEventListener("click", (e) => {
      const rect = carousel.getBoundingClientRect();
      const clickX = e.clientX - rect.left;

      if (clickX < rect.width / 2) {
        // Left half
        changeSlide(carouselName, -1);
      } else {
        // Right half
        changeSlide(carouselName, 1);
      }
    });
  });

  function changeSlide(carouselName, direction) {
    const slides = document.querySelectorAll(`.mySlides.${carouselName}`);
    slideIndices[carouselName] =
      (slideIndices[carouselName] + direction + slides.length) % slides.length;

    showSlide(carouselName, slideIndices[carouselName]);
  }

  function showSlide(carouselName, index) {
    const slides = document.querySelectorAll(`.mySlides.${carouselName}`);
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }
});

---------------------------

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

// Define slide indices for each carousel
var slideIndices = {
  mySlides1: 1,
  mySlides2: 1,
  mySlides3: 1,
  mySlides4: 1
};

// Initialize each carousel
showDivs('mySlides1', slideIndices.mySlides1);
showDivs('mySlides2', slideIndices.mySlides2);
showDivs('mySlides3', slideIndices.mySlides3);
showDivs('mySlides4', slideIndices.mySlides4);

// Function to navigate slides
function plusDivs(carousel, n) {
  slideIndices[carousel] += n;
  showDivs(carousel, slideIndices[carousel]);
}

// Function to jump to a specific slide
function currentDiv(carousel, n) {
  slideIndices[carousel] = n;
  showDivs(carousel, slideIndices[carousel]);
}

// Function to display the appropriate slide
function showDivs(carousel, n) {
  var i;
  var slides = document.getElementsByClassName(carousel);
  var dots = document.getElementsByClassName(carousel + "-dots");
  
  if (n > slides.length) { slideIndices[carousel] = 1; }
  if (n < 1) { slideIndices[carousel] = slides.length; }
  
  // Hide all slides in the current carousel
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Remove active class from dots in the current carousel
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  
  // Show the current slide and set the active dot
  slides[slideIndices[carousel] - 1].style.display = "block";  
  dots[slideIndices[carousel] - 1].className += " w3-white";
}
*/