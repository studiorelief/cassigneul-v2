/*
 *============================================================================
 * COMPONENT : HOME / HUB
 *============================================================================
 */

import 'swiper/css/bundle';

import Swiper from 'swiper/bundle';

export function initHomeHubSlider() {
  const swipers = document.querySelectorAll('.swiper.is-home-hub');

  if (swipers.length === 0) {
    return;
  }

  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl as HTMLElement, {
      direction: 'horizontal',
      centeredSlides: false,
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
          freeMode: {
            enabled: true,
            sticky: false,
            momentumBounce: false,
          },
          // autoHeight: true,
          spaceBetween: 16 * 1.5,
          navigation: {
            nextEl: '.swiper-arrow.is-right',
            // prevEl: '.swiper-arrow.is-left',
          },
        },
        768: {
          slidesPerView: 'auto',
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
