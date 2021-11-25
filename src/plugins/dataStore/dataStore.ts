import { App } from "vue";
import { Store } from "vuex";
import Vuex from 'vuex';
import CustomizationModel from "@/plugins/customization/customization"

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $customization: Store<CustomizationModel>;
  }
}

const install = (app: App) => {
  const customization = new Vuex.Store({
    state : new CustomizationModel()
  })
  app.config.globalProperties.$customization = customization;
};

const customization = {
  install,
};

export default customization;
