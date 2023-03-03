

AOS.init();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#hd'
})

// 스와이퍼 js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop : false,
    
    scrollbar: {
  el: ".swiper-scrollbar",
  hide: true,
},
  });

