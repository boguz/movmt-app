import type { Route } from '../router/router';

export interface AppState {
    route: Route;

    user: {
        name: string | null;
    };

    streak: number;

    darkMode: boolean;
}