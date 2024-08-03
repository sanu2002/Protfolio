const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    slidesPerView: 2, // Corrected property name
    spaceBetween: 20, // Add space between slides
    grabCursor:true,


  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints:{
        0:{
            slidesPerView:1
        },
        620:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }


    }




  });
  


