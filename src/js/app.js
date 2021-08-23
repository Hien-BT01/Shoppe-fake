import { categoryProducts, topSearchProducts} from "./data.js";
import {loadContent,loadTopSearchProducts} from "./renderHTML.js";

const owl = $(".owl-carousel0");
const owl1 = $(".owl-carousel1");

const categoryPro = document.querySelector(".category-products");
const topSearchPro = document.querySelector(".top-search__products")

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


loadContent(categoryProducts,categoryPro);
loadTopSearchProducts(topSearchProducts,topSearchPro);
