// Variables Starts

let openSearch = document.querySelector("#open_search");
let closeSearch = document.querySelector("#close_search");
let search = document.querySelector("#search");
let language = document.querySelector("#language_btn");
let currency = document.querySelector("#currency_btn");
let language_item = document.querySelector(".language");
let currency_item = document.querySelector(".currency");
let cartShow = document.querySelector("#cart_show_btn");
let sideMenu = document.querySelector("#side_menu");
let sideMenuClose = document.querySelector(".side_menu_close");
let listIcon = document.querySelector(".list_show");
let gridIcon = document.querySelector(".grid_show");
let shopGrid = document.querySelector("#shop_grid");
let shopList = document.querySelector("#shop_list");
let active = document.querySelector(".active");
let inactive = document.querySelector(".inactive");

let decrement = document.querySelector(".cart_box .minus");
let increment = document.querySelector(".cart_box .plus");
let cart = document.querySelector(".cart_box .cart");

// Variables Ends

$(function () {
  // Hero Slider Starts
  $(".hero_slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    speed: 600,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  // Hero Slider Ends

  // New Arrivals Slider Starts
  $(".new_product_slider").slick({
    slidesToShow: 4,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick_prev'><i class='fa-solid fa-arrow-left' ></i></button>",
    nextArrow:
      "<button type='button' class='slick_next'><i class='fa-solid fa-arrow-right' ></i></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
  // New Arrivals Slider Ends

  // Deals Section Slider Starts
  $(".deals_slider").slick({
    slidesToShow: 2,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "deals_slider_dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Deals Section Slider Ends

  // Latest News Slider Starts
  $(".latest_news_slider").slick({
    slidesToShow: 4,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "latest_news_slider_dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Latest News Slider Ends
  // Team Slider Starts
  $(".team_slider").slick({
    slidesToShow: 4,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick_prev'><i class='fa-solid fa-arrow-left' ></i></button>",
    nextArrow:
      "<button type='button' class='slick_next'><i class='fa-solid fa-arrow-right' ></i></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  // Team Slider Ends

  // Instagram Slider Starts
  $(".instagram_slider").slick({
    slidesToShow: 6,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "instagram_slider_dots",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Instagram Slider Ends

  // Profile Slider Starts
  $(".profile_slider").slick({
    slidesToShow: 1,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "instagram_slider_dots",
  });
  // Profile Slider Ends

  // Shop Details Main Slider Starts
  $(".details_main_slider").slick({
    slidesToShow: 1,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    asNavFor: ".details_sub_slider",
  });
  // Shop Details Main Slider Ends\
  // Shop Details Sub Slider Starts
  $(".details_sub_slider").slick({
    slidesToShow: 5,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: true,
    asNavFor: ".details_main_slider",
    centerMode: true,
    centerPadding: "0px",
    prevArrow:
      "<button type='button' class='slick_prev'><i class='fa-solid fa-arrow-left' ></i></button>",
    nextArrow:
      "<button type='button' class='slick_next'><i class='fa-solid fa-arrow-right' ></i></button>",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  // Shop Details Sub Slider Ends

  // Related Product Slider Starts
  $(".related_product_slider").slick({
    slidesToShow: 4,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick_prev'><i class='fa-solid fa-arrow-left' ></i></button>",
    nextArrow:
      "<button type='button' class='slick_next'><i class='fa-solid fa-arrow-right' ></i></button>",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
  // Related Product Slider Ends

  // Deals Timer JS Starts

  $("#deals_timer").countdown("2025/03/20", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          "<div><h4>%D</h4> <p>Days</p></div>" +
          "<span>:</span>" +
          "<div><h4>%H</h4> <p>Hours</p></div>" +
          "<span>:</span>" +
          "<div><h4>%M</h4> <p>Minute</p></div>" +
          "<span>:</span>" +
          "<div><h4>%S</h4> <p>Sec</p></div>"
      )
    );
  });
  // Deals Timer JS Ends
});
$(function () {
  // Cart Increment Decrement Starts
  $("#quantity_count0").handleCounter({
    minimum: 1,
    maximize: null,
  });
  $("#quantity_count1").handleCounter({
    minimum: 1,
    maximize: null,
  });
  $("#quantity_count2").handleCounter({
    minimum: 1,
    maximize: null,
  });
  // Cart Increment Decrement Ends
});
// Search Pop Up JS Starts
openSearch.addEventListener("click", () => {
  search.classList.add("show");
  if (language_item.classList.contains("visible")) {
    language_item.classList.remove("visible");
  } else if (currency_item.classList.contains("visible")) {
    currency_item.classList.remove("visible");
  }
});
closeSearch.addEventListener("click", () => {
  search.classList.remove("show");
});

// Search Pop Up JS Ends

// Top Header Drop Down JS Starts

language.addEventListener("click", () => {
  language_item.classList.toggle("visible");
  if (currency_item.classList.contains("visible")) {
    currency_item.classList.remove("visible");
  }
});
currency.addEventListener("click", () => {
  currency_item.classList.toggle("visible");
  if (language_item.classList.contains("visible")) {
    language_item.classList.remove("visible");
  }
});
// Top Header Drop Down JS Ends

//Shopping Cart Side Menu JS Starts
cartShow.addEventListener("click", () => {
  sideMenu.classList.add("side_menu_show");
  if (language_item.classList.contains("visible")) {
    language_item.classList.remove("visible");
  } else if (currency_item.classList.contains("visible")) {
    currency_item.classList.remove("visible");
  }
});
sideMenuClose.addEventListener("click", () => {
  sideMenu.classList.remove("side_menu_show");
});
//Shopping Cart Side Menu JS Ends

$(function () {
  // Shop List & Grid View Starts
  $(".list_show").click(function () {
    if (shopList.classList.contains("shop_hide")) {
      shopList.classList.remove("shop_hide");
      shopList.classList.add("shop_show");
      shopGrid.classList.remove("shop_show");
      shopGrid.classList.add("shop_hide");
    }

    if (listIcon.classList.contains("inactive")) {
      listIcon.classList.remove("inactive");
      listIcon.classList.add("active");
      gridIcon.classList.remove("active");
      gridIcon.classList.add("inactive");
    }
  });
  $(".grid_show").click(function () {
    if (shopGrid.classList.contains("shop_hide")) {
      shopGrid.classList.remove("shop_hide");
      shopGrid.classList.add("shop_show");
      shopList.classList.remove("shop_show");
      shopList.classList.add("shop_hide");
    }
    if (gridIcon.classList.contains("inactive")) {
      gridIcon.classList.remove("inactive");
      gridIcon.classList.add("active");
      listIcon.classList.remove("active");
      listIcon.classList.add("inactive");
    }
  });
  // Shop List & Grid View Ends
});

// Shop Details Starts

$(function () {
  // Shop List & Grid View Starts
  $(".product_description_button").click(function () {
    $(".product_description_button").removeClass("inactive").addClass("active");
    $(".customer_review_button").removeClass("active").addClass("inactive");
    $(".additional_info_button").removeClass("active").addClass("inactive");

    $("#product_description").removeClass("hide").addClass("show");
    $("#customer_review").removeClass("show").addClass("hide");
    $("#additional_info").removeClass("show").addClass("hide");
  });

  $(".customer_review_button").click(function () {
    $(".customer_review_button").removeClass("inactive").addClass("active");
    $(".product_description_button").removeClass("active").addClass("inactive");
    $(".additional_info_button").removeClass("active").addClass("inactive");

    $("#customer_review").removeClass("hide").addClass("show");
    $("#product_description").removeClass("show").addClass("hide");
    $("#additional_info").removeClass("show").addClass("hide");
  });

  $(".additional_info_button").click(function () {
    $(".additional_info_button").removeClass("inactive").addClass("active");
    $(".customer_review_button").removeClass("active").addClass("inactive");
    $(".product_description_button").removeClass("active").addClass("inactive");

    $("#additional_info").removeClass("hide").addClass("show");
    $("#customer_review").removeClass("show").addClass("hide");
    $("#product_description").removeClass("show").addClass("hide");
  });
});

// Shop Details Ends

// Venobox Activation Starts
new VenoBox({
  selector: ".my_link",
});
// Venobox Activation Ends
