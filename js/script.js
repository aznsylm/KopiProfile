// Toggle Class Active
const navBarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#menu").onclick = () => {
  navBarNav.classList.toggle("active");
};

// Klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }
});
