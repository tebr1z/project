document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {});

  var firstSlide = swiper.slides[0];
  var leftCol = firstSlide.querySelector(".left-col");
  var rightCol = firstSlide.querySelector(".right-col");

  if (leftCol) {
    leftCol.classList.add("slide-in-left");
  }

  if (rightCol) {
    rightCol.classList.add("fade-in");
  }
});

var swiperCard = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var RECOMMENDED = new Swiper(".mySwiper-RECOMMENDED", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var happy = new Swiper(".mySwiper-happy", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function showDiv(divId) {
  // Tüm div elementlerini gizle
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  // İlgili div elementini göster
  document.getElementById(divId).style.display = "flex";
  document.getElementById("div1").style.display = "none"
  if(divId === "div1"){
    document.getElementById("div1").style.display = "flex"
  }
}
