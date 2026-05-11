import { LitElement, html } from 'lit';

import { appStore } from '../store/app-store';

import '../views/home-view';
import '../views/exercises-view';
import '../views/settings-view';

import type { Route } from '../router/router';

export class AppStage extends LitElement {
  private route: Route = 'home';

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

    super.disconnectedCallback();
  }

  private renderView() {
    switch (this.route) {
      case 'home':
        return html`
          <home-view></home-view>
        `;

      case 'exercises':
        return html`
          <exercises-view></exercises-view>
        `;

      case 'settings':
        return html`
          <settings-view></settings-view>
        `;

      default:
        return html`
          <home-view></home-view>
        `;
    }
  }

  render() {
    return html`
      <main class="main-stage">
        ${this.renderView()}
      </main>
    `;
  }
}

customElements.define('app-stage', AppStage);