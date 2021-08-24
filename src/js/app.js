import { categoryProducts, topSearchProducts} from "./data.js";
import {loadContent,loadTopSearchProducts} from "./renderHTML.js";
import { showMenu } from "./show_menu.js";

const owl = $(".owl-carousel0");
const owl1 = $(".owl-carousel1");

const categoryPro = document.querySelector(".category-products");
const topSearchPro = document.querySelector(".top-search__products")
const showIcon = document.querySelector(".nav-menu")
const navWrapper = document.querySelector(".nav-wrapper");

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

loadContent(categoryProducts,categoryPro);
loadTopSearchProducts(topSearchProducts,topSearchPro);
