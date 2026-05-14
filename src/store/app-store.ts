import { Store } from './store';

import type { AppState } from './app-state';

export const appStore = new Store<AppState>({
    route: 'home',

    user: {
        name: 'Luis',
    },

    streak: 0,

    darkMode: false,
});