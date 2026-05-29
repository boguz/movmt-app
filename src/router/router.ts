import { appStore } from "../store/app-store";

export type RouteName =
	| "login"
	| "home"
	| "exercises"
	| "workouts"
	| "workout"
	| "settings"
	| "tests";

export type Route = {
	name: RouteName;
	params?: Record<string, string>;
};

const PROTECTED_ROUTES: RouteName[] = [
	"home",
	"exercises",
	"workouts",
	"workout",
	"settings",
	"tests",
];

export function getRoute(): Route {
	const hash = location.hash.replace("#", "");

	const path = hash || "/home";

	/*
	 * Dynamic workout route
	 * /workouts/quick-reset
	 */
	const workoutMatch = path.match(/^\/workouts\/(.+)$/);

	if (workoutMatch) {
		return {
			name: "workout",

			params: {
				id: workoutMatch[1],
			},
		};
	}

	/*
	 * Static routes
	 */
	switch (path) {
		case "/login":
			return { name: "login" };

		case "/home":
			return { name: "home" };

		case "/workouts":
			return { name: "workouts" };

		case "/settings":
			return { name: "settings" };

		case "/tests":
			return { name: "tests" };

		default:
			return { name: "home" };
	}
}

export function navigate(path: string): void {
	location.hash = path;
}

export function initRouter(): void {
	function syncRoute(): void {
		const state = appStore.getState();

		let route = getRoute();

		const isProtected = PROTECTED_ROUTES.includes(route.name);

		/*
		 * Redirect unauthenticated users
		 */
		if (!state.currentUser && isProtected) {
			route = {
				name: "login",
			};

			location.hash = "/login";
		}

		/*
		 * Redirect logged-in users away from login
		 */
		if (state.currentUser && route.name === "login") {
			route = {
				name: "home",
			};

			location.hash = "/home";
		}

		appStore.setState({
			route,
		});
	}

	window.addEventListener("hashchange", syncRoute);

	syncRoute();
}