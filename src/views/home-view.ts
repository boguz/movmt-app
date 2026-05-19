import { LitElement, html } from "lit";
import '../components/section-hello';
import '../components/next-break-card';
import '../components/quick-actions';

import { appStore } from '../store/app-store';

export class HomeView extends LitElement {
    private userName: string | null = null;

	private unsubscribe?: () => void;

	createRenderRoot() {
		return this;
	}

	connectedCallback(): void {
		super.connectedCallback();

		this.unsubscribe = appStore.subscribe((state) => {
			this.userName = state.user.name;

			this.requestUpdate();
		});
	}

	disconnectedCallback(): void {
		this.unsubscribe?.();

		super.disconnectedCallback();
	}

	render() {
		return html`
            <section-hello user-name="${this.userName}"></section-hello>
            <next-break-card></next-break-card>
            <quick-actions></quick-actions>
		`;
	}
}

customElements.define("home-view", HomeView);
