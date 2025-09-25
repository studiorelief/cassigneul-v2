/*
 *============================================================================
 * COMPONENT : HOME / HUB
 *============================================================================
 */

import 'swiper/css/bundle';

import Swiper from 'swiper/bundle';

export function initArtisteGalerieSlider() {
  const swipers = document.querySelectorAll('.swiper.is-galerie');

  if (swipers.length === 0) {
    return;
  }

  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl as HTMLElement, {
      direction: 'horizontal',
      loop: true,
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
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
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
          slidesPerView: 3,
          spaceBetween: 16 * 2.5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16 * 2.5,
        },
        992: {
          slidesPerView: 8,
          spaceBetween: 16 * 1.5,
        },
      },
    });
  });
}
