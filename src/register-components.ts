import { App } from "@vue/runtime-core";
import Tirscript3Buttom from "tirscript3-button/src/tirscript3-button.vue"
import Tirscript3Input from "tirscript3-input/src/tirscript3-input.vue"
import Tirscript3Dropdown from "tirscript3-dropdown/src/tirscript3-dropdown.vue"
import Tirscript3BoxMenu from "tirscript3-box-menu/src/tirscript3-box-menu.vue"
import Tirscript3ListView from "tirscript3-list-view/src/tirscript3-list-view.vue"
import Tirscript3ListViewItem from "tirscript3-list-view/src/tirscript3-list-view-item.vue"
import Tirscript3Tags from "tirscript3-tags/src/tirscript3-tags.vue"

import Tirscript3Tree from "tirscript3-tree/src/tirscript3-tree.vue"
import Tirscript3TreeElement from "tirscript3-tree/src/tirscript3-tree-element.vue"

import Tirscript3TextArea from "tirscript3-textarea/src/tirscript-textarea.vue"
//import Tirscript3Checkbox from "tirscript3-checkbox/src/tirscript3-checkbox.vue"
//import Tirscript3Scroll from "tirscript3-scroll/src/tirscript3-scroll.vue"

//tirscript3-list-view
// tirscript3-box-menu
// tirscript3-list-view-item

export default (app: App<Element>) => {
  app.component("tirscript3-button", Tirscript3Buttom);
  app.component("tirscript3-input", Tirscript3Input);
  app.component("tirscript3-dropdown", Tirscript3Dropdown);
  app.component("tirscript3-box-menu", Tirscript3BoxMenu);
  app.component("tirscript3-list-view", Tirscript3ListView);
  app.component("tirscript3-list-view-item", Tirscript3ListViewItem);
  app.component("tirscript3-tags", Tirscript3Tags);

  app.component("tirscript3-tree", Tirscript3Tree);
  app.component("tirscript3-tree-element", Tirscript3TreeElement);

  app.component("tirscript3-textarea", Tirscript3TextArea);
  //app.component("tirscript3-checkbox", Tirscript3Checkbox);
  //app.component("tirscript3-scroll", Tirscript3Scroll);
}