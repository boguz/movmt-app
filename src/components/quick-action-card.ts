import { LitElement, html } from "lit";
import { Workout, WorkoutCardCategories } from "../data/types";

export class QuickActionCard extends LitElement {
	static properties = {
		workout: { type: Object },
	};

	workout: Workout | undefined;

	createRenderRoot() {
		return this;
	}

	constructor() {
		super();

		this.workout = undefined;
	}

	get workoutDuration(): string {
		const seconds = this.workout!.exercises.reduce(
			(total, exercise) => total + exercise.duration,
			0,
		);

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        if (remainingSeconds === 0) {
            return `${minutes} min`;
        }

        return `${minutes}m ${remainingSeconds}s`;
	}

	render() {
		return html`
			<article class="quick-action-card" data-workout-type=${this.workout?.type}>
				<div class="quick-action-card__illustration-container">
					<img
						src="/public/illustrations/streak-card-streak.png"
						alt=""
						class="quick-action-card__illustration"
					/>
				</div>
				<h3 class="quick-action-card__title">${this.workout?.name}</h3>
				<p class="quick-action-card__duration">${this.workoutDuration} min</p>
				<a href="/#/workouts/${this.workout?.id}" class="quick-action-card__cta"></a>
			</article>
		`;
	}
}

customElements.define("quick-action-card", QuickActionCard);
