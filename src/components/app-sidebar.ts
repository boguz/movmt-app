import { LitElement, html, nothing } from "lit";

import { appStore } from "../store/app-store";

import type { Route } from "../router/router";
import { logout } from '../store/actions';
import "./streak-card";

export class AppSidebar extends LitElement {
	private currentRoute: Route = {
		name: "home",
	};

	private unsubscribe?: () => void;

	createRenderRoot() {
		return this;
	}

	connectedCallback(): void {
		super.connectedCallback();

		this.unsubscribe = appStore.subscribe((state) => {
			this.currentRoute = state.route;

			this.requestUpdate();
		});
	}

	disconnectedCallback(): void {
		this.unsubscribe?.();

		super.disconnectedCallback();
	}

	private isActive(routeName: Route['name']): boolean {
        return this.currentRoute.name === routeName;
    }

	render() {
		return html`
			<aside class="sidebar">
				<img
					src="/public/logo/movmt-logo.svg"
					alt="Logo"
					class="sidebar__logo"
				/>

				<nav class="main-nav">
					<ul class="main-nav__list">
						<li class="main-nav__item">
							<a
								href="#/home"
								class="main-nav__link"
								aria-current=${this.isActive("home") ? "page" : nothing}
							>
                                <span class="main-nav__icon main-nav__icon--home" aria-hidden="true"></span>
								<span class="main-nav__title">Home</span>
							</a>
						</li>

						<li class="main-nav__item">
							<a
								href="#/workouts"
								class="main-nav__link"
								aria-current=${this.isActive("workouts") ? "page" : nothing}
							>
                                <span class="main-nav__icon main-nav__icon--workouts" aria-hidden="true"></span>
								<span class="main-nav__title">Workouts</span>
							</a>
						</li>

						<li class="main-nav__item">
							<a
								href="#/settings"
								class="main-nav__link"
								aria-current=${this.isActive("settings") ? "page" : nothing}
							>
                                <span class="main-nav__icon main-nav__icon--settings" aria-hidden="true"></span>
								<span class="main-nav__title">Settings</span>
							</a>
						</li>

						<li class="main-nav__item">
							<a
								href="#/tests"
								class="main-nav__link"
								aria-current=${this.isActive("tests") ? "page" : nothing}
							>
                                <span class="main-nav__icon main-nav__icon--settings" aria-hidden="true"></span>
								<span class="main-nav__title">Tests</span>
							</a>
						</li>
					</ul>
				</nav>

				<streak-card class="streak-card"></streak-card>

                <button class="logout-button" @click="${logout}">
                    <span class="logout-button__icon" aria-hidden="true"></span>
                    <span class="logout-button__text">Logout</span>
                </button>
			</aside>
		`;
	}
}

customElements.define("app-sidebar", AppSidebar);
