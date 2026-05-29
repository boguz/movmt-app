import { LitElement, html } from "lit";

import { appStore } from "../store/app-store";

import "../views/home-view";
import "../views/workouts-view";
import "../views/settings-view";
import "../views/tests-view";
import "../views/workout-view";
import "../views/login-view";

import type { Route } from "../router/router";

export class AppStage extends LitElement {
	private route!: Route;

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
		switch (this.route.name) {
			case "login":
				return html`
					<login-view class="view"></login-view>
				`;

			case "home":
				return html`
					<home-view class="view"></home-view>
				`;

			case "workouts":
				return html`
					<workouts-view class="view"></workouts-view>
				`;

			case "settings":
				return html`
					<settings-view class="view"></settings-view>
				`;

			case "tests":
				return html`
					<tests-view class="view"></tests-view>
				`;

			case "workout":
				return html`
					<workout-view
						class="view"
						.workoutId=${this.route.params?.id}
					></workout-view>
				`;

			default:
				return html`
					<home-view class="view"></home-view>
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

customElements.define("app-stage", AppStage);