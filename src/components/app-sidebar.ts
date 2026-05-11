import { LitElement, html, nothing } from 'lit';

import { appStore } from '../store/app-store';

import type { Route } from '../router/router';

export class AppSidebar extends LitElement {
  private currentRoute: Route = 'home';

  private unsubscribe?: () => void;

  createRenderRoot() {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.unsubscribe = appStore.subscribe((state) => {
      this.currentRoute = state.route;

      this.requestUpdate();
    });
  }

  disconnectedCallback(): void {
    this.unsubscribe?.();

    super.disconnectedCallback();
  }

  private isActive(route: Route): boolean {
    return this.currentRoute === route;
  }

  render() {
    return html`
      <aside class="sidebar">
        <img
          src="/public/logo/movmt-logo.svg"
          alt="Logo"
          class="sidebar__logo"
        >

        <nav class="main-nav">
          <ul class="main-nav__list">

            <li class="main-nav__item">
              <a
                href="#home"
                class="main-nav__link"
                aria-current=${this.isActive('home') ? 'page' : nothing}
              >
                <span class="main-nav__title">Home</span>
              </a>
            </li>

            <li class="main-nav__item">
              <a
                href="#exercises"
                class="main-nav__link"
                aria-current=${this.isActive('exercises') ? 'page' : nothing}
              >
                <span class="main-nav__title">Guided Exercises</span>
              </a>
            </li>

            <li class="main-nav__item">
              <a
                href="#settings"
                class="main-nav__link"
                aria-current=${this.isActive('settings') ? 'page' : nothing}
              >
                <span class="main-nav__title">Settings</span>
              </a>
            </li>

          </ul>
        </nav>

        <article class="streak-card">
          Streak Card
        </article>
      </aside>
`;
}
}

customElements.define('app-sidebar', AppSidebar);


