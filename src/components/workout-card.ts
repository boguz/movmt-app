import { LitElement, html } from "lit";
import { Workout } from "../data/types";

export class WorkoutCard extends LitElement {
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
			<a href="/#/workouts/${this.workout?.id}" class="workout-card" data-workout-type=${this.workout?.type}>
				<div class="workout-card__illustration-container">
					<img
						src="/public/illustrations/streak-card-streak.png"
						alt=""
						class="workout-card__illustration"
					/>
				</div>

                <div class="workout-card__bottom">
                    <h3 class="workout-card__title">${this.workout?.name}</h3>
                    <p class="workout-card__description">${this.workout?.description}</p>

                    <div class="workout-card__stats">
                        <p class="workout-card__stat workout-card__stat--duration">${this.workoutDuration}</p>
                        <p class="workout-card__stat workout-card__stat--type">${this.workout?.type}</p>
                    </div>
                </div>

			</a>
		`;
	}
}

customElements.define("workout-card", WorkoutCard);
