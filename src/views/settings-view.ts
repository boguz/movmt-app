import { LitElement, html } from "lit";

export class SettingsView extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<section>
				<h1>Settings</h1>
				<p>⚙️</p>
			</section>
		`;
	}
}

customElements.define("settings-view", SettingsView);
