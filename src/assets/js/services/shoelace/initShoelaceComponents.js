// shoelace base
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
// Set the base path to the folder where Shoelace is installed
// setBasePath('/node_modules/@shoelace-style/shoelace/dist');
setBasePath('/shoelace');

import { ShoelaceComponents } from '../../helpers/constants';

export const initShoelaceComponents = ({ components }) => {
  if (components?.length) {
    components.forEach((component) => {
      switch(component) {
        case ShoelaceComponents.tags:
          import('@shoelace-style/shoelace/dist/components/tag/tag.js');
          break;
        case ShoelaceComponents.radioGroup:
          import('@shoelace-style/shoelace/dist/components/radio-group/radio-group.js');
          import('@shoelace-style/shoelace/dist/components/radio/radio.js');
          break;
        case ShoelaceComponents.dropdown:
          import('@shoelace-style/shoelace/dist/components/dropdown/dropdown.js');
          break;
        case ShoelaceComponents.details:
          import('@shoelace-style/shoelace/dist/components/details/details.js');
          break;
        case ShoelaceComponents.tooltip:
          import('@shoelace-style/shoelace/dist/components/tooltip/tooltip.js');
          break;
        case ShoelaceComponents.popup:
          import('@shoelace-style/shoelace/dist/components/popup/popup.js');
          break;
        case ShoelaceComponents.input:
          import('@shoelace-style/shoelace/dist/components/input/input.js');
          break;
        case ShoelaceComponents.checkbox:
          import('@shoelace-style/shoelace/dist/components/checkbox/checkbox.js');
          break;
        case ShoelaceComponents.button:
          import('@shoelace-style/shoelace/dist/components/button/button.js');
          break;
        case ShoelaceComponents.drawer:
          import('@shoelace-style/shoelace/dist/components/drawer/drawer.js');
          break;
        case ShoelaceComponents.dialog:
          import('@shoelace-style/shoelace/dist/components/dialog/dialog.js');
          break;
        case ShoelaceComponents.tabGroup:
          //tab-group
          import('@shoelace-style/shoelace/dist/components/tab/tab.js');
          import('@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js');
          import('@shoelace-style/shoelace/dist/components/tab-group/tab-group.js');
          break;

        default:
          break;
      }
    });
  }
};
