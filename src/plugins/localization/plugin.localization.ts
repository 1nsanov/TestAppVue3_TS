import { App } from "vue";
import Localization from "./localization";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $localization: Localization;
  }
}
const install = (app: App) => {
  const localization = new Localization();
  app.config.globalProperties.$my = localization;
};

const localization = {
  install,
};

export default localization;
