import { LitElement, html } from 'lit';

export class HomeView extends LitElement {
  render() {
    return html`
      <section>
        <h1>Home</h1>
        <p>Welcome to Movmt 👋</p>
      </section>
    `;
  }
}

customElements.define('home-view', HomeView);