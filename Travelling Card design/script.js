var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        320:{
            slidesPerView:1
            
        },
        720:{
            slidesPerView:2
        },
        1200:{
            slidesPerView:2,
        },
        1500:{
            slidesPerView:3
        }
    }
  });