import { App } from "vue";
import LocalizationRU from "./localizationRU";
import LocalizationEN from "./localizationEN"

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $localizationRU: LocalizationRU;
    $localizationEN: LocalizationEN;
  }
}
const install = (app: App) => {
  const localizationRU = new LocalizationRU();
  app.config.globalProperties.$localizationRU = localizationRU;

  const localizationEN = new LocalizationEN();
  app.config.globalProperties.$localizationEN = localizationEN;
};

const localizationRU = {
  install,
};
const localizationEN = {
  install,
};

export default localizationRU;
