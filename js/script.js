// Toggle Class Active
const navBarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navBarNav.classList.toggle('active');
}

// Klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }
});
