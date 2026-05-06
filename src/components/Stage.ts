import type { Route } from '../router/router';

import { homeView } from '../views/home';
import { exercisesView } from '../views/exercises';
import { settingsView } from '../views/settings';

type View = () => string;

const routes: Record<Route, View> = {
  home: homeView,
  exercises: exercisesView,
  settings: settingsView,
};

let stageEl: HTMLElement;

export function MainStage(): HTMLElement {
  const main = document.createElement('main');
  main.className = 'main-stage';

  stageEl = main;

  return main;
}

// 👇 called by router
export function renderStage(route: Route): void {
  if (!stageEl) return;

  const view = routes[route];

  stageEl.innerHTML = `
    <div class="main-stage__content">
      ${view()}
    </div>
  `;
}