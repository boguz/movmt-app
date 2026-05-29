import { appStore } from "./app-store";
import { navigate } from "../router/router";

export function login(username: string): void {
	const state = appStore.getState();

	const existingUser = state.users.find(
		(user) => user.username === username
	);

	const user = existingUser || {
		username,
	};

	if (!existingUser) {
		appStore.setState({
			users: [...state.users, user],
		});
	}

	appStore.setState({
		currentUser: user,
	});

	navigate("/home");
}

export function logout(): void {
	appStore.setState({
		currentUser: null,
	});

	navigate("/login");
}
