import { appStore } from '../store/app-store';

export const ROUTES = ['home', 'exercises', 'settings'] as const;

export type Route = typeof ROUTES[number];

export function getRoute(): Route {
  const hash = location.hash.replace('#', '') as Route;

  if (!hash || !ROUTES.includes(hash)) {
    return 'home';
  }

  return hash;
}

export function initRouter(): void {
    console.log('initing initRouter.apply.apply')
  function syncRoute(): void {
    appStore.setState({
      route: getRoute(),
    });
  }

  window.addEventListener('hashchange', syncRoute);

  syncRoute();
}