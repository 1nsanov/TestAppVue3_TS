import { App } from "vue";
import LocalizationDefault from "./localizationDefault";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $localization: LocalizationDefault;
  }
}
const install = (app: App) => {
  const localization = new LocalizationDefault();
  app.config.globalProperties.$localization = localization;
};

const localization = {
  install,
};

export default localization;
