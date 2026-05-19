import { LitElement, html } from "lit";
import './quick-action-card';
import { workouts } from "../data/workouts";
import type { Workout } from "../data/types";

export class QuickActions extends LitElement {
    amountOfWorkoutsToShow = 3;

    createRenderRoot() {
        return this;
    }

    get randomWorkouts(): Workout[] {
        const shuffled = [...workouts].sort(() => Math.random() - 0.5);

        return shuffled.slice(0, this.amountOfWorkoutsToShow);
    }

    render() {
        return html`
            <section class="quick-actions">
                <h2 class="quick-actions__headline">Quick actions</h2>

                <div class="quick-actions__cards">
                    ${this.randomWorkouts.map((workout: Workout) => {
                        return html`
                            <quick-action-card .workout="${workout}"></quick-action-card>
                        `
                    })}
                </div>
            </section>
        `;
    }
}

customElements.define("quick-actions", QuickActions);
