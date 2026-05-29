import { LitElement, html, nothing } from "lit";
import { appStore } from "../store/app-store";

import "./app-sidebar";
import "./app-stage";

export class AppLayout extends LitElement {
    private userName: string | null = null;
	
    private unsubscribe?: () => void;

    createRenderRoot() {
		return this;
	}

    connectedCallback(): void {
		super.connectedCallback();

		this.unsubscribe = appStore.subscribe((state) => {
			this.userName = state.currentUser?.username ?? null;

			this.requestUpdate();
		});
	}

	disconnectedCallback(): void {
		this.unsubscribe?.();

		super.disconnectedCallback();
	}
	render() {
		return html`
			<div class="layout">
                ${this.userName ? html`<app-sidebar></app-sidebar>` : nothing}
				<app-stage class="stage"></app-stage>
			</div>
		`;
	}
}

customElements.define("app-layout", AppLayout);
