/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 🎭 SYSTÈME DE POPUP ANIMÉE
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Système complet de gestion de popup avec animations fluides et UX optimisée.
 *
 * 📋 FONCTIONNALITÉS :
 * ✅ Ouverture/fermeture avec animations CSS fluides
 * ✅ Blocage du scroll de la page quand popup ouverte
 * ✅ Fermeture par clic sur background ou touche Escape
 * ✅ Support des éléments enfants dans les déclencheurs
 * ✅ Gestion d'erreur si éléments manquants
 *
 * 🚀 UTILISATION :
 * 1. Importer et initialiser : initPopupForm()
 * 2. Ajouter trigger="popup" sur vos boutons
 * 3. Créer la structure HTML avec les bonnes classes
 *
 * 🎨 CLASSES CSS REQUISES :
 * - .popup_component : Conteneur principal
 * - .popup_background : Arrière-plan cliquable
 * - .popup_form : Contenu de la popup
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/**
 * 🎯 FONCTION POPUP - OUVERTURE
 *
 * Ouvre la popup avec des animations fluides et bloque le scroll de la page.
 *
 * 📋 ÉTAPES D'ANIMATION :
 * 1. Bloque le scroll de la page (overflow: hidden)
 * 2. Affiche le composant popup (display: flex)
 * 3. Anime le background : opacité 0 → 0.6 en 0.6s
 * 4. Anime le formulaire : opacité 0 → 1 + transform -10rem → 0rem en 0.3s/0.6s
 *
 * 🎨 ÉLÉMENTS REQUIS (classes CSS) :
 * - .popup_component : Conteneur principal de la popup
 * - .popup_background : Arrière-plan semi-transparent
 * - .popup_form : Formulaire/contenu de la popup
 */
export function showPopupForm(): void {
  // Sélection des éléments DOM requis
  const popupComponent = document.querySelector('.popup_component') as HTMLElement;
  const popupBackground = document.querySelector('.popup_background') as HTMLElement;
  const popupForm = document.querySelector('.popup_form') as HTMLElement;

  // Vérification de la présence des éléments
  if (!popupComponent || !popupBackground || !popupForm) {
    console.error('Éléments popup non trouvés - vérifiez les classes CSS');
    return;
  }

  // 🚫 Désactiver le scroll de la page
  document.body.style.overflow = 'hidden';

  // 🎬 État initial des éléments (avant animation)
  popupBackground.style.opacity = '0';
  popupForm.style.opacity = '0';
  popupForm.style.transform = 'translateY(-10rem)';

  // 👁️ Affichage de la popup
  popupComponent.style.display = 'flex';

  // 🎭 Animation du background (0.6s)
  setTimeout(() => {
    popupBackground.style.transition = 'opacity 0.6s ease';
    popupBackground.style.opacity = '0.6';
  }, 10);

  // 🎭 Animation du formulaire (0.3s opacité + 0.6s transform)
  setTimeout(() => {
    popupForm.style.transition = 'opacity 0.3s ease, transform 0.6s ease';
    popupForm.style.opacity = '1';
    popupForm.style.transform = 'translateY(0rem)';
  }, 10);
}

/**
 * 🎯 FONCTION POPUP - FERMETURE
 *
 * Ferme la popup avec des animations fluides inverses et réactive le scroll.
 *
 * 📋 ÉTAPES D'ANIMATION :
 * 1. Anime le background : opacité 0.6 → 0 en 0.6s
 * 2. Anime le formulaire : opacité 1 → 0 + transform 0rem → -10rem en 0.3s/0.6s
 * 3. Masque le composant popup (display: none) après 600ms
 * 4. Réactive le scroll de la page (overflow: '')
 */
export function hidePopupForm(): void {
  // Sélection des éléments DOM requis
  const popupComponent = document.querySelector('.popup_component') as HTMLElement;
  const popupBackground = document.querySelector('.popup_background') as HTMLElement;
  const popupForm = document.querySelector('.popup_form') as HTMLElement;

  // Vérification de la présence des éléments
  if (!popupComponent || !popupBackground || !popupForm) {
    console.error('Éléments popup non trouvés');
    return;
  }

  // 🎭 Animation inverse du background (0.6s)
  popupBackground.style.transition = 'opacity 0.6s ease';
  popupBackground.style.opacity = '0';

  // 🎭 Animation inverse du formulaire (0.3s opacité + 0.6s transform)
  popupForm.style.transition = 'opacity 0.3s ease, transform 0.6s ease';
  popupForm.style.opacity = '0';
  popupForm.style.transform = 'translateY(-10rem)';

  // ⏱️ Masquer la popup et réactiver le scroll après l'animation
  setTimeout(() => {
    popupComponent.style.display = 'none';
    // ✅ Réactiver le scroll de la page
    document.body.style.overflow = '';
  }, 600);
}

/**
 * 🎯 FONCTION POPUP - INITIALISATION
 *
 * Initialise tous les gestionnaires d'événements pour la popup.
 * À appeler une seule fois au chargement de la page.
 *
 * 🎮 ÉVÉNEMENTS GÉRÉS :
 * - Clic sur élément avec trigger="popup" → Ouvre la popup
 * - Clic sur .popup_background → Ferme la popup
 * - Touche Escape → Ferme la popup (si ouverte)
 */
export function initPopupForm(): void {
  // 🎯 Gestionnaire pour ouvrir la popup
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    // Vérifier si l'élément cliqué a l'attribut trigger="popup"
    if (target.getAttribute('trigger') === 'popup') {
      event.preventDefault();
      showPopupForm();
      return;
    }

    // 🔍 Vérifier les éléments parents (si clic sur enfant du bouton)
    let parent = target.parentElement;
    while (parent) {
      if (parent.getAttribute('trigger') === 'popup') {
        event.preventDefault();
        showPopupForm();
        break;
      }
      parent = parent.parentElement;
    }
  });

  // 🎯 Gestionnaire pour fermer la popup (clic sur background)
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('popup_background')) {
      event.preventDefault();
      hidePopupForm();
    }
  });

  // ⌨️ Gestionnaire pour fermer avec la touche Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const popupComponent = document.querySelector('.popup_component') as HTMLElement;
      if (popupComponent && popupComponent.style.display === 'flex') {
        hidePopupForm();
      }
    }
  });
}
