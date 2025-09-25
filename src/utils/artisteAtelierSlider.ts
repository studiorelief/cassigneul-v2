/*
 *============================================================================
 * COMPONENT : HOME / HUB
 *============================================================================
 */

import 'swiper/css/bundle';

import Swiper from 'swiper/bundle';

export function initArtisteAtelierSlider() {
  const swipers = document.querySelectorAll('.swiper.is-atelier');

  if (swipers.length === 0) {
    return;
  }

  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl as HTMLElement, {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      initialSlide: 1, // Start at slide 2 (index 1)
      speed: 1000,
      grabCursor: true,
      allowTouchMove: true,
      keyboard: true,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
        eventsTarget: 'container',
      },
      //   pagination: {
      //     el: '.swiper-pagination-wrapper',
      //     bulletClass: 'swiper-bullet',
      //     bulletActiveClass: 'swiper-bullet-active',
      //     clickable: true,
      //   },
      //   navigation: {
      //     nextEl: '.reviews_right-button',
      //     prevEl: '.reviews_left-button',
      //   },
      touchEventsTarget: 'wrapper',
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16 * 2.5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16 * 2.5,
        },
        992: {
          slidesPerView: 'auto',
          spaceBetween: 16 * 5,
        },
      },
    });
  });
}
