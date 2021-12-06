$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY < 20) {
      $("header").removeClass("aktive");
      select.style.color = "crimson";
    } else {
      $("header").addClass("aktive");
      select.style.color = "#fff";
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // Efekti Karuselit
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var x = document.querySelector(".x");
var li = document.querySelectorAll(".menu li a");
var body = document.body;
// burger.addEventListener('click', shownavbar);

function shownavbar(e) {
  menu.classList.add("aktive-menu");
}

// x.addEventListener('click', hidenavbar);

function hidenavbar() {
  menu.classList.remove("aktive-menu");
}

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    menu.classList.remove("aktive-menu");
  });
}

let navMenu = document.querySelector("#navMenu");
navMenu.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  if (menu.classList.contains("aktive-menu")) {
    hidenavbar();
  } else {
    shownavbar();
  }
});
