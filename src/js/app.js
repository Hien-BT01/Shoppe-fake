import { categoryProducts, topSearchProducts } from "./data.js";
import { loadContent, loadTopSearchProducts } from "./renderHTML.js";
import { showMenu } from "./show_menu.js";
import { showLogOut, showChangePassword } from "./setting.js";

const owl = $(".owl-carousel0");
const owl1 = $(".owl-carousel1");

const SignInUp = document.querySelector(".log");
const avatar = document.querySelector(".account");
const categoryPro = document.querySelector(".category-products");
const topSearchPro = document.querySelector(".top-search__products");
const showIcon = document.querySelector(".nav-menu");
const navWrapper = document.querySelector(".nav-wrapper");
const logOutElement = document.querySelector(".setting");
const notificationBeforeSignIn = document.querySelector(".before-login");
const notificationAfterSignIn = document.querySelector(".after-login");
const menuIcon = showIcon.querySelector("i");
const changPassElement = document.querySelector(".change-password");
const footer = document.querySelector("footer");
const dataAccounts = JSON.parse(localStorage.getItem("accountList")) || [];

if (Cookies.get("isLog") === "true") {
  avatar.classList.remove("log-active");
  SignInUp.classList.add("log-active");
  notificationAfterSignIn.classList.remove("noti-active__login");
  notificationBeforeSignIn.classList.add("noti-active__login");
} else {
  avatar.classList.add("log-active");
  SignInUp.classList.remove("log-active");
  notificationAfterSignIn.classList.add("noti-active__login");
  notificationBeforeSignIn.classList.remove("noti-active__login");
}

window.addEventListener("resize", (e) => {
  if (menuIcon.classList.contains("fa-times-circle")) {
    if (window.innerWidth > 991) {
      navWrapper.classList.remove("nav-active");
    } else {
      navWrapper.classList.add("nav-active");
    }
  }
});

owl1.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

owl.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

showIcon.addEventListener("click", (event) => {
  showMenu(event, navWrapper);
});

avatar.addEventListener("click", (e) => {
  showLogOut(logOutElement);
});

changPassElement.addEventListener("click", e => {
  showChangePassword(footer,dataAccounts,Cookies.get("username"))
})
loadContent(categoryProducts, categoryPro);
loadTopSearchProducts(topSearchProducts, topSearchPro);