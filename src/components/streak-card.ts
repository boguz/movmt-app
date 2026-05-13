import { LitElement, html } from 'lit';

import { appStore } from '../store/app-store';

export class StreakCard extends LitElement {
  private unsubscribe?: () => void;

  createRenderRoot() {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.unsubscribe = appStore.subscribe((state) => {
      this.route = state.route;

      this.requestUpdate();
    });
  }

  disconnectedCallback(): void {
    this.unsubscribe?.();
  }


  render() {
    return html`
      <article class="streak-card__card">
        <h3 class="streak-card__days">
            <span class="streak-card__icon">🔥</span>
            <span class="streak-card__days-count">7</span>
            <span class="streak-card__days-description">Day streak</span>
        </h3>
        <p class="streak-card__message">Keep it up...</p>
        <img src="/public/illustrations/streak-card-streak.png" alt="" class="streak-card__illustration" aria-hidden="true">

      </article>
    `;
  }
}

customElements.define('streak-card', StreakCard);