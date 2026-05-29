import { LitElement, html } from "lit";

import { login } from "../store/actions";

export class LoginView extends LitElement {
	createRenderRoot() {
		return this;
	}

	private handleSubmit(event: SubmitEvent): void {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const username = formData.get("username")?.toString().trim();

		if (!username) return;

		login(username);
	}

	render() {
		return html`
			<section class="login-view">
				<img
					src="/public/logo/movmt-logo.svg"
					alt="Logo"
					class="login-view__logo"
				/>

                <p class="login-view__slogan">Small moves. Big impact.</p>

				<form @submit=${this.handleSubmit} class="login-view__form">
                    <input type="text" name="username" placeholder="Username" class="input login-view__input" required />

					<button type="submit" class="login-view__button">Login</button>
				</form>
                
                <p class="login-view__info">Your data never leaves your device.</p>
			</section>
		`;
	}
}

customElements.define("login-view", LoginView);
