import './index.css';

import { initArtisteAtelierSlider } from '$utils/artisteAtelierSlider';
import { initArtisteGalerieSlider } from '$utils/artisteGalerieSlider';
import { initHomeHeroSwiper } from '$utils/heroSlider';
import { initHomeHubEncheresSlider } from '$utils/homeHubEncheres';
import { initHomeHubSlider } from '$utils/homeHubSlider';
import { initHubPreviewSlider, showHubPreviewPopup } from '$utils/hubPreviewSlider';
import { initMarker } from '$utils/marker';
import { initSideNav } from '$utils/navbar';
import { initPopupForm } from '$utils/popupForm';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* Marker */
  initMarker();

  /* Nav */
  initSideNav();

  /* Popup */
  initPopupForm();

  /* slider */
  initHomeHeroSwiper();
  initHomeHubSlider();
  initHomeHubEncheresSlider();
  initHubPreviewSlider();

  /* Hub Preview Popup */
  showHubPreviewPopup();

  /* Artiste Slider */
  initArtisteAtelierSlider();
  initArtisteGalerieSlider();
});
