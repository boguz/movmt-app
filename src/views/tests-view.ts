import { LitElement, html, css } from "lit";

import { appStore } from '../store/app-store';

export class TestsView extends LitElement {
	private unsubscribe?: () => void;

    private readonly testColors: String[] = [
        'blue',
        'teal',
        'green',
        'purple',
        'yellow',
        'orange',
        'red'
    ];

    static styles = css`
        .test-colors__colors {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .test-color__title {
            margin-bottom: var(--spacing-s);
        }

        .test-colors__color {
            display: block;
            height: 4rem;
            width: 100%;
            background-color: var(--test-colors-color);
        }
    `;

	connectedCallback(): void {
		super.connectedCallback();

		this.unsubscribe = appStore.subscribe((state) => {
			this.requestUpdate();
		});
	}

	disconnectedCallback(): void {
		this.unsubscribe?.();

		super.disconnectedCallback();
	}

	render() {
		return html`
            <section class="test-section">
                <h3 class="test section__headline">Colors</h3>

                <div class="test-colors">
                    ${this.testColors.map((testColor) => {
                        return html`
                        <h4 class="test-color__title">${testColor}</h4>
                        <div class="test-colors__colors">
                            <div class="test-colors__color" style="--test-colors-color: var(--color-${testColor}-light);"></div>
                            <div class="test-colors__color" style="--test-colors-color: var(--color-${testColor}-primary);"></div>
                            <div class="test-colors__color" style="--test-colors-color: var(--color-${testColor}-dark);"></div>
                        </div>
                        `
                    })}
                </div>
            </section>
		`;
	}
}

customElements.define("tests-view", TestsView);
