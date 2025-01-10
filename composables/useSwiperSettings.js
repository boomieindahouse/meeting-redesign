// /composables/useSwiperSettings.js
export const useSwiperSettings = () => {
    return {
      spaceBetween: 10,
      slidesPerView: 3, 
      pagination: { clickable: true },
      effect: "coverflow", 
      centeredSlides: true,
      loop: true,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
        scale: 0.8,
      },
    };
  };
  