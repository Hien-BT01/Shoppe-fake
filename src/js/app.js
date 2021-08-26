import { categoryProducts, topSearchProducts} from "./data.js";
import {loadContent,loadTopSearchProducts} from "./renderHTML.js";
import { showMenu } from "./show_menu.js";
import { showLogOut } from "./logout.js";


const owl = $(".owl-carousel0");
const owl1 = $(".owl-carousel1");

const SignInUp = document.querySelector(".log")
const avatar = document.querySelector(".account");
const categoryPro = document.querySelector(".category-products");
const topSearchPro = document.querySelector(".top-search__products")
const showIcon = document.querySelector(".nav-menu")
const navWrapper = document.querySelector(".nav-wrapper");
const logOutElement = document.querySelector(".log-out");

if(Cookies.get("isLog") === "true"){
  avatar.classList.remove("log-active")
  SignInUp.classList.add("log-active")
}else{
  avatar.classList.add("log-active")
  SignInUp.classList.remove("log-active")
}

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

showIcon.addEventListener("click",event => {
  showMenu(event,navWrapper);
})


avatar.addEventListener("click", e => {
  showLogOut(logOutElement);
})

loadContent(categoryProducts,categoryPro);
loadTopSearchProducts(topSearchProducts,topSearchPro);

