//Navbar CSS Property in Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//Profile section redirecting
const profileIcon = document.querySelector(".Profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile.html";
  window.history.back();
});



//movies card

const moviesCard = document.querySelectorAll(".content-card");
moviesCard.forEach((card) => {
  card.addEventListener("mouseEnter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
