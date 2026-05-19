import { LitElement, html } from "lit";

export class NextBreakCard extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<section class="next-break-card__card">
				<div class="next-break-card__content">
					<p class="next-break-card__label">Next break at</p>

					<time class="next-break-card__time" datetime="2026-05-14T14:30:00">
						14:30
					</time>

					<div class="next-break-card__progress">
						<div class="next-break-card__progress-bar" style="width: 75%;"></div>
					</div>

					<p class="next-break-card__remaining">15 min remaining</p>
				</div>
				<div class="next-break-card__illustration-container">
                    <img class="next-break-card__illustration" src="/public/illustrations/streak-card-streak.png" alt="" aria-hidden="true">
                </div>
			</section>
		`;
	}
}

customElements.define("next-break-card", NextBreakCard);
