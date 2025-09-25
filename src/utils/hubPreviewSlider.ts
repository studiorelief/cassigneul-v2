/*
 *============================================================================
 * COMPONENT : HUB / PREVIEW
 *============================================================================
 */

import 'swiper/css/bundle';

import Swiper from 'swiper/bundle';

export function initHubPreviewSlider() {
  const swipers = document.querySelectorAll('.swiper.is-hub-preview');

  if (swipers.length === 0) {
    return;
  }

  swipers.forEach((swiperEl) => {
    // Destroy existing swiper instance if it exists to prevent conflicts
    const existingSwiper = (swiperEl as Element & { swiper?: Swiper }).swiper;
    if (existingSwiper) {
      existingSwiper.destroy(true, true);
    }

    new Swiper(swiperEl as HTMLElement, {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 1.5 * 16,
      centeredSlides: true,

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
      touchEventsTarget: 'wrapper',
      navigation: {
        nextEl: '.swiper-arrow.is-right',
        prevEl: '.swiper-arrow.is-left',
      },
    });
  });
}

/**
 * Initialize Hub Preview Popup Functionality
 *
 * Sets up click handlers for cards to open preview popups with the corresponding slider.
 * When a card is clicked, it opens a popup and navigates to the matching slide based on the slug.

 *
 * @description
 * - Cards with `card="{slug}"` attribute will trigger popup opening
 * - Slides with `preview="{slug}"` attribute will be matched and displayed
 * - Background clicks will close the popup
 * - Smooth opacity transitions for opening/closing
 */
export function showHubPreviewPopup() {
  // Get all cards with card attribute
  const hubCards = document.querySelectorAll('[card]');

  hubCards.forEach((card) => {
    // Add click handler to each card
    card.addEventListener('click', () => {
      const cardSlug = card.getAttribute('card');
      const popupWrapper = document.querySelector('.hub_preview-wrapper');

      if (popupWrapper instanceof HTMLElement && cardSlug) {
        // Reinitialize Swiper before showing the popup to ensure proper functionality
        initHubPreviewSlider();

        // Find the matching preview slide
        const matchingSlide = document.querySelector(`[preview="${cardSlug}"]`);

        if (matchingSlide) {
          // Get the swiper instance
          const swiperInstance = (matchingSlide.closest('.swiper') as Element & { swiper?: Swiper })
            ?.swiper;

          if (swiperInstance) {
            // Find the index of the matching slide
            const slideIndex = Array.from(swiperInstance.slides).findIndex((slide) => {
              // Check if the slide itself has the preview attribute
              if (
                (slide as Element).hasAttribute('preview') &&
                (slide as Element).getAttribute('preview') === cardSlug
              ) {
                return true;
              }
              // Or check if there's a child element with the preview attribute
              return (slide as Element).querySelector(`[preview="${cardSlug}"]`) !== null;
            });

            // Navigate to the correct slide
            if (slideIndex !== -1) {
              swiperInstance.slideTo(slideIndex);
            }
          }
        }

        // Show the popup with smooth transition
        popupWrapper.style.display = 'flex';
        popupWrapper.style.position = 'fixed';
        popupWrapper.style.zIndex = '2';
        popupWrapper.style.opacity = '0';
        popupWrapper.style.transition = 'opacity 300ms';
        requestAnimationFrame(() => {
          popupWrapper.style.opacity = '1';
        });
      }
    });
  });

  // Set up popup close functionality
  const popupBackgrounds = document.querySelectorAll('.hub_preview-background, .swiper-close');

  popupBackgrounds.forEach((popupBackground) => {
    // Add click handler to each background to close popup
    popupBackground.addEventListener('click', () => {
      const popupWrapper = document.querySelector('.hub_preview-wrapper');
      if (popupWrapper instanceof HTMLElement) {
        // Close popup with smooth transition
        popupWrapper.style.transition = 'opacity 300ms';
        popupWrapper.style.opacity = '0';
        setTimeout(() => {
          popupWrapper.style.display = 'none';
          popupWrapper.style.position = 'relative';
          popupWrapper.style.zIndex = '0';
        }, 200);
      }
    });
  });
}
