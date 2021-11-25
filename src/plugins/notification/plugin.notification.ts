import { App } from "vue";
import Notification from "./notification";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $notification: Notification;
  }
}
const install = (app: App) => {
  const notification = new Notification();
  app.component("UiNotification", Notification);
  app.config.globalProperties.$notification = notification;
};

const notification = {
  install,
};

export default notification;
