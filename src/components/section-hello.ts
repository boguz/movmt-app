import { LitElement, html } from "lit";

export class SectionHello extends LitElement {
    static properties = {
        userName: { type: String, attribute: 'user-name' }
    };

    userName = null;

    private messages = [
        'Small moves. Big impact!',
        'Take a moment to reset.',
        'Your body will thank you.',
        'A quick break goes a long way.',
        'Movement fuels focus.',
        'Stand up. Stretch. Breathe.'
    ];

    createRenderRoot() {
        return this;
    }

    get greeting(): string {
        const hour = new Date().getHours();

        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';

        return 'Good evening';
    }

    get message(): string {
        return this.messages[Math.floor(Math.random() * this.messages.length)];
    }

    render() {
        return html`
            <section class="section-hello__section">
                <h1 class="section-hello__headline">${this.greeting}, ${this.userName}! <span class="section-hello__headline-icon">👋</span></h1>
                <p class="section-hello__message">${this.message}</p>
            </section>
        `;
    }
}

customElements.define("section-hello", SectionHello);
