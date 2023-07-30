// Toggle Class Active untuk humberger-menu
const navBarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navBarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#cart");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box Detail
const itemModalDetail = document.querySelector("#item-detail-modal");
const itemButtonsDetail = document.querySelectorAll(".item-detail-button");

itemButtonsDetail.forEach((btn) => {
  btn.onclick = (e) => {
    itemModalDetail.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close
document.querySelector(".close-icon").onclick = (e) => {
  itemModalDetail.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal Detail
window.onclick = (e) => {
  if (e.target === itemModalDetail) {
    itemModalDetail.style.display = "none";
  }
};
