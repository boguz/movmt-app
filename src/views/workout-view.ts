import { LitElement, html } from "lit";
import { appStore } from '../store/app-store';
import { getWorkoutById } from "../data/helpers/get-workout-by-id";

export class WorkoutView extends LitElement {
	createRenderRoot() {
		return this;
	}

	get workout() {
		const route = appStore.getState().route;
		const workoutId = route.params?.id;

		if (!workoutId) {
			return null;
		}

		return getWorkoutById(workoutId);
	}

	render() {
		if (!this.workout) {
      return html`
        <p>
          Workout not found.
        </p>
      `;
    }

    return html`
      <h1>
        ${this.workout.name}
      </h1>
    `;
	}
}

customElements.define("workout-view", WorkoutView);
