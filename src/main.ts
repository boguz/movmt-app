import './styles/main.css';
import { Layout } from './components/Layout';
import { initRouter } from './router/router';

const app = document.querySelector('#app')!;

app.appendChild(Layout());

initRouter();