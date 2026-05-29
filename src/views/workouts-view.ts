import { LitElement, html } from "lit";
import '../components/workout-card';
import { workouts } from "../data/workouts";
import type { Workout } from "../data/types";

export class WorkoutsView extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<section>
				<h1>Workouts</h1>
				<p>This will be the filters</p>

                <div class="workouts-list">
                    ${workouts.map((workout: Workout) => {
                        return html`
                            <workout-card .workout="${workout}"></workout-card>
                        `
                    })}
                </div>

			</section>
		`;
	}
}

customElements.define("workouts-view", WorkoutsView);
