import { Sidebar } from './Sidebar';
import { MainStage } from './Stage';

export function Layout(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'layout';

  const sidebar = Sidebar();
  const mainStage = MainStage();

  container.appendChild(sidebar);
  container.appendChild(mainStage);

  return container;
}