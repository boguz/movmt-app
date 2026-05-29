import { Store } from "./store";

import type { AppState } from "./app-state";

const STORAGE_KEY = "movmt-app";

function loadState(): AppState {
	const saved = localStorage.getItem(STORAGE_KEY);

	if (saved) {
		return JSON.parse(saved);
	}

	return {
		route: {
			name: "home",
		},

		currentUser: null,

		users: [],

		darkMode: false,

		streak: 0,
	};
}

export const appStore = new Store<AppState>(loadState());

// persist automatically
appStore.subscribe((state) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
});
