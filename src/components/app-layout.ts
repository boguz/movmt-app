import { LitElement, html } from 'lit';

import './app-sidebar';
import './app-stage';

export class AppLayout extends LitElement {
  createRenderRoot() {
    return this;
    }

  render() {
    return html`
      <div class="layout">
        <app-sidebar></app-sidebar>
        <app-stage></app-stage>
      </div>
    `;
  }
}

customElements.define('app-layout', AppLayout);