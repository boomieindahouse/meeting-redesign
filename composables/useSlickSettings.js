// /composables/useSlickSettings.js
export const useSlickSettings = () => {
    return {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    };
  };
  