import type { Route } from '../router/router';

export function Sidebar(): HTMLElement {
    const aside = document.createElement('aside');
    aside.className = 'sidebar';

    aside.innerHTML = `
        <img src="/public/logo/movmt-logo.svg" alt="Logo" class="sidebar__logo">

        <nav class="main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__item">
                    <a href="#home" class="main-nav__link">
                        <span class="main-nav__icon main-nav__icon--home"></span>
                        <span class="main-nav__title">Home</span>
                    </a>
                </li>
                <li class="main-nav__item">
                    <a href="#exercises" class="main-nav__link">
                        <span class="main-nav__icon main-nav__icon--exercises"></span>
                        <span class="main-nav__title">Guided Exercises</span>
                    </a>
                </li>
                <li class="main-nav__item">
                    <a href="#settings" class="main-nav__link">
                        <span class="main-nav__icon main-nav__icon--settings"></span>
                        <span class="main-nav__title">Settings</span>
                    </a>
                </li>
            </ul>
        </nav>

        <article class="streak-card">Streak card</article>
        <button>Log out</button>
    `;

    return aside;
}

export function updateActiveNav(route: Route): void {
  // remove from ALL links
  document.querySelectorAll('.main-nav__link').forEach((link) => {
    link.removeAttribute('aria-current');
  });

  // find active link
  const activeLink = document.querySelector<HTMLAnchorElement>(
    `.main-nav__link[href="#${route}"]`
  );

  if (activeLink) {
    activeLink.setAttribute('aria-current', 'page');
  }
}