/**
 * Initialise la navigation latérale (side nav)
 * - Au clic sur #side-nav : ouvre le menu latéral
 * - Le menu passe de transform: translate(-100%, 0px) à transform: translate(0%, 0px)
 * - Au clic ailleurs (sauf sur .nav_side ou ses enfants) : ferme le menu
 */
export function initSideNav(): void {
  const sideNavButton = document.querySelector('#side-nav') as HTMLElement;
  const navSide = document.querySelector('.nav_side') as HTMLElement;

  if (!sideNavButton || !navSide) {
    return;
  }

  // État du menu (fermé par défaut)
  let isOpen = false;

  // Fonction pour ouvrir le menu
  const openMenu = (): void => {
    navSide.style.transform = 'translate(0%, 0px)';
    isOpen = true;
  };

  // Fonction pour fermer le menu
  const closeMenu = (): void => {
    navSide.style.transform = 'translate(-100%, 0px)';
    isOpen = false;
  };

  // S'assurer que le menu est fermé au démarrage
  closeMenu();

  // Gestionnaire de clic sur le bouton d'ouverture
  sideNavButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Gestionnaire de clic sur le document pour fermer le menu
  document.addEventListener('click', (event) => {
    if (!isOpen) return;

    const target = event.target as HTMLElement;

    // Si le clic est sur .nav_side ou un de ses enfants, ne pas fermer
    if (navSide.contains(target)) {
      return;
    }

    // Si le clic est sur le bouton d'ouverture, ne pas fermer (géré par son propre gestionnaire)
    if (sideNavButton.contains(target)) {
      return;
    }

    // Sinon, fermer le menu
    closeMenu();
  });

  // Optionnel : fermer avec la touche Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });
}
