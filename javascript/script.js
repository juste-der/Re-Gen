function openNav() {
  const sidenav = document.getElementById("sidenav");

  if (window.innerWidth <= 430) {
    sidenav.style.width = "100vw";
    sidenav.style.height = "100vh";
  } else {
    sidenav.style.width = "24rem";
    sidenav.style.height = "43rem";
  }
}

function closeNav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.width = "0";
  sidenav.style.height = "0";
}

/*----- Product slides -----*/

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  const slideIndices = {};

  carousels.forEach((carousel) => {
    const carouselName = carousel.getAttribute("data-carousel");
    slideIndices[carouselName] = 0;

    const indicators = carousel.querySelectorAll(".spanCircle");

    showSlide(carouselName, 0);

    const arrows = carousel.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", (event) => {
        const direction = arrow.classList.contains("left") ? -1 : 1;
        changeSlide(carouselName, direction);
        event.stopPropagation();
      });
    });

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", (e) => {
        e.stopPropagation();
        showSlide(carouselName, index);
        slideIndices[carouselName] = index;
      });
    });

    carousel.addEventListener("click", (e) => {
      const rect = carousel.getBoundingClientRect();
      const clickX = e.clientX - rect.left;

      if (clickX < rect.width / 2) {
        changeSlide(carouselName, -1);
      } else {
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

/*----- Reset subsribe form when clicking "Register" -----*/

document.addEventListener("DOMContentLoaded", () => {
  const handleNewsletterReset = (emailInputId, checkboxId, buttonClass) => {
    const emailInput = document.getElementById(emailInputId);
    const acceptPolicyCheckbox = document.getElementById(checkboxId);
    const subscribeButton = document.querySelector(buttonClass);

    if (emailInput && acceptPolicyCheckbox && subscribeButton) {
      subscribeButton.addEventListener("click", () => {
        if (acceptPolicyCheckbox.checked && emailInput.value !== "") {
          emailInput.value = "";
          acceptPolicyCheckbox.checked = false;
        } else {
          alert(
            "Please fill in your email and accept the policy before subscribing."
          );
        }
      });
    }
  };

  // Main newsletter form
  handleNewsletterReset("m-email", "mc-accept-policy", ".m-subscribe-button");

  // Desktop newsletter form
  handleNewsletterReset("d-email", "dc-accept-policy", ".d-subscribe-button");

  // Popup newsletter form
  handleNewsletterReset(
    "popup-email",
    "popup-accept-policy",
    ".popup-subscribe-button"
  );
});

/*----- "Register"-button color change on click -----*/

document
  .querySelector(".m-subscribe-button")
  .addEventListener("click", (event) => {
    const button = event.target;

    button.style.backgroundColor = "#fff";

    setTimeout(() => {
      button.style.backgroundColor = "#4c759f";
    }, 150);
  });

document
  .querySelector(".popup-subscribe-button")
  .addEventListener("click", (event) => {
    const button = event.target;

    button.style.backgroundColor = "#fff";

    setTimeout(() => {
      button.style.backgroundColor = "#4c759f";
    }, 150);
  });

/*------- Popup window ------*/
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".popup-overlay");
  const popupContainer = document.querySelector(".popup-container");
  const popupClose = document.getElementById("popup-close");
  const subscribeButton = document.querySelector(".popup-subscribe-button");
  const emailInput = document.getElementById("popup-email");
  const acceptPolicyCheckbox = document.getElementById("popup-accept-policy");

  const showPopup = () => {
    popupContainer.style.display = "block";
    overlay.style.display = "block";
  };

  const closePopup = () => {
    popupContainer.style.display = "none";
    overlay.style.display = "none";
  };

  setTimeout(showPopup, 100);

  popupClose.addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);
});
