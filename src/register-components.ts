import { App } from "@vue/runtime-core";
import Tirscript3Buttom from "tirscript3-button/src/tirscript3-button.vue"
import Tirscript3Input from "tirscript3-input/src/tirscript3-input.vue"
import Tirscript3Dropdown from "tirscript3-dropdown/src/tirscript3-dropdown.vue"
import Tirscript3BoxMenu from "tirscript3-box-menu/src/tirscript3-box-menu.vue"
import Tirscript3ListView from "tirscript3-list-view/src/tirscript3-list-view.vue"
import Tirscript3ListViewItem from "tirscript3-list-view/src/tirscript3-list-view-item.vue"
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
}