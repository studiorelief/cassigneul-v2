/*
 *============================================================================
 * COMPONENT : HOME / HERO
 *============================================================================
 */

import 'swiper/css/bundle';

import Swiper from 'swiper/bundle';

export function initHomeHeroSwiper() {
  const swipers = document.querySelectorAll('.swiper.is-home-hero');

  if (swipers.length === 0) {
    return;
  }

  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl as HTMLElement, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      autoHeight: false,
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
      pagination: {
        el: '.swiper-pagination-wrapper',
        bulletClass: 'swiper-bullet',
        bulletActiveClass: 'swiper-bullet-active',
        clickable: true,
      },
      //   navigation: {
      //     nextEl: '.reviews_right-button',
      //     prevEl: '.reviews_left-button',
      //   },
      touchEventsTarget: 'wrapper',
      breakpoints: {
        320: {
          autoHeight: true,
        },
      },
    });
  });
}
