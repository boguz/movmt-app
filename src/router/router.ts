import { renderStage } from '../components/Stage';
import { updateActiveNav } from '../components/Sidebar';

export const ROUTES = ['home', 'exercises', 'settings'] as const;
export type Route = typeof ROUTES[number];

function getRoute(): Route {
  const hash = location.hash.replace('#', '') as Route;

  if (!hash || !ROUTES.includes(hash)) {
    return 'home';
  }

  return hash;
}

export function initRouter(): void {
  function handleRoute(): void {
    const route = getRoute();

    renderStage(route);
    updateActiveNav(route);

    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', handleRoute);

  // initial render
  handleRoute();
}