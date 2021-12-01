import { App } from "vue";
import JsonPlugin from "./JsonPl";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $json: JsonPlugin;
  }
}
const install = (app: App) => {
  const json = new JsonPlugin();
  app.config.globalProperties.$json = json;
};

const json = {
  install,
};

export default json;
