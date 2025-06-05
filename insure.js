navbutton = document.getElementById("navbutton");
navbarsub = document.getElementById('navbar-sub');
display = navbarsub.style.display;

navbutton.addEventListener("click", () => {

    if (navbarsub.style.display === "flex") {
      navbarsub.style.display = "none";
    } else {
      navbarsub.style.display = "flex";
    }
  });