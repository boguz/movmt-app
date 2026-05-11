import './styles/main.css';

import './components/app-layout';

import { initRouter } from './router/router';

const app = document.querySelector('#app');

if (app) {
  app.innerHTML = `
    <app-layout></app-layout>
  `;
}

// 👇 initialize routing/store sync
initRouter();