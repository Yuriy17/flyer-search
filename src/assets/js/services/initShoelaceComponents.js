// shoelace base
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
// Set the base path to the folder where Shoelace is installed
setBasePath('/node_modules/@shoelace-style/shoelace/dist');

//tab-group
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';

const initNav = () => {
  const nav = document.querySelector('sl-tab-group.nav');
  const links = nav.querySelectorAll('.link');

  if (links?.length) {
    links.forEach((link) => {
      if (window.location.pathname === link.getAttribute('href')) {
        link.classList.add('active');
        nav.show(`${link.parentElement.getAttribute('panel')}`);
      }
    });
  }
};

export const initShoelaceComponents = () => {
  initNav();
};
