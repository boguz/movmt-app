import type { Route } from "../router/router";

export interface User {
	username: string;
}

export interface AppState {
	route: Route;

	currentUser: User | null;

	users: User[];

	darkMode: boolean;

	streak: number;
}
