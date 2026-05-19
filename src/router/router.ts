import { appStore } from "../store/app-store";

export type RouteName =
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

export function getRoute(): Route {
	const hash = location.hash.replace("#", "");

	const path = hash || "/home";

	/*
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
		case "/home":
			return { name: "home" };

		case "/exercises":
			return { name: "exercises" };

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

export function initRouter(): void {
	function syncRoute(): void {
		appStore.setState({
			route: getRoute(),
		});
	}

	window.addEventListener("hashchange", syncRoute);

	syncRoute();
}
