import { App } from "vue";
import ColorScheme from "./colorSheme";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $colorCheme: ColorScheme;
  }
}
const install = (app: App) => {
  const colorScheme = new ColorScheme();

  app.config.globalProperties.$colorCheme = colorScheme;
};

const colorScheme = {
  install,
};

export default colorScheme;
