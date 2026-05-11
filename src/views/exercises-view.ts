import { LitElement, html } from 'lit';

export class ExercisesView extends LitElement {
  render() {
    return html`
      <section>
        <h1>Exercises</h1>
        <p>🏋️‍♀️</p>
      </section>
    `;
  }
}

customElements.define('exercises-view', ExercisesView);