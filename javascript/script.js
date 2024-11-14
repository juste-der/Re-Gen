function openNav() {
  const sidenav = document.getElementById("sidenav");

  if (window.innerWidth <= 767) {
    sidenav.style.width = "100vw";
    sidenav.style.height = "100vh";
  } else {
    sidenav.style.width = "22.4rem";
    sidenav.style.height = "48rem";
  }
}

function closeNav() {
  const sidenav = document.getElementById("sidenav");
  sidenav.style.width = "0";
  sidenav.style.height = "0";
}
